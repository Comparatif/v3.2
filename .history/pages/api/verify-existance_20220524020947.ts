import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse, searchString: String) {
    const { searchString } = req.query
    const resultPosts = await prisma.order.findUnique({
        where: {
          orderId: searchString},
      })
      res.json(resultPosts)
    }

