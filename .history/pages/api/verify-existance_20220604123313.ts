import { prisma } from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const { searchString } = req.query
    try{ res.json( await prisma.order.findUnique({
        where: {
          orderId: searchString}
          
      });
      
    
    
    )} catch (error) {
      res.status(400).json({ error });
  }
      

    }




