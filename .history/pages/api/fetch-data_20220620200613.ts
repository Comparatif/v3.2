import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    
    const postCount = await prisma.order.count()
    const CA = await prisma.order.aggregate({
      _sum: {
        age: true,
      },
      _max: {
        age: true,
      },
      _min: {
        age: true,
      },
    });
      res.json(postCount)
    }

