import { gql } from 'apollo-server-micro'

export const typeDeft = gql`
    type Link {
        id:String
        title: String
        description: String
        url: String
        
    }
    
    type Query {
        links: [Link]!
    }`