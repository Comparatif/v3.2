import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    
    const { 
                id,
                orderEmail,
                userEmail,
                phoneNumber,
                lastName,
                firstName,
                countryName,
                city,
                user_commune,
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
                vendeurs,
                villes1,
                adresses,
                telephone1,
                telephone2,
                fix1,
                shopEmail,
                facebook,
                instagram,
                horaires,
                localisation,
                shop_website,
                shop_commune,
                livraison,
                paiement,
                vendeurs_image,
             } = req.body;

    try {
        
        await prisma.user.create({
            data: {
                userEmail,
            phoneNumber,
            lastName,
            firstName,
            countryName,
            city,
            user_commune,
           
            },
        });
        await prisma.shop.create({
            data: {
                vendeurs,
                    villes1,
                    adresses,
                    telephone1,
                    telephone2,
                    fix1,
                    shopEmail,
                    facebook,
                    instagram,
                    horaires,
                    localisation,
                    shop_website,
                    shop_commune,
                    livraison,
                    paiement,
                    vendeurs_image
           
            },
        });
        await prisma.product.create({
            data: {
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
                    vendeurName
           
            },
        });
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}

