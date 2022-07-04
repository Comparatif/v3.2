import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'
import { gql, useQuery } from '@apollo/client'
//const { asPath } = useRouter()
//const api = useSearchkit();

const Search = dynamic(() => import('../components/New_feature/test'), { ssr: false })
const Search2 = dynamic(() => import('../components/New_feature/test2'), { ssr: false })

const client1 = new SearchkitClient()
const client2 = new SearchkitClient()

const test =() => <>

{
    
    <SearchkitProvider client={client}></SearchkitProvider>
    <SearchkitProvider client={client}>
    <Search/> <Search2/>



}
    
    
    
    
    </>


export default withApollo(test)
  

  