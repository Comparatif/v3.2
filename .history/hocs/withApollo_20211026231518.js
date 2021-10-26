import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client'

export default withApollo(
  ({ initialState, headers }) => {
    var str = 'https://comparatifdz.com/3200G'
    var new_str = str.substring(0, str.indexOf("/")+2);
    //var new_str = str.split("/", )[2];
    console.log(new_str)
    const cache = new InMemoryCache({}).restore(initialState || {})
    const isBrowser = typeof window !== `undefined`
    if (isBrowser) window.cache = cache

    const host = isBrowser ? (window.location.host == 'localhost:3000' ? 'http://localhost:3000': 'https://comparatifdz.com') : ''
    //console.log(host)
    return new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: host + '/api/graphql',
       // uri: 'http://localhost:3000/api/graphql',
        credentials: 'same-origin',
        headers: {
          cookie: headers?.cookie
        }
      }),
      cache
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
