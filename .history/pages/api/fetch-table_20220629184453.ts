import { prisma } from '../../prisma/db';

// GET /api/filterPosts?searchString=:searchString
export default async function handler(req, res) {
    const { pagination } = req.query
    const count = await prisma.order.count()
    const displayOrders = await prisma.order.findMany({
      skip: Number(pagination?.split('-')[0]) ,
      take: Number(pagination?.split('-')[1]) ,
      orderBy: {
        createdAt: 'desc',
      },
    })
      res.json({ displayOrders:displayOrders, count:count })
    }

    