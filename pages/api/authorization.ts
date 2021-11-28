// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'web3-token';

const authorized = [
  '0xefbe74a2d564b5da62407d452038db32c9fd6b27',
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  const token = req.headers.authorization;
  const { address } = await verify(token);
  console.log({ address });

  if (authorized.includes(address)) {
    return res.status(200).json({});
  }
  return res.status(400).json({});
}
