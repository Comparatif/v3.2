import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client'

export default withApollo(
  ({ initialState, headers }) => {
    const cache = new InMemoryCache({}).restore(initialState || {})

    if (typeof window !== 'undefined') window.cache = cache

    return new ApolloClient({
      uri:
    process.env.NODE_ENV === 'production'
      ? 'https://<name>.graphcdn.app'
      : 'http://localhost:3000/graphql',
    })
  },
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    )
  }
)
