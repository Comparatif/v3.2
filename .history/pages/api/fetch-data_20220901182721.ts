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
    const pendingCA = await prisma.order.aggregate({
      where: {
        pending: true
        
      },
      _sum: {
        product_price: true
      }
    });
    const AcceptedCA = await prisma.order.aggregate({
      where: {
        acceptedBy: searchString,
        canceledBy: null,
        soldBy: null,
        pending: null
      },
      _sum: {
        product_price: true
      }
    });
    const CanceledCA = await prisma.order.aggregate({
      where: {
        acceptedBy: searchString,
        canceledBy: searchString,
        
      },
      _sum: {
        product_price: true
      }
    });
    const SoldCA = await prisma.order.aggregate({
      where: {
        acceptedBy: searchString,
        soldBy: searchString,
      },
      _sum: {
        product_price: true
      }
    });
    const soldCount = await prisma.order.count({
      where: {
        acceptedBy: searchString,
        soldBy: searchString,
      },
    });
    const pendingCount = await prisma.order.count({
      where: {
        pending: true,
      },
    })
    const acceptedCount = await prisma.order.count({
      where: {
        acceptedBy: searchString,
        canceledBy: null,
        soldBy: null,
        pending: null
      },
    })
    const canceledCount = await prisma.order.count({
      where: {
        acceptedBy: searchString,
        canceledBy: searchString,
      },
    })
    
    
    const LastWeeksData = await prisma.order.findMany({
      where: {
        OR : [
          {pending: true},
          {accepted: }
        ],
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
                LastWeeksData: LastWeeksData,
                WeeksBeforeLastWeekData: WeeksBeforeLastWeekData,

              })
    }

    