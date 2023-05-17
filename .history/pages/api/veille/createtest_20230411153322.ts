import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    const {exportExcel} = req.body;

    try {
        
        await prisma.assli.createMany(exportExcel)
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

