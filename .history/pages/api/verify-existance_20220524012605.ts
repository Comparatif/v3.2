import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                orderId
                
                
             } = req.body;

    try {
        
        await prisma.order.findUnique({
            where: {
              orderId: orderId,
            },
          })
        
        
        

    } catch (error) {
        res.status(400).json({ error });
    }
}

