import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    const {     id,
                name,
                name2,
                famille,
                tri,
                filters
                
             } = req.body;

    try {
        
        await prisma.assli.upsert({
            where: { id },
   
         
              update: {
                name,
                    name2,
                    famille,
                    tri,
                    filters
              },
              create: {
                name,
                    name2,
                    famille,
                    tri,
                    filters
              },
          })
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

