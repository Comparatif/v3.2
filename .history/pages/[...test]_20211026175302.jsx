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
    parseURL: ({ qsModule, location }) => {
      const s = "location.href;

      const s1 = s.replace('//', '')
      const s2 = s1.substring(s1.indexOf("/")+1);
      //const matches = location.href.replace('+', '1').match(/localhost:3000\/(\w+)/)
      const routeState = qsModule.parse("query=" + location.href.replace("http://localhost:3000/", ""), { arrayLimit: 99 })
console.log(location.href)


  
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
const s = "http://localhost:3000/3200g";

const s1 = s.replace('//', '')
const s2 = s1.substring(s1.indexOf("/")+1);
console.log(s2.trim())