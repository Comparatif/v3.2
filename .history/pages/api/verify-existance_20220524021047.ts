import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Person {
    name: string;
    age: number;
  }
type={
    searchString: String
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { searchString } = req.query
    const resultPosts = await prisma.order.findUnique({
        where: {
          orderId: searchString},
      })
      res.json(resultPosts)
    }

