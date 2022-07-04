import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const { 
        email,
        phoneNumber,
        lastName,
        firstName,
        countryName,
        city,
        user_commune,
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
        pending,
        accepted,
        canceledByUser,
        canceledByShop,
        canceledByAdmin,
        sold,
        pendingAt,
        acceptedAt,
        canceledByUserAt,
        canceledByShopAt,
        canceledByAdminAt,
        soldAt,
        author,
        product,
        shop,
        authorId,
        productId,
        shopId,
        orderEmail } = req.body;

    try {
        await prisma.user.create({
            data: {
                email,
                phoneNumber,
                lastName,
                firstName,
                countryName,
                city,
                user_commune,
                order: {
                    create: { author: "User" },
                  },
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
                orders,              
                vendeur,               
                vendeurId           
            },
        });
        await prisma.order.create({
            data: {
                id,
                pending,
                accepted,
                canceledByUser,
                canceledByShop,
                canceledByAdmin,
                sold,
                pendingAt,
                acceptedAt,
                canceledByUserAt,
                canceledByShopAt,
                canceledByAdminAt,
                soldAt,
                author,
                product,
                shop,
                authorId,
                productId,
                shopId,
                orderEmail          
            },
        });
        //res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}