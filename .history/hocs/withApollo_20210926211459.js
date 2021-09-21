import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client'

export default withApollo(
  ({ initialState, headers }) => {
    

    

    return new ApolloClient({

      
        uri: 'https://comparatifdz-reng.graphcdn.app',
       
     
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
