import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                orderId
                
                
             } = req.body;

    try {
        
        await prisma.order.findUnique({
            where: {
              email: 'elsa@prisma.io',
            },
          })
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

