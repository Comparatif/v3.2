import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                orderId
                
                
             } = req.body;

    try {
        // By unique identifier
const user = await prisma.user.findUnique({
    where: {
      email: 'elsa@prisma.io',
    },
  })
        await prisma.order.create({
            data: {
                orderId,
               
           
            },
        });
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

