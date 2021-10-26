import { withSearchkit, SearchkitClient } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'

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



'' 








: withApollo(withSearchkit(Acceuil))


