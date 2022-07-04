import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { email,
        phoneNumber,
        lastName,
        firstName,
        countryName,
        city,
        commune } =req.body;

    try {
        await prisma.user.create({
            data: {
                email,
                phoneNumber,
                lastName,
                firstName,
                countryName,
                city,
                commune,
            },
        });
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}