import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

function getLastWeeksDate() {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

}

function getWeeksBeforeLastWeekDate() {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

}
// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const { searchString } = req.query
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
    const displayOrders = await prisma.order.findMany()
    
    const LastWeeksData = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: getLastWeeksDate(),
          lt:  new Date()
        },
      },
    });

    const WeeksBeforeLastWeekData = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: getLastWeeksDate(),
          lt:  getWeeksBeforeLastWeekDate()
        },
      },
    });
      res.json({CA:CA, 
                postCount : postCount, 
                soldCount:soldCount, 
                pendingCount:pendingCount, 
                displayOrders:displayOrders,
                LastWeeksData: LastWeeksData,
                WeeksBeforeLastWeekData: WeeksBeforeLastWeekData,

              })
    }

    