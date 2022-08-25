import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                orderId,
                pending,
                accepted,
                acceptedBy,
                acceptedAt,
                sold,
                soldBy,
                soldAt,
                canceled,
                canceledBy,
                canceledAt,
                canceledWhy
                
             } = req.body;

    try {
        
        await prisma.order.update({
            where: { orderId: orderId },
            data: { pending: pending,
                    accepted: acceptede,
                    acceptedBy: "fhgfgh",
                    acceptedAt: "true",
                    sold : true,
                    soldBy: "true",
                    soldAt: "true",
                    canceled: true,
                    canceledBy: "true",
                    canceledAt: "true",
                    canceledWhy: "true"
            },
          })
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

