import { test } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    //const [State, setState] = useState({"query": "empty"})
    const test1 = test.$on('query', (e) => {
      e
      
    })
    res.writeHead(200, {
      Connection: "keep-alive",
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache"
    }
    setTimeout(() => {
      res.write('data: {"flight": "I768", "state": "landing"}');
      response.write("\n\n");
    }, 3000);

/*
const event = await test.$on('query', (e) => {
      if (e.query.includes("UPDATE")) {
        const list = e.params.replace("'", "")
        const orderId = list[list.length - 1]
      }
      console.log({"Evenement": e})
    })
*/

    