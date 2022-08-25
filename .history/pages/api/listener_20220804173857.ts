import { test } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    
    const resultPosts = await test.$on('query', (e) => {
      if (e.query.includes("UPDATE")) {
        const list = e.params.replace("'", "")
        const orderId = list[list.length - 1]
      }
      console.log({"Evenement": e})
    })
      res.json(resultPosts)
    }

    