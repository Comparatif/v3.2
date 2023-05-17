import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    

    try {
        
        const response = await prisma.assli.findMany()
        
        res.json(response)
       

    } catch (error) {
        res.status(400).json({ error });
    }
}

