// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cacheData from 'memory-cache';
import { NFT_COLLECTION_NAME, NFT_CONTRACT } from '@/lib/settings';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Order {
  created_date: string;
  closing_date: string;
  base_price: number;
  payment_token_contract: {
    symbol: string;
    decimals: number;
    name: string;
  };
}
interface Asset {
  image_url: string;
  last_sale: {
    total_price: number;
    payment_token: {
      symbol: string;
      decimals: number;
    };
  };
  top_ownerships: {
    owner: {
      address: string;
    };
  }[];
  orders: Order[]
}

function getSaleEnd({ orders }: Asset): string {
  /**
   * # Sale end
   *  1 - get orders
   *  2 - get first sorted by date oldest
   *  3 - get closing_date convert from GMT
   *  4 - (optional) extend 10 min for each successful order 10 min before that date
   **/
  const [order] = orders.sort(
    ({ created_date: c1 }, { created_date: c2 }) => (+new Date(c1)) - (+new Date(c2)),
  );
  return order?.closing_date;
}

export interface Price {
  symbol: string;
  amount: number;
}
function getCurrentPrice({ orders }: Asset): Price {
  /**
   * # Current price
   *   1 - get orders
   *   2 - get first sorted by date newest
   *   3 - get base price, divide wuth payment_token_contract.decimals and use payment_token_contract.symbol
   * */
  const [order] = orders.sort(
    ({ created_date: c1 }, { created_date: c2 }) => (+new Date(c2)) - (+new Date(c1)),
  );
  const { symbol = '', decimals = 1 } = order?.payment_token_contract || {};
  const amount = order?.base_price / Math.pow(10, decimals);
  return { symbol, amount };
}

async function getAsset(tokenId: string): Promise<Asset> {
  // we use cache to avoid rate limiting on opensea requests
  const uri = `https://api.opensea.io/api/v1/asset/${NFT_CONTRACT}/${tokenId}/`;
  const value = cacheData.get(uri);
  if (value) {
    return value;
  }
  // get fresh information and cache it
  const hours = 12;
  const res = await fetch(uri);
  // if (res.status === 200) { // :fingers_crossed:
  const data = await res.json();
  cacheData.put(uri, data, hours * 1000 * 60 * 60);
  return data;
  // }
}

function getOwnerAddress({ top_ownerships: [{ owner }] }: Asset): string {
  // wild guess, not more sells during the event :fingers_crossed:
  return owner.address;
}

function getWinningBid({ last_sale: { payment_token: { symbol, decimals }, total_price } }: Asset): Price {
  const amount = total_price / Math.pow(10, decimals);
  return { symbol, amount };
}

type Collection = {
  token_id: string;
  name: string;
  image_url: string;
}[];
async function getAssets(): Promise<Collection> {
  const value = cacheData.get('assets');
  if (value) {
    return value;
  }
  const hours = 4; // 4h cache its enough
  const uri = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=${NFT_COLLECTION_NAME}`;
  const res = await fetch(uri, { headers: { 'Accept': 'application/json' } });
  const { assets } = await res.json();
  cacheData.put('assets', assets, hours * 1000 * 60 * 60);
  return assets;
}

export interface ResponseItem {
  id: number;
  name: string;
  imageURL: string;
  price: Price;
  closingDate: string;
  isSold: boolean;
  winningBid?: Price;
  winnerAddress?: string;
}
export type ResponseData = ResponseItem[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | { status: string }>,
) {
  const assets = await getAssets();
  const data = await Promise.all(assets.map(async ({ name, token_id, image_url }) => {
    const asset = await getAsset(token_id);
    const isSold = !!asset?.last_sale;
    const winnerDetails = isSold ? {
      winningBid: getWinningBid(asset),
      winnerAddress: getOwnerAddress(asset),
    } : {};
    return {
      name,
      imageURL: image_url,
      price: getCurrentPrice(asset),
      closingDate: getSaleEnd(asset),
      isSold,
      ...winnerDetails,
    } as ResponseItem;
  }));
  const numbered = data.map(x => {
    const matches = x.name.match(/(?<number>\d+$)/);
    const num = parseInt(matches?.groups?.number as string);
    return { ...x, id: num };
  });
  return res.status(200).json(numbered);
}
