import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    

    try {
        
        await prisma.assli.deleteMany({})
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

