import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'

//const { asPath } = useRouter()
//const api = useSearchkit();

const Search = dynamic(() => import('../components/composants_pc'), { ssr: true })



// Nodejs HTTP
//if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined')
//{console.log(isbot(navigator.userAgent) ? "true" : "false")}


const myCustomStateToRouteFn = (searchState) => {
 


    const routeState = {
      query: searchState.query,
      sort: {},
      filters: searchState.filters,
      size: {},
      from: {},
      
      
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
    query: routeState.query || '',
    sortBy: routeState.sort,
    filters: routeState.filters || [],
    page: {
      size: 100,
    },
    
  })
  
  
  
  
  
  export default withApollo(withSearchkit(withSearchkitRouting
    (Search, {
    stateToRoute: myCustomStateToRouteFn,
    routeToState: myCustomRouteToStateFn,
   
  
  
  
    createURL: ({ qsModule, location, routeState }) => {
  
      if (location) {
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
      
      return `/${queryString.replace('query=', '')}`}
    },
    parseURL: ({ qsModule, location}) => {
      const Post = () => {
        const router = useRouter()
        const { test } = router.query
      
        return {test}
      }
      console.log(Post)
      //const matches = location.href.replace('+', '1').match(/localhost:3000\/(\w+)/)
      const routeState = qsModule.parse("query=" + Post, { arrayLimit: 99 })



  
      /*if (matches && matches[1] && matches[1] !== "all") {
        const typeFilters = matches[1].split("1").map((value) => ({ identifier: 'type', value }))
        if (!routeState.filters) routeState.filters = []
        routeState.filters = [...routeState.filters, ...typeFilters]
      }*/
      return routeState
    }
  })),
  { getDataFromTree }
  
  
  )
  




