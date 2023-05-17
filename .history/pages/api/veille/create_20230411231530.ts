import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                id,
                name,
                name2,
                famille
                
             } = req.body;

    try {
        
        await prisma.assli.create({
            
                data: {
                    id,
                    name,
                    name2,
                    famille
                }
           
            
        });
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

