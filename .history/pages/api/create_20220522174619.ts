import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { name, email } =req.body;

    try{
        const submission = await prisma.feedback.create({
            data: {
                email,
                name
            },
        })
    }
}