import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'


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

    