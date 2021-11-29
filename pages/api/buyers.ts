// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


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
  const buyers = mockBuyers();
  return res.status(200).json(buyers);
}
