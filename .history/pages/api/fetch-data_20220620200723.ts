import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    
    const postCount = await prisma.order.count()
    const CA = await prisma.order.aggregate({
      _sum: {
        product_prices: true
      }
    });
      res.json(postCount)
    }

