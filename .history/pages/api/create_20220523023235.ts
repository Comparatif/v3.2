import { prisma } from '../../prisma/db';

export default async function handler(req, res) {
    const product_names_id = product_names?.replaceAll(' ', '_').replaceAll("/", "_")
    const vendeurs_id= vendeurs?.replaceAll(' ', '_').replaceAll("/", "_")
    const id = product_names_id + "_" + vendeurs_id + "_" + user.uid
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
                vendeurs_image } = req.body;

    try {
        
        await prisma.order.create({
            data: {
                id,
                orderEmail,
                author:{create:{
                    userEmail,
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
                    type                                               
                }},
                shop:{create:{
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

                }}
                         
            },
        });
        res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}