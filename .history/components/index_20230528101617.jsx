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







const Page = () => {
  const isBrowser = typeof window !== `undefined`
  const query = gql`
  query resultSet($query: String, $filters: [SKFiltersSet], $page: SKPageInput, $sortBy: String) {
    results(query: $query, filters: $filters) {
      hits(page: $page, sortBy: $sortBy) {
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
    }
  }
`
const IndexChange = useReactiveVar(SearchkitIndex)
const api = useSearchkit();
const variables = useSearchkitVariables()
const { previousData, data = previousData, loading } = useQuery(query, {
  variables
})


useEffect(() => {
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
  
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    
      var tooltip =   new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"}) 
      return tooltip 
    
})


}


) 





    return (
      
      

      <>
      
      <Head>
 
      
      <title>Comparateur de prix & guide d'achat | Comparatifdz.com</title>
      
      <meta name="description" content="Comparer les prix pour vos achats en ligne avec Comparatifdz.com, comparateur de prix pour acheter moins cher ! ✓ Avis ✓ Tests produits ✓ Comparatifs. Matériel informatique : Cartes graphiques, Processeurs, Cartes mères... Laptop & PC fixes "/>
 
      <link rel="canonical" href= "https://comparatifdz.com" />
      <meta property="og:locale" content= "fr_FR" />
      <meta property="og:type" content= "article" />
      <meta property="og:title" content= "Comparateur de prix & guide d'achat | Comparatifdz.com" />
      <meta property="og:url" content= "https://comparatifdz.com"/>
      <meta property="og:site_name" content= "Comparatif-dz" />
      <meta property="article:publisher" content="https://www.facebook.com/Comparatifdz"/>
      <meta property="article:modified_time" content="21/10/2021"/>
      <meta property="og:image" content= {data?.results.hits.items.slice(0,1).map((hit)=>hit.fields.product_imagelinks)}/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:description" content="Comparer les prix pour vos achats en ligne avec Comparatifdz.com, comparateur de prix pour acheter moins cher ! ✓ Avis ✓ Tests produits ✓ Comparatifs. Matériel informatique : Cartes graphiques, Processeurs, Cartes mères... Laptop & PC fixes "/>
      <meta name="twitter:card" content="summary"/>
      <meta name="keywords" content= {"Meilleur prix Algérie, stocks & avis - Comparatif, gaming, config, ryzen, intel, HP, ASUS, MSI, NVIDIA, AMD, RTX, GTX"}/>
      <meta property="product:price:currency" content="DZD"/>
      <meta property="product:condition" content="new"/>
      
      
      
    </Head>



    
  <NavBar/>
  <header className="bg-gradient-dark position-fixed w-100 z-index-2">
    <div className="page-header" id="page-header-custom">
      <span className="mask bg-gradient-info opacity-8"></span>
      
        
        <AutoCompleteText_acceuil items={liste} index={IndexChange}/>
      
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
    :
    <>
    <Carousell />
    <Produits_favoris data={data} />
  <Produits_recommandés data={data} />
  {typeof window === 'undefined' ? null : <Stats/>}
  
  <Apropos />
  <Footer/>
  
    </>
    }
  

  
  

 








  
  


</>


      ) }
    
  




export default Page
