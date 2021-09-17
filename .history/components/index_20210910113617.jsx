import AutoCompleteText_acceuil from './autocomplete/AutoCompleteText_acceuil';
import {NavBar} from './navbar/navbar';
import Carousell from './carousel/carousel';
import Apropos from './apropos/apropos';
import {Produits_favoris, Produits_recommandés} from './produits_favoris/produits_favoris';
import Footer from './footer/footer';
import {Stats} from './stats/stats';
import liste from './autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitQuery, useSearchkitVariables } from '@searchkit/client'
import ClipLoader from "react-spinners/ClipLoader";
import router from 'next/router'
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from './UserContext.js'
import { useReactiveVar } from '@apollo/client'

const query = gql`
  query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
    results(query: $query, filters: $filters, queryOptions: { fields: ["and"]}) {
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
  }
`





const Page = () => {
const IndexChange = useReactiveVar(SearchkitIndex)
const api = useSearchkit();
const variables = useSearchkitVariables()
const { previousData, data = previousData, loading } = useQuery(query, {
  variables
})
useEffect(() => {var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})})

useEffect(()=>{
  if(!router.isReady) return;
  api.setQuery("3200g")
  api.search()
}, [router.isReady]); 
    return (
      
      

      <>
      
      <Head>
      
      
      <title>Comparateur de prix Algérien: Informatique, Smartphone, Automobile...</title>
      
      <meta name="description" content="Trouvez le prix le moins cher en Algérie. Matériel informatique : cartes graphiques, processeurs, cartes mères... Laptop & PC fixes "/>
 
      <link rel="canonical" href= "https://comparatifdz.com" />
      <meta property="og:locale" content= "fr_FR" />
      <meta property="og:type" content= "article" />
      <meta property="og:title" content= "Comparateur de prix Algérien: Informatique, Smartphone, Automobile..." />
      <meta property="og:url" content= "https://comparatifdz.com"/>
      <meta property="og:site_name" content= "Comparatif dz" />
      <meta property="article:publisher" content="https://www.facebook.com/Comparatifdz"/>
      <meta property="article:modified_time" content="23/07/2021"/>
      <meta property="og:image" content= {data?.results.hits.items.slice(0,1).map((hit)=>hit.fields.product_imagelinks)}/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:description" content="Trouvez le prix le moins cher en Algérie. Matériel informatique : cartes graphiques, processeurs, cartes mères... Laptop & PC fixes "/>
      <meta name="twitter:card" content="summary"/>
      <meta name="keywords" content= {"Découvrez notre comparatif de prix pour cartes graphiques, processeurs, cartes mères... Laptop & PC fixes"}/>
      <meta property="product:price:currency" content="DZD"/>
      <meta property="product:condition" content="new"/>
      
      
      
    </Head>



    
  <NavBar/>
  <header class="bg-gradient-dark position-fixed w-100 z-index-2">
    <div class="page-header" id="page-header-custom">
      <span class="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_acceuil items={liste} index={IndexChange}/>
      
    </div>
  </header>
  <div class="position-absolute w-100 z-index-2">
      
        <svg class="waves-custom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto" >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="moving-waves">
        
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,1)" ></use>
          </g>
        </svg>
      </div>
  
  
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
    <>
    <Carousell />
    <Produits_favoris data={data} />
  <Produits_recommandés data={data} />
  <Stats/>
  <Apropos />
  <Footer/>
  
    </>
    }
  

  
  

 








  
  


</>


      ) }
    
  




export default Page
