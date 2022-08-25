import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client'
import { useRouter } from 'next/router'

const apolloClient = new ApolloClient({
    uri:"http://localhost:3000/api/graphqlprisma",
    cache: InMe
})