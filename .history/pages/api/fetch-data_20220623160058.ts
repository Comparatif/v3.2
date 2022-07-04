import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
  function getLastWeeksDate() {
    const now = new Date();
  
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  }
  
    const postCount = await prisma.order.count()
    const CA = await prisma.order.aggregate({
      _sum: {
        product_price: true
      }
    });
    const soldCount = await prisma.order.count({
      where: {
        sold: true,
      },
    });
    const pendingCount = await prisma.order.count({
      where: {
        pending: true,
      },
    })
    const allData = await prisma.order.findMany()

    const data = await client.post.findMany({
      where: {
        createdAt: {
          gte: new Date,
          lt:  new Date("2020-01-02")
        },
      },
    });
      res.json({CA:CA, postCount : postCount, soldCount:soldCount, pendingCount:pendingCount, allData:allData})
    }

