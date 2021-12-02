// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// TODO:
// - translate headers
// use rarible or opensea api to grab details from the sell
// here: https://docs.opensea.io/reference/api-overview
// or here: https://api.rarible.org/v0.1/doc

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] as const;
interface Buyer {
  num: typeof days[number];
  date: string;
  address: string,
  price: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  const buyers: Buyer[] = [
    { num: 1, date: '1-12-2021', address: '0x839395e20bbb182fa440d08f850e6c7a8f6f0780', price: '0.55 WΞTH' },
  ];
  return res.status(200).json(buyers);
}
