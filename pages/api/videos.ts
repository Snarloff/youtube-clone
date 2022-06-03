import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const method = req.method

  switch (method) {

    case 'GET':
      break

    case 'POST':
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      return res.status(405).end(`Method ${method} not allowed!`)
  }

}
