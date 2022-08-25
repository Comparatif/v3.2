import { test } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import {  }
// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    
    const event = await test.$on('query', (e) => {

      e
    })
      res.json({'event' : event})
    }

/*
const event = await test.$on('query', (e) => {
      if (e.query.includes("UPDATE")) {
        const list = e.params.replace("'", "")
        const orderId = list[list.length - 1]
      }
      console.log({"Evenement": e})
    })
*/

    