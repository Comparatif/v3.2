import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'



const Search = dynamic(() => import('../components/index'), { ssr: true })

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
    query: '3200g',
    sortBy: routeState.sort,
    filters: routeState.filters || [],
    page: {
      size: 20,
    },
    
  })
  

export default withApollo(withSearchkit((withSearchkitRouting
    (Search, {
    stateToRoute: myCustomStateToRouteFn,
    routeToState: myCustomRouteToStateFn,
})),
{ getDataFromTree }


)