import { prisma } from '../../../prisma/db';

export default async function handler(req, res) {

    const {data} = req.body;

    try {
        
        await prisma.assli.createMany({[{name: 'MICROPHONE CAPSYS JACK 3.5 SF 666|', famille: 'AUDIO VISUEL'}]})
        
        
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

