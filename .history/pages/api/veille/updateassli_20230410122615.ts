import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    const {     id,
                test123
                
             } = req.body;

    try {
        
        await prisma.assli.update({
            where: { id },
            data: { 
                    test123
            },
          })
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

