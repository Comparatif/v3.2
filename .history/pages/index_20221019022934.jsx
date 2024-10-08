import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
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



const Search = dynamic(() => import('../components/index'), { ssr: true })



// Nodejs HTTP
//if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined')
//{console.log(isbot(navigator.userAgent) ? "true" : "false")}






const myCustomStateToRouteFn = (searchState) => {
 


    const routeState = {
      query: searchState.query,
      sort: {},
      filters: searchState.filters,
      size: {},
    from: Number(searchState.page?.from)
      
      
    }
  
  
    
    return Object.keys(routeState).reduce((sum, key) => {
      if (
        (isArray(routeState[key]) && routeState[key].length > 0) ||
        (!isArray(routeState[key]) && !!routeState[key])
      ) {
        sum[key] = routeState[key]
      }
      return sum
    }, {})
  
  }
  
  const myCustomRouteToStateFn = (routeState) => ({
    query: '5600X',
    sortBy: routeState.sort,
    filters: routeState.filters || [],
    page: {
      size: 10,
      from: Number(routeState.from) || 0
    },
    
  })
  
  
  
  
  
  export default withApollo(withSearchkit(withSearchkitRouting
    (Search, {
    stateToRoute: myCustomStateToRouteFn,
    routeToState: myCustomRouteToStateFn,
    createURL: ({ qsModule, location, routeState }) => {
   
      
        let price = '-Prix-Algerie'
        let filters
        let typeCategoryURL = "all"
        
    
        let newRouteState = {
          ...routeState,
          ...( filters ? { filters: filters.all } : {} )
          
        }
    
        const queryString = qsModule.stringify(newRouteState, {
          addQueryPrefix: false, 
        })
    
        return `/`
      }
  })),
  { getDataFromTree }
  
  
  )
  