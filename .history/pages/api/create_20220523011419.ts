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
        vendeurId } = req.body;

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
                orders: {
                    create: { author: User },
                  },
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
                vendeurId           
            },
        });
        await prisma.order.create({
            data: {
                Number              Int      @id @default(autoincrement())
  id                  ,
  createdAt           ,
  updatedAt           ,
  pending             ,
  accepted            ,
  canceledByUser      ,
  canceledByShop      ,
  canceledByAdmin     ,
  sold                ,
  pendingAt           ,
  acceptedAt          ,
  canceledByUserAt    ,
  canceledByShopAt    ,
  canceledByAdminAt   ,
  soldAt              ,
  author              User     @relation(fields: [authorId], references: [id])
  product             Product  @relation(fields: [productId], references: [id])
  shop                Shop     @relation(fields: [shopId], references: [id])
  authorId            String
  productId           Int
  shopId              Int
  orderEmail          String?          
            },
        });
        //res.status(200).json({message:"submitted successfully"})

    } catch (error) {
        res.status(400).json({ error });
    }
}