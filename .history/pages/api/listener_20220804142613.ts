import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const { searchString } = req.query
    const resultPosts = await prisma.$subscribe.order({
      mutation_in: ['CREATED'],
      node: {
        email_contains: `alice@prisma.io`,
      },
    })
    .node()
      res.json(resultPosts)
    }

