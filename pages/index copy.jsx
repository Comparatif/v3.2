import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { isArray } from 'lodash';


const isBrowser = typeof window !== `undefined`
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


const Acceuil = dynamic(() => import('../components/index'), { ssr: false })
const Search = dynamic(() => import('../components/composants_pc'), { ssr: true })



export default isBrowser && window.location.search ? 



withApollo(withSearchkit(withSearchkitRouting
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
        console.log(queryString)
        return `/?${queryString.replace('query=', '')}`}
        
      },
      
      parseURL: ({ qsModule, location }) => {
          
        //const matches = location.href.replace('+', '1').match(/localhost:3000\/(\w+)/)
        const routeState = qsModule.parse('query=' + location.search.slice(1), { arrayLimit: 99 })
  console.log(location.pathname)
  console.log(routeState)
  
  
    
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








: withApollo(withSearchkit(Acceuil))


