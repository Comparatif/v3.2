import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const { searchString } = req.query
    const postCount = await prisma.order.count()
      res.json(resultPosts)
    }

