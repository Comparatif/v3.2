import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Order {
  id    
  orderId    
  createdAt 
  updatedAt 
  pending
  accepted
  acceptedBy
  acceptedAt  
  sold
  soldBy   
  soldAt   
  canceled
  canceledBy  
  canceledAt  
  canceledWhy  
  userEmail  
  emailVerified  
  firstName  
  lastName  
  phoneNumber  
  countryName  
  city  
  user_commune  
  vendeurs  
  villes1  
  adresses  
  telephone1  
  telephone2  
  fix1  
  shopEmail  
  facebook  
  instagram  
  horaires  
  localisation  
  shop_website  
  shop_commune  
  livraison  
  paiement  
  vendeurs_image  
  product_names  
  product_imagelinks  
  marques  
  categories  
  product_links  
  product_price
  stocks  
  product_country  
  product_commune  
  type  
  
}
    
    type Query {
        orders: [Order]!
    }
    
    `;