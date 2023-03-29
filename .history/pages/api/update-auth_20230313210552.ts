import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                id,
                email,
                shop,
                test,
                col,
                row,
                dashboard,
                test123
                
             } = req.body;

    try {
        
        await prisma.auth.update({
            where: { email },
            data: { 
                    shop,
                    test,
                    col,
                    row,
                    dashboard,
                    test123
            },
          })
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

