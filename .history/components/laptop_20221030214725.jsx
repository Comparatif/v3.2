import AutoCompleteText_recherche from './autocomplete/AutoCompleteText_recherche';
import {NavBar} from './navbar/navbar';
import Footer from './footer/footer';
import liste from './autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { useSearchkit, useSearchkitQuery } from '@searchkit/client'
import router from 'next/router'
import {Maj} from '../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, cartItemsVar } from './UserContext.js'
import { useReactiveVar } from '@apollo/client'

import {

  Pagination

} from '../components/pagination/pagination'

import { HitsList } from './searchkit/Hits_laptop_&_PC_fixes.jsx'

const query = gql`
  query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
    searchkit2(query: $query, filters: $filters) {
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
          ... on ConfigHit {
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
  const { data, loading } = useSearchkitQuery(query)
  const api = useSearchkit()
  const [value, setValue] = useState("laptop/");
  
  
  

  const name = router.query.laptop

  

  useEffect(()=>{
    if(!router.isReady) return;
    api.setQuery(name)
    api.search()
  }, [router.isReady]);
    
    
    return (
      
      

      <>
      
      <Head>
      
      <base href="https://comparatifdz.vercel.app/"/>
      <title>{name} prix Algérie - Comparatif</title>
      
      <meta name="description" content={data?.searchkit2.hits.items.slice(0,1).map((hit)=>"Prix le moins cher : " + hit.fields.product_prices + " DA | "+ hit.fields.categories + " : "+ hit.fields.product_names + " | Marque : " + hit.fields.marques + " | Boutique : " +hit.fields.vendeurs)}/>
 
      <link rel="canonical" href= {"/informatique/laptop/" + name} />
      <meta property="og:locale" content= "fr_FR" />
      <meta property="og:type" content= "article" />
      <meta property="og:title" content= {name +" comparatif Algérie - Prix, stocks & avis"} />
      <meta property="og:url" content= {"/informatique/laptop/"+ name} />
      <meta property="og:site_name" content= "Comparatif dz" />
      <meta property="article:publisher" content="https://www.facebook.com/Comparatifdz"/>
      <meta property="article:modified_time" content="03/07/2021"/>
      <meta property="og:image" content= {data?.searchkit2.hits.items.slice(0,1).map((hit)=>hit.fields.product_imagelinks)}/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:description" content={data?.searchkit2.hits.items.slice(0,1).map((hit)=>"Prix le moins cher : " + hit.fields.product_prices + " DA | "+ hit.fields.categories + " : "+ hit.fields.product_names + " | Marque : " + hit.fields.marques + " | Boutique : " +hit.fields.vendeurs)}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="keywords" content= {"Découvrez notre comparatif de prix pour " + name +" en Algérie"}/>
      <meta property="product:price:currency" content="DZD"/>
      <meta property="product:condition" content="new"/>
      <meta property="product:availability" content={data?.searchkit2.hits.items.slice(0,1).map((hit)=>hit.fields.stocks)}/>
      
      
      
    </Head>



    <UserContext.Provider value={{value, setValue}}>
  <NavBar/>
  <header className="bg-gradient-dark position-fixed w-100 z-index-2">
    <div className="page-header" id="page-header-custom-recherche">
      <span className="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_recherche items={liste}/>
      
    
      <div className="position-absolute w-100 z-index-1 bottom-0">
      
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="moving-waves">
            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" ></use>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" ></use>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" ></use>
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" ></use>
            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" ></use>
            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" ></use>
          </g>
        </svg>
      </div>
    </div>
  </header>
  </UserContext.Provider>
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
  
  



     { data?.searchkit2.summary.total == 0 ?
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
    
      <section id="results-position">
      <div className="container p-0">
      
    
      <HitsList data={data} />
      <Pagination data={data?.searchkit2} />
      <div className="row justify-content-center text-start" id="container-margin-padding">
      {<Maj/>} 
      </div>
        
      </div>
      </section>
      <Footer/>
    </>
    }
   
  
 
  </>}
  
  
</>


      ) }
    
  




export default Page
