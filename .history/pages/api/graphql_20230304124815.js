import { ApolloServer, gql } from 'apollo-server-micro'
import cors from 'micro-cors'

import {
  CustomQuery,
  RefinementSelectFacet,
  SearchkitSchema,
  SearchkitResolver,
} from '@searchkit/schema'



const searchkitConfig = {
  host: process.env.ES_HOST,
  index: 'comparatifdz',
  hits: {
    fields: ['vendeurs','product_names','product_imagelinks','marques','categories','product_links','product_prices','vendeurs_image','villes1','adresses','telephone1','telephone2','fix1','email','facebook','instagram','horaires','localisation', 'stocks', 'shop_website', 'product_country', 'commune', 'date']
  },
  sortOptions: [
    
    
    
   
    
    { id: 'relevance', label: "Pertinence", field: [{"_score": "desc"}], defaultOption: false},
    { id: 'prix_croissant', label: "Prix : par ordre croissant", field: [{"product_prices": "asc"}], defaultOption: true},
    { id: 'prix_decroissant', label: "Prix : par ordre décroissant", field: [{"product_prices": "desc"}], defaultOption: false},
    { id: 'multiple_sort', label: 'Multiple sort', field: [
      { "product_prices": { "order": "asc" }},
      {"_score": { "order": "desc" }},
    ], defaultOption: false},
    
  ],
 

  
  
  query: new CustomQuery({ 
    queryFn: (query, queryManager) => {
      //const queryFields = queryManager.getQueryOptions()?.fields || []
      const sortLabel = queryManager.getSortBy()?.label
      return {
        bool: {
          must: [{
            multi_match: {

                query: query,
                fields: "product_names",
                operator: sortLabel == 'Pertinence' ? "or" :"and"

            }
          }]
        }
      }
    }
  }),
  

  facets: [
    new RefinementSelectFacet({
      field: 'type',
      identifier: 'type',
      label: 'Sections',
      multipleSelect: true
    }),

    new RefinementSelectFacet({
      field: 'categories.keyword',
      identifier: 'categories',
      label: 'Catégories',
      size: '30',
      multipleSelect: true
      
    }),

    new RefinementSelectFacet({
      field: 'marques',
      identifier: 'marques',
      label: 'Marques',
      size: '30',
      multipleSelect: true
    }),

    new RefinementSelectFacet({
      field: 'villes1.keyword',
      identifier: 'villes1',
      label: 'Villes',
      size: '30',
      multipleSelect: true
    }),

    new RefinementSelectFacet({
      field: 'stocks',
      identifier: 'stocks',
      label: 'Stock',
      size: '2',
      multipleSelect: true
    }),
  ]
}

const descriptionConfig = {
  host: process.env.ES_HOST,
  index: 'materielnet',
  hits: {
    fields: ['product_names','description1','brand_name','description2','prod_description','prod_specs_big_title','total']
  },

  query: new CustomQuery({ 
    queryFn: (query) => {
      
      return {
        bool: {
          must: [{
            multi_match: {

                query: query,
                fields: "product_names",
                operator: "and"

            }
          }]
        }
      }
    }
  })
}


const { typeDefs, withSearchkitResolvers, context } = SearchkitSchema([{
  config: searchkitConfig,
  typeName: 'ResultSet',
  hitTypeName: 'ResultHit',
  addToQueryType: true
},
{
  config: descriptionConfig,
  typeName: 'descriptionResultSet',
  hitTypeName: 'DescriptionHit',
  addToQueryType: false
}])

export const config = {
  api: {
    bodyParser: false
  }
}

const server = new ApolloServer({
  typeDefs: [
    gql`
    type Query @cacheControl(maxAge: 50000000) {
      root: String
    }

    type HitFields @cacheControl(maxAge: 50000000) {
      vendeurs: String
      product_names: String
      product_imagelinks: String
      marques: String
      categories: [String]
      product_links: String
      product_prices: String
      vendeurs_image : String
      villes1 : String
      adresses : String
      telephone1 : String
      telephone2 : String
      fix1 : String
      email : String
      facebook : String
      instagram : String
      horaires : String
      localisation : String
      stocks : String
      shop_website : String
      product_country : String
      commune : String
      livraison : String
      paiement : [String]
      type : String
      date : String

    }

    type ResultHit implements SKHit @cacheControl(maxAge: 50000000) {
      id: ID!
      fields: HitFields
      customField: String
    }

    type DescriptionHitFields @cacheControl(maxAge: 50000000) {
      product_names: String
      description1: String
      brand_name: String
      description2: String
      prod_description: String
      prod_specs_big_title : String
      total : String
    }

    type DescriptionHit implements SKHit @cacheControl(maxAge: 50000000) {
      id: ID!
      fields: DescriptionHitFields
    }

    extend type Query @cacheControl(maxAge: 50000000) {
      description(query: String, filters: [SKFiltersSet], page: SKPageInput): descriptionResultSet

    }
  `, ...typeDefs
  ],
  resolvers: withSearchkitResolvers({
    ResultHit: {
      customField: (parent) => `parent id ${parent.id}`
    },
    Query: {
      description: SearchkitResolver
    }
  }),
  introspection: true,
  playground: true,
  context: {
    ...context
  }
})

const handler = server.createHandler({ path: '/api/graphql' })

export default cors()((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))
