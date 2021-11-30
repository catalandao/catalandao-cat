// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// TODO:
// - translate headers
// use rarible or opensea api to grab details from the sell
// here: https://docs.opensea.io/reference/api-overview
// or here: https://api.rarible.org/v0.1/doc
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockBuyers = () => (
  [...new Array(24)].map((_, i) => ({
    'Núm': `#${i + 1}`,
    'Data': `${i + 1} de desembre`,
    'Adreça': '0xFffb2949fksof0gi2nf0a0aj3nf9gj3ng0n',
    'Preu': `${(4 * Math.random()).toFixed(2)} ETH`,
  }))
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  const buyers: unknown = [];// mockBuyers(); // <= use this for the "bidder" shape
  return res.status(200).json(buyers);
}
