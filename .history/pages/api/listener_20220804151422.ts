import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    
    const resultPosts = await global.prisma.$on('query', (e) => {
      console.log(e)
    })
      res.json(resultPosts)
    }

    