import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Post {
        id: String
        title: String
        description: String
        url: String
        category: String
        imageUrl: String
        users: [String]
    }
    
    type Query {
        posts: [Post]!
    }
    
    `;