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
                    canceledWhy: "true"
                
             } = req.body;

    try {
        
        await prisma.order.update({
            where: { orderId: "cl60x28840019rkvlr3thjti3" },
            data: { pending: true,
                    accepted: true,
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

