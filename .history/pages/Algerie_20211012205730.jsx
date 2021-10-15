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
  



  createURL: ({ qsModule, location, routeState }) => {

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

    return `/${typeCategoryURL}${queryString}`}
  },
  //  \ = suivi par
  
  parseURL: ({ qsModule, location }) => {
    //const matches = baseurl == "comparatifdz.com" ? location.pathname.replace('+', '1').match(/comparatifdz.com\/(\w+)/)
    //: location.pathname.replace('+', '1').match(/3000\/(\w+)/)

    const baseurl = location.host
    const matches = baseurl == "comparatifdz.com" ? location.href.replace('+', '1').match(/comparatifdz.com\/(\w+)/)
    : location.href.replace('+', '1').match(/localhost:3000\/(\w+)/)
    console.log(location.pathname
    const routeState = qsModule.parse(location.search.slice(1), { arrayLimit: 99 })
    

    if (matches && matches[1] && matches[1] !== "all") {
      const typeFilters = matches[1].split("1").map((value) => ({ identifier: 'type', value }))
      if (!routeState.filters) routeState.filters = []
      routeState.filters = [...routeState.filters, ...typeFilters]
    }
    return routeState

  }
})),
{ getDataFromTree }


)




