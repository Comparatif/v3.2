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
      
      {
        
        
        data?.results.hits.items.slice(0,1).map((hit)=>

        
       {
        const description1 =  data?.description?.hits?.items?.slice(0,1).map(
          (hit)=>hit.fields.description1
          
        
          )
        

         const price = hit.fields.product_prices
        const categories = hit.fields.categories
        const names = hit.fields.product_names
        const marques = hit.fields.marques
        const boutique = hit.fields.vendeurs
        const stock = hit.fields.stocks
        const image = hit.fields.product_imagelinks

        return( <>
      <title>{names} prix Algérie - Comparatif</title>
      
      <meta name="description" content={names + " Algérie | Meilleur prix : " + price + " DA | "+ categories +   " | Marque : " + marques + " | " +description1}/>
 
      <link rel="canonical" href= {window.location.href} />
      <meta property="og:locale" content= "fr_FR" />
      <meta property="og:type" content= "article" />
      <meta property="og:title" content= {names +" prix Algérie - Comparatif"} />
      <meta property="og:url" content= {window.location.href} />
      <meta property="og:site_name" content= "Comparatif dz" />
      <meta property="article:publisher" content="https://www.facebook.com/Comparatifdz"/>
      <meta property="article:modified_time" content="05/10/2021"/>
      <meta property="og:image" content= {image}/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:description" content={names + " Algérie | Meilleur prix : " + price + " DA | "+ categories +   " | Marque : " + marques + " | " +description1}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="keywords" content= {names + " | "+ categories + " | Meilleur prix Algérie, stocks & avis - Comparatif, gaming, config, ryzen, intel, HP, ASUS, MSI, NVIDIA, AMD, RTX, GTX"}/>
      <meta property="product:price:currency" content="DZD"/>
      <meta property="product:condition" content="new"/>
      <meta property="product:availability" content={stock}/>
      </>)}
      )}
      
      
    </Head>



    
    
  <NavBar data={data} />
  <header class="bg-gradient-dark position-fixed w-100 z-index-2">
    <div class="page-header" id="page-header-custom-recherche">
      <span class="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_recherche items={liste} index={IndexChange}/>
      
        
    
      <div class="position-absolute w-100 z-index-1 bottom-0">
      
        <svg class="waves-custom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto" >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="moving-waves">
        
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,1)" ></use>
          </g>
        </svg>
      </div>
    </div>
  </header>
  
 
  <br/>

  
  


{ data?.results.summary.total == 0 ?
  <>
  
  {(data?.results?.hits?.sortedBy === "relevance" && data?.results.summary.total == 0 ) ?
    <>
    <section id="results-position">
    <div class="container p-0">
    <div class="row content-justify-center text-center">
    
    <h1>Aucun résultats, Sorry :(</h1>
      </div>
      <br class="mb-4"/><br class="mb-4"/><br class="mb-4"/>
    
    
      
    </div>
    </section>
    <Footer/>
    </>
    :

    <>
    {api.setSortBy('relevance')};
    <section id="results-position">
    <div class="container p-0">
    
   
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
  <div class="container p-0">
  
 
  <HitsList data={data} />
  <Pagination data={data?.results} />

  
  {<Maj/>} 
  
    
  </div>
  </section>
  <Footer/>
</>
}
   
  
 

  
  
</>


      

)

 }
    
  




export default Page






