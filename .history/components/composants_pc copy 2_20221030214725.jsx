import AutoCompleteText_recherche from './autocomplete/AutoCompleteText_recherche';
import {NavBar} from './navbar/navbar';
import Footer from './footer/footer';
import liste from './autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'

import {Maj} from '../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from './UserContext.js'
import { useReactiveVar } from '@apollo/client'


import {
  Pagination

} from '../components/pagination/pagination'

import { HitsList } from './searchkit/Hits_composants_pc.jsx'










const query  = gql`
  query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
          }

          ... on NumericRangeSelectedFilter {
            min
            max
          }

          ... on ValueSelectedFilter {
            value
          }
        }
        sortOptions {
          id
          label
        }
        query
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
        }
        sortedBy
        items {
          ... on ResultHit {
            id
            fields {
              vendeurs
              product_names
              product_imagelinks
              marques
              categories
              product_links
              product_prices
              vendeurs_image
              villes1
              adresses
              telephone1
              telephone2
              fix1 
              email
              facebook
              instagram
              horaires
              localisation
              stocks
              shop_website
              product_country
              commune
              livraison
              paiement
              type

            }
          }
        }
      }
      facets {
        identifier
        type
        label
        display
        entries {
          label
          count
        }
      }
    }
    description(query: $query) {
      summary {
        query
      }
      hits {
        items {
          ... on DescriptionHit {
            id
            fields {
              product_names
              description1
              brand_name
              description2
              prod_description
              prod_specs_big_title
              total
            }
          }
        }
      }
      
    }
    
  }
`



  




const Page = () => {
  const IndexChange = useReactiveVar(SearchkitIndex)
  const api = useSearchkit();
  
  
  


  const variables = useSearchkitVariables()
  const { previousData, data = previousData, loading } = useQuery(query, { variables })


    return (
      
      

      <>
      
      <Head>
      
      {data?.results.hits.items.slice(0,1).map((hit)=>

        
       {
         const price = hit.fields.product_prices
        const categories = hit.fields.categories
        const names = hit.fields.product_names
        const marques = hit.fields.marques
        const boutique = hit.fields.vendeurs
        const stock = hit.fields.stocks
        const image = hit.fields.product_imagelinks

        return( <>
      <title>{names} prix Algérie - Comparatif</title>
      
      <meta name="description" content={"Prix le moins cher : " + price + " DA | "+ categories + " : "+ names + " | Marque : " + marques + " | Boutique : " +boutique}/>
 
      <link rel="canonical" href= {window.location.href} />
      <meta property="og:locale" content= "fr_FR" />
      <meta property="og:type" content= "article" />
      <meta property="og:title" content= {names +" comparatif Algérie - Prix, stocks & avis"} />
      <meta property="og:url" content= {window.location.href} />
      <meta property="og:site_name" content= "Comparatif dz" />
      <meta property="article:publisher" content="https://www.facebook.com/Comparatifdz"/>
      <meta property="article:modified_time" content="07/09/2021"/>
      <meta property="og:image" content= {image}/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:description" content={"Prix le moins cher : " + price + " DA | "+ categories + " : "+ names + " | Marque : " + marques + " | Boutique : " +boutique}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="keywords" content= {"Découvrez notre comparatif de prix pour " + names +" en Algérie"}/>
      <meta property="product:price:currency" content="DZD"/>
      <meta property="product:condition" content="new"/>
      <meta property="product:availability" content={stock}/>
      </>)}
      )}
      
      
    </Head>



    
    
  <NavBar data={data} />
  <header className="bg-gradient-dark position-fixed w-100 z-index-2">
    <div className="page-header" id="page-header-custom-recherche">
      <span className="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_recherche items={liste} index={IndexChange}/>
      
        
    
      <div className="position-absolute w-100 z-index-1 bottom-0">
      
        <svg className="waves-custom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto" >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="moving-waves">
        
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,1)" ></use>
          </g>
        </svg>
      </div>
    </div>
  </header>
  
 
  <br/>
  {loading ?
    <section id="info-produit">

              

<div className="container"> 
    <div className="row justify-content-center text-center">
 <div className="col-md-12 col-sm-12 col-12 position-absolute top-50">
    <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
    </div>
    </div>
    </div>
    </section>
     : <>
  
  


{ data?.results.summary.total == 0 ?
  <>
  
  {(data?.results?.hits?.sortedBy == "relevance" && data?.results.summary.total == 0 ) ?
    <>
    <section id="results-position">
    <div className="container p-0">
    <div className="row content-justify-center text-center">
    
    <h1>Aucun résultats, Sorry :(</h1>
      </div>
      <br className="mb-4"/><br className="mb-4"/><br className="mb-4"/>
    
    
      
    </div>
    </section>
    <Footer/>
    </>
    :

    <>
    {api.setSortBy('relevance')};
    <section id="results-position">
    <div className="container p-0">
    
   
    <HitsList data={data}  />
    <Pagination data={data?.results} />
  
    
    {<Maj/>} 
    
      
    </div>
    </section>
    <Footer/>
    
   
    
    </>
  }
    
  </>


:
<>

  <section id="results-position">
  <div className="container p-0">
  
 
  <HitsList data={data} />
  <Pagination data={data?.results} />

  
  {<Maj/>} 
  
    
  </div>
  </section>
  <Footer/>
</>
}
   
  
 
  </>}
  
  
</>


      

)

 }
    
  




export default Page






