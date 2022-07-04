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
                id,                 
                product_names,      
                product_imagelinks,  
                marques,             
                categories,         
                product_links,      
                product_prices,      
                stocks,              
                product_country,     
                product_commune,     
                type,                
                orders,              
                vendeur,               
                vendeurId,           
            },
        });
        //res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}