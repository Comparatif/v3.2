import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { 
        email,
        phoneNumber,
        lastName,
        firstName,
        countryName,
        city,
        user_commune } = req.body;

    try {
        await prisma.user.create({
            data: {
                email,
                phoneNumber,
                lastName,
                firstName,
                countryName,
                city,
                user_commune
            },
        });
        await prisma.product.create({
            data: {
                id                 
  product_names      
  product_imagelinks  
  marques             String?
  categories          String?
  product_links       String?
  product_prices      String?
  stocks              String?
  product_country     String?
  product_commune     String?
  type                String?
  orders              Order[]
  vendeur             Shop     @relation(fields: [vendeurId], references: [id])
  vendeurId           Int
            },
        });
        //res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}