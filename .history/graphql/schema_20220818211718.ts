import { gql } from 'apollo-server-micro'

export const typeDeft = gql`
    type Link {
        id:String
        title: String
        description: String
        url: String
        category: String
        imageUrl: String
        users: []
    }
    
    type Query {
        links: [Link]!
    }`