import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { name, email } =req.body;

    try{
        const submission = await prisma.user.create({
            data: {
                email,
                firstName
            },
        });
    } catch (error) {
        res.status(400).json({ error });
    }
}