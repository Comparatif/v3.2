import { gql } from 'apollo-server-micro'

export const typeDeft = gql`
    type Link {
        id:String
    }
    
    type Query {
        links: [Link]
    }`