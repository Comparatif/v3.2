import { test } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const [State, setState] = useState("")
    const event = await test.$on('query', (e) => {
      useEffect(()=> {

        setState({e})

      }, [e])
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

    