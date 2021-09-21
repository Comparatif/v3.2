import { withSearchkit, SearchkitClient, withSearchkitRouting } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'


const Search = dynamic(() => import('../components/composants_pc'), { ssr: false })


const myCustomStateToRouteFn = (searchState) => {
 
if(searchState.sortBy === "prix_croissant" || searchState.sortBy == undefined) {cartItemsVar('and')}
if(searchState.sortBy === "relevance") {cartItemsVar('or')}

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
  page: {},
  
})

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = () => ({
    params: { Algerie: 'http://localhost:3000/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X' },
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}



export default withApollo(withSearchkit(withSearchkitRouting(Search, {
  stateToRoute: myCustomStateToRouteFn,
  routeToState: myCustomRouteToStateFn,
  



  createURL: ({ qsModule, location, routeState }) => {
    if(routeState.sort === "prix_croissant" || routeState.sort == undefined) {cartItemsVar('and')}
    if(routeState.sort === "relevance") {cartItemsVar('or')}
    if (location) {
    let filters
    let typeCategoryURL = "all"
    if (routeState.filters) {
      filters = (routeState.filters).reduce((sum, filter) => {
        if (filter.identifier === "type") {
          sum.type.push(filter)
        } else {
          sum.all.push(filter)
        }
        return sum
      }, {
        type: [],
        all: []
      })
      if (filters.type.length > 0) {
        typeCategoryURL = filters.type.map((filter) => filter.value).join("+")
      }
    }

    let newRouteState = {
      ...routeState,
      ...( filters ? { filters: filters.all } : {} )
    }

    const queryString = qsModule.stringify(newRouteState, {
      addQueryPrefix: true, 
    })

    return `/Algerie/informatique/${typeCategoryURL}${queryString}`}
  },
  parseURL: ({ qsModule, location }) => {
    const matches = location.pathname.replace('+', '1').match(/informatique\/(\w+)/)
    const routeState = qsModule.parse(location.search.slice(1), { arrayLimit: 99 })
    

    if (matches && matches[1] && matches[1] !== "all") {
      const typeFilters = matches[1].split("1").map((value) => ({ identifier: 'type', value }))
      if (!routeState.filters) routeState.filters = []
      routeState.filters = [...routeState.filters, ...typeFilters]
    }
    return routeState

  }
})))




