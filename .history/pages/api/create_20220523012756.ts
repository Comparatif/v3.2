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
                author:{create:{
                    email,
                    phoneNumber,
                    lastName,
                    firstName,
                    countryName,
                    city,
                    user_commune,
                }},
                product:{create:{                
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
                    vendeurId           
                }},
                shop:{create:{
                    id                  Int      @id @default(autoincrement())
                    vendeurs            String   @unique
                    villes1             ,
                    adresses            ,
                    telephone1,
                    telephone2,
                    fix1,
                    email,
                    facebook,
                    instagram,
                    horaires,
                    localisation,
                    shop_website,
                    shop_commune,
                    livraison,
                    paiement,
                    vendeurs_image,
                    orders,
                    products,
                    createdAt,
                    updatedAt

                }},
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