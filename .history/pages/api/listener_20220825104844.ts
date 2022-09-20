//import { test, list } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
// GET /api/filterPosts?searchString=:searchString



export default async function handler(req, res) {
  

    res.json(list)
  
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

    