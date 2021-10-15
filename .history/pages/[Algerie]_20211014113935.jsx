import { withSearchkit, SearchkitClient, withSearchkitRouting } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"

const Search = dynamic(() => 
import('../components/composants_pc'), { ssr: true },
)


const myCustomStateToRouteFn = (searchState) => {
 


  const routeState = {
    query: searchState.query,
    sort: searchState.sortBy,
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
    size: 20,
  },
  
})





export default withApollo(withSearchkit(withSearchkitRouting(Search, {
  stateToRoute: myCustomStateToRouteFn,
  routeToState: myCustomRouteToStateFn,
  



  
})),
{ getDataFromTree }


)
