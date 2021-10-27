import React from 'react'
import withApollo from 'next-with-apollo'
import { InMemoryCache, ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client'
import { useRouter } from 'next/router'


const isBrowser = typeof window !== `undefined`
const host = isBrowser ? (window.location.host == 'localhost:3000' ? 'http://localhost:3000': 'https://comparatifdz.com') : ''

export default withApollo(
  
  ({ initialState, headers }) => {
    
    var str = 'https://comparatifdz.com/3200G'
    //var new_str = str.substring(0, str.indexOf("/")+10);
    var new_str1 = str.split("/");
    var new_str2 = '//' new_str1[2];
    console.log(new_str)

    const cache = new InMemoryCache({}).restore(initialState || {})
    
    if (isBrowser) window.cache = cache

    
    
    return new ApolloClient({
      ssrMode: true,
      
      link: createHttpLink({
        
        uri: 'http://localhost:3000/api/graphql',
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
