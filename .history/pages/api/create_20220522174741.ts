import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { firstName, email } =req.body;

    try {
        await prisma.user.create({
            data: {
                email,
                firstName
            },
        });
        

    } catch (error) {
        res.status(400).json({ error });
    }
}