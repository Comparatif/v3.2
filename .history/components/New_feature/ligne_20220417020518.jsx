import useToggle from '../useful/toggle.jsx';
import AutoCompleteText_ligne from '../autocomplete/AutoCompleteText_ligne.js';
import liste from '../autocomplete/liste.js'
import router from 'next/router'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue, SearchkitProvider } from '@searchkit/client'
import {Maj} from '../../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import { useReactiveVar } from '@apollo/client'


export const Ligne = () => {
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
  
  


  const variables = useSearchkitVariables()
  const { previousData, data = previousData, loading } = useQuery(query, { variables })
  //const { previousData2, data2 = previousData2, loading2 } = useQuery(query2, { variables })
  

  
    const CheckIfZeroResults = data?.results.summary.total == 0
    const IndexChange = useReactiveVar(SearchkitIndex)
    const [isOn, toggleIsOn] = new useToggle();
    const [query1, setQuery] = useSearchkitQueryValue()
    const api = useSearchkit()
    /*useEffect(()=>{
      if(!router.isReady) return;
      api.setPage({size: 5})
      api.search()
    }, [router.isReady]); */

    const lesDescriptions =  data?.description?.hits?.items?.slice(0,1).map(
      (hit)=>
    
      ({a: hit?.fields.description1, b: hit?.fields.brand_name, c: hit?.fields.description2, d: hit?.fields.prod_description,
        e: hit?.fields.prod_specs_big_title, f: hit?.fields.total, g: hit?.fields.product_names})
      
    
      )
    
      const description1 = lesDescriptions != undefined ? lesDescriptions['0']?.a : ""
      const brand_name = lesDescriptions != undefined ? lesDescriptions['0']?.b  : ""
      const description2 = lesDescriptions != undefined ? lesDescriptions['0']?.c : ""
      const prod_description = lesDescriptions != undefined ? lesDescriptions['0']?.d : ""
      const prod_specs_big_title = lesDescriptions != undefined ? lesDescriptions['0']?.e : ""
      const total = lesDescriptions != undefined ? lesDescriptions['0']?.f : ""
      const names_bdd = lesDescriptions != undefined ? lesDescriptions['0']?.g : ""

/* Le logo de chargement */


    const LoadingLogo = 
      
    <section id="info-produit">  
    <div class="container"> 
        <div class="row justify-content-center text-center">
     <div class="col-md-12 col-sm-12 col-12 position-absolute top-50">
        <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
        </div>
        </div>
        </div>
        </section> 

/* La Barre de recherche */
    const ShowSearchBar = !isOn || api.getQuery() == "" || CheckIfZeroResults
    const LeftField = 
  
    
      <td class="searchbar_ligne" >
      
      <div class="d-flex px-2 py-1">
      {ShowSearchBar ?
      <AutoCompleteText_ligne api={api} toggleIsOn={toggleIsOn} setQuery={setQuery} items={liste} index={IndexChange}/>
      
      

      :
      data?.results?.hits?.items.slice(0,1).map((hit)=>
  {
    const product_names = hit.fields.product_names
    const product_imagelinks = hit.fields.product_imagelinks
    const results_number = data?.results.summary.total
    const cle = hit.id.replace(/[0-9]/, 'Z')
    return(
      <>
      <div>
      <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
        <img src={product_imagelinks} class="avatar avatar-sm me-3"/>
        </a>
      </div>
      <div class="d-flex flex-column justify-content-center">
      <a style={{cursor : "pointer"}} onClick={()=> toggleIsOn()} >
        <h6 class="mb-0 text-xs">{product_names} {"(" + results_number + " résultats)"}</h6>
        <p class="text-xs text-secondary mb-0">{!names_bdd ? "" : description1}</p>
        </a>
        </div>
        </>)


      })}
        </div></td>
  
    


  /* Les resultats de recherche */


  const resultats =  data?.results.hits.items.map((hit) => {
      
  const vendeurs = hit.fields.vendeurs
  const product_names = hit.fields.product_names
  const product_imagelinks = hit.fields.product_imagelinks
  const marques = hit.fields.marques
  const categories = hit.fields.categories
  const product_links = hit.fields.product_links
  const product_prices = hit.fields.product_prices
  const vendeurs_image = hit.fields.vendeurs_image
  const villes1 = hit.fields.villes1
  const adresses = hit.fields.adresses
  const telephone1 = hit.fields.telephone1
  const telephone2 = hit.fields.telephone2
  const fix1 = hit.fields.fix1
  const email = hit.fields.email
  const facebook = hit.fields.facebook
  const instagram = hit.fields.instagram
  const horaires = hit.fields.horaires
  const localisation = hit.fields.localisation
  const stocks = hit.fields.stocks
  const shop_website = hit.fields.shop_website
  const product_country = hit.fields.product_country
  const commune = hit.fields.commune
  const livraison = hit.fields.livraison
  const paiement = hit.fields.paiement
  const type = hit.fields.type
  const cle = hit.id.replace(/[0-9]/, 'Z')
  return(
    


      <td key={cle} class="results_ligne">
      <div class="modal fade" id={cle} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
    <div class="modal-dialog" id={cle} >
    <div class="modal-content">
    <div class="modal-header justify-content-center">


    <a href={shop_website}>
    <img  class="img-fluid border-radius-lg " id="img-width" src={vendeurs_image} alt={vendeurs}/>
    </a>
    
    
    </div>
    <div class="modal-body text-left">
    <strong>Pays :</strong>  {product_country} <img src={product_country == "Algérie" ? "/img/custom/2634506_algeria_ensign_flag_nation_icon.png" : "" } style={{width: "8%", height: "8%", borderRadius: "1px", boxShadow: "1px 1px 2px black"}}></img><br/>
    <strong>Villes :</strong> {villes1} <br/>
    <strong>Commune :</strong> {commune} <br/>
    <strong>Adresse :</strong> {adresses} <br/>
    <strong>Mobile 1 :</strong> <a href={"tel:" + telephone1}>{telephone1} </a><br/>
    <strong>Mobile 2 :</strong> <a href={"tel:" + telephone2}>{telephone2}</a> <br/>
    <strong>Téléphone fixe :</strong> <a href={"tel:" + fix1}>{fix1}</a> <br/>

    <strong>E-mail :</strong> <a href={"mailto:" + email + "?subject = Feedback = Message"}>{email}</a> <br/>
    <strong>Modes de paiement :</strong> {paiement == "" ? "N/A" : paiement} <br/>
    <strong>Livraison :</strong> {livraison == "" ? "N/A" : livraison} <br/>
    <strong>Heures d'ouvertures :</strong> {horaires} <br/>

    <strong>Réseau sociaux :</strong> <a href={facebook} target="_blank">
    <img src="/img/custom/317727_facebook_social media_social_icon.png" style={{width: "8%", height: "8%", borderRadius: "30px"}}></img></a> 

    <a href={instagram} target="_blank">
    <img style={{width: "8%", height: "8%", borderRadius: "1px"}} src="/img/custom/3225191_app_instagram_logo_media_popular_icon.png"></img></a>
       </div>
    <div class="modal-footer justify-content-end">
    
    <button type="button" class="btn bg-gradient-info" data-bs-dismiss="modal">Terminé</button>
    </div>
    </div>
    </div>
    </div>
    <div class="modal fade" id={cle + "-img"} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
    <div class="modal-dialog" id={cle + "-img"} >
    <div class="modal-content">
    <div class="modal-body">
    <div class="row justify-content-center">
    <img class="w-75" src={product_imagelinks} />
    </div>
    
    </div>
    <div class="modal-footer">
      <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
      
    </div>
    
    
    </div>
    </div>
    </div>

    
    <div class="dropdown mb-1 ">


<a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
<img id="img-width" src={vendeurs_image} alt={vendeurs} class="img-fluid border-radius-lg " style={{maxheight: "20px", objectFit: "scale-down", aspectRatio: "20/9"}}/>
</a>

<ul class="dropdown-menu z-index-1" aria-labelledby={cle}>

  

  <a class="dropdown-item text-bold" href={'tel:' + telephone1} target="_blank">
  <li >
  <img src="/img/custom/phone-call.svg"/>  Appeler
  </li>
  </a>

  <a class="dropdown-item text-bold" href={localisation} target="_blank">
  <li>
  <img src="/img/custom/map.svg"/> Localisation
  </li>
  </a>

  <a class="dropdown-item text-bold" href={shop_website} target="_blank">
  <li>
  <img src="/img/custom/external-link.svg"/> Voir site
  </li>
  </a>

  <a class="dropdown-item text-bold" data-bs-toggle="modal" data-bs-target={"#" + cle}>
  <li>
  <img src="/img/custom/info.svg"/> Détails
  </li>
  </a>

</ul>
</div>



    
    <div class="row justify-content-center text-center">
    <h3 class="text-gradient text-info mb-1 col-8 p-0" id="price-fontsize-ligne"><small>{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</small></h3>
    
    </div>
      </td>
  )})

    const NoResults = <>{LeftField} <h3>Aucun résultats, réessayez :(</h3></>
    const CheckRelevance = data?.results?.hits?.sortedBy == "relevance"
    const CheckPrice = data?.results?.hits?.sortedBy == "prix_croissant"
    const PriceSearch = <>{()=> api.setSortBy('prix_croissant')}  <>{LeftField}  {resultats}</></>
    const RelevanceSearch = <>{()=> api.setSortBy('relevance')}  <>{LeftField}  {resultats}</></>
    
  
    return(
  
          

            <tr>
            {loading ? LoadingLogo : CheckIfZeroResults ? 
              
              ( CheckRelevance && CheckIfZeroResults  ? <> {NoResults} </> : <>RelevanceSearch </>) :  <> {PriceSearch} </>}
              </tr>
              

          )}
  
  