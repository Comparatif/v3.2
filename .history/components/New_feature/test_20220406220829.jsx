import AutoCompleteText_recherche from '../autocomplete/AutoCompleteText_recherche';
import {NavBar} from '../navbar/navbar';
import Footer from '../footer/footer';
import liste from '../autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue, SearchkitProvider } from '@searchkit/client'
import router from 'next/router'
import {Maj} from '../../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import { useReactiveVar } from '@apollo/client'
import {Table} from './table.jsx'
import {test} from './page'
import {
  Pagination

} from '../../components/pagination/pagination'

import { HitsList } from '../searchkit/Hits_test.jsx'






  




const Page = () => {
  const isBrowser = typeof window !== `undefined`
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
  const IndexChange = useReactiveVar(SearchkitIndex)

  
  const api = useSearchkit();
  


  const variables = useSearchkitVariables()
  const { previousData, data = previousData, loading } = useQuery(query, { variables })
  //const { previousData2, data2 = previousData2, loading2 } = useQuery(query2, { variables })
  
  useEffect(()=>{
    if(!router.isReady) return;
    api.setQuery("5600X")
    api.search()
  }, [router.isReady]); 


 
    return (
      
      

      <>
    
  <NavBar data={data} />
  <header class="bg-gradient-dark position-fixed w-100 z-index-2">
    <div class="page-header" id="page-header-custom-recherche">
      <span class="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_recherche items={liste} index={IndexChange} />
      
        
    
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

  {loading ?
    <section id="info-produit">

              

<div class="container"> 
    <div class="row justify-content-center text-center">
 <div class="col-md-12 col-sm-12 col-12 position-absolute top-50">
    <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
    </div>
    </div>
    </div>
    </section>
     : 
  
  

<Table/>



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
}</>
   
  
 
  }
   
  
 

  
  
</>


      

)

 }
    
  




export default Page