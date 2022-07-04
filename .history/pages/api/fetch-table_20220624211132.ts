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
    const { pagination } = req.query
    
    const displayOrders = await prisma.order.findMany({
      skip: Number(pagination?.split('-')[0]) ,
      take: Number(pagination?.split('-')[1]) ,
      orderBy: {
        createdAt: 'asc',
      },
    })
    
      res.json({
                displayOrders:displayOrders
                
              })
    }

    