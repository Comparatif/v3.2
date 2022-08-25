import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Order {
  id : String   
  orderId : String   
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  pending : Boolean
  accepted : Boolean
  acceptedBy : String
  acceptedAt : String  
  sold : Boolean
  soldBy : String   
  soldAt: String   
  canceled            Boolean  @default(false)
  canceledBy: String  
  canceledAt: String  
  canceledWhy: String  
  userEmail: String  
  emailVerified: String  
  firstName: String  
  lastName: String  
  phoneNumber: String  
  countryName: String  
  city: String  
  user_commune: String  

  
  vendeurs            String
  villes1             String?
  adresses            String?
  telephone1          String?
  telephone2          String?
  fix1                String?
  shopEmail           String?
  facebook            String?
  instagram           String?
  horaires            String?
  localisation        String?
  shop_website        String?
  shop_commune        String?
  livraison           String?
  paiement            String?
  vendeurs_image      String?

  product_names       String   @db.VarChar(255)
  product_imagelinks  String?
  marques             String?
  categories          String?
  product_links       String?
  product_price       Int?
  stocks              String?
  product_country     String?
  product_commune     String?
  type                String?
  
}
    
    type Query {
        posts: [Post]!
    }
    
    `;