import { ApolloServer, gql } from 'apollo-server-micro'
import cors from 'micro-cors'

import {
  CustomQuery,
  MultiMatchQuery,
  RefinementSelectFacet,
  RangeFacet,
  SearchkitSchema,
  DateRangeFacet,
  SearchkitResolver,
  GeoBoundingBoxFilter,
  HierarchicalMenuFacet
} from '@searchkit/schema'

const searchkitConfig = {
  host: process.env.ES_HOST ,
  index: 'comparatifdz',
  hits: {
    fields: ['vendeurs','product_names','product_imagelinks','marques','categories','product_links','product_prices','vendeurs_image','villes1','adresses','telephone1','telephone2','fix1','email','facebook','instagram','horaires','localisation', 'stocks']
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
      const queryFields = queryManager.getQueryOptions()?.fields || []
      
      return {
        bool: {
          must: [{
            multi_match: {

                query: query,
                fields: "product_names",
                operator: queryFields.toString()

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

const usParksConfig = {
  host: process.env.ES_HOST || 'http://localhost:9200',
  index: 'us_parks',
  hits: {
    fields: [
      'title',
      'location'
    ]
  },
  query: new MultiMatchQuery({ fields: ['title'] }),
  filters: [
    new GeoBoundingBoxFilter({
      field: 'location',
      label: "Location",
      identifier: "location"
    })
  ],
  facets: [
    new RefinementSelectFacet({
      field: 'states',
      identifier: 'states',
      label: "States",
      multipleSelect: true
    })
  ]
}

const productsConfig = {
  host: process.env.ES_HOST || 'http://localhost:9200',
  index: 'mrp-products',
  hits: {
    fields: [
      'name', 'location'
    ]
  },
  query: new MultiMatchQuery({ fields: ['designerName^3', 'name'] }),
  facets: [
    new HierarchicalMenuFacet({
      fields: [ 'category_lvl1.keyword', 'category_lvl2.keyword', 'category_lvl3.keyword' ],
      label: 'Category',
      identifier: 'category',
    })
  ]
}

const { typeDefs, withSearchkitResolvers, context } = SearchkitSchema([{
  config: searchkitConfig,
  typeName: 'ResultSet',
  hitTypeName: 'ResultHit',
  addToQueryType: true
}, {
  config: productsConfig,
  typeName: 'productsResultSet',
  hitTypeName: 'ProductHit',
  addToQueryType: false
}, {
  config: usParksConfig,
  typeName: 'ParkResultSet',
  hitTypeName: 'ParkResultHit',
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
    type Query {
      root: String
    }

    type HitFields {
      vendeurs: String
      product_names: String
      product_imagelinks: String
      marques: String
      categories: [String]
      product_links: String
      product_prices: String
      vendeurs_image : String
      villes1 : [String]
      adresses : String
      telephone1 : String
      telephone2 : String
      fix1 : String
      email : [String]
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
      description1 : String
      brand_name : String
      description2 : String
      prod_description : String
      prod_specs_big_title : String
      total : String

    }

    type ResultHit implements SKHit {
      id: ID!
      fields: HitFields
      customField: String
    }

    type ParkHitFields {
      title: String
      location: String
      states: [String]
      nps_link: String
      description: String
    }

    type ProductHitFields {
      imageURL: String
      designerName: String
      name: String
      price: Float
    }

    type ParkResultHit implements SKHit {
      id: ID!
      fields: ParkHitFields
    }

    type ProductHit implements SKHit {
      id: ID!
      fields: ProductHitFields
    }

    extend type Query {
      usParks(query: String, filters: [SKFiltersSet], page: SKPageInput): ParkResultSet
      products(query: String, filters: [SKFiltersSet], page: SKPageInput): productsResultSet
    }
  `, ...typeDefs
  ],
  resolvers: withSearchkitResolvers({
    ResultHit: {
      customField: (parent) => `parent id ${parent.id}`
    },
    Query: {
      usParks: SearchkitResolver,
      products: SearchkitResolver
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
