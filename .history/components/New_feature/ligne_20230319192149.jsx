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
import {Resultats} from './Resultats'
import {LeftField} from './LeftField'
import {Facets} from '../facet/facet'
import { PdfContext } from '../UserContext.js';

const Ligne = ({id, SearchState}) => {
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
  

  
    
    
    //const [ResultsCount, SetResultsCount] = useState(CheckIfZeroResults)
    const IndexChange = useReactiveVar(SearchkitIndex)
    const [isOn, toggleIsOn] = new useToggle();
    const [query1, setQuery] = useSearchkitQueryValue()
    const PreviousQuery = query1
    const api = useSearchkit()

    const Pdf = useContext(PdfContext)
    const [PDF, setPDF] = useState()

    const CheckRelevance = data?.results?.hits?.sortedBy == "relevance"
    const CheckPrice = data?.results?.hits?.sortedBy == "prix_croissant"
    const CheckIfZeroResults = data?.results?.summary.total ==0



    const [count, setCount] = useState(data?.results?.summary.total);
    

    //CheckIfZeroResults? CheckRelevance? "" : api.setSortBy('relevance') : api.setSortBy("prix_croissant")
    console.log(CheckIfZeroResults)


 /* useEffect(() => {

    setCount(data?.results?.summary.total)
    if (count == 0) {
      api.setSortBy('relevance'); api.search()
    } else {
      api.setSortBy("prix_croissant"); api.search()
    }
  }, [count]);*/

/* Le logo de chargement */


    const LoadingLogo = 
      
    <section id="info-produit">  
    <div className="container"> 
        <div className="row justify-content-center text-center">
     <div className="col-md-12 col-sm-12 col-12 position-absolute top-50">
        <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
        </div>
        </div>
        </div>
        </section> 

/* La Barre de recherche */
    
    const NoResults =  <><LeftField/> <h3>Aucun résultats, réessayez :(</h3></>
   
    //const PriceSearch = <>{()=> api.setSortBy('prix_croissant')}  <>{LeftField}  {resultats}</></>
    const RelevanceSearch = <>{()=> api.setSortBy('relevance')}  <Resultats data={data}/></>
    
    //CheckIfZeroResults ? api.setSortBy('relevance') : ""
    
    /*useEffect(()=>{
      const CheckRelevance = data?.results?.hits?.sortedBy == "relevance"
      const CheckPrice = data?.results?.hits?.sortedBy == "prix_croissant"
      const CheckIfZeroResults = data?.results?.summary.total == 0
      console.log(CheckIfZeroResults)
      
      if(!loading && CheckIfZeroResults && CheckPrice) return(
      api.setSortBy('relevance'))


      //api.setPage({size: 10})
      //api.setQuery("Asus GeForce RTX 3070 EKWB")
      //api.search()
    }, [router.isReady])*/

    
    const idNumber = Number(id?.replace("id", "")) -1
    const SearchStateString = SearchState?.split("##!;#2")[idNumber]
    api.setQuery()
    api.search()
  
    
    return(
  
     
      
            <tr>
            
            
            
            {loading ? LoadingLogo : CheckIfZeroResults ? 


              CheckRelevance ? <> <LeftField id={id} data={data} isOn ={isOn} toggleIsOn={toggleIsOn} setQuery={setQuery} liste={liste} IndexChange={IndexChange} />
              <p>Pas de Résultats</p></> : 
              
              
              
              
              
              <> <LeftField id={id} SearchState={SearchState} data={data} isOn ={isOn} toggleIsOn={toggleIsOn} setQuery={setQuery} liste={liste} IndexChange={IndexChange} />
              <Resultats data={data}/>{api.setSortBy('relevance')} {api.search()}</> : 
              
              
              <><LeftField id={id} SearchState={SearchState} data={data} isOn ={isOn} toggleIsOn={toggleIsOn} setQuery={setQuery} liste={liste} IndexChange={IndexChange} />
              <Resultats data={data}/>{api.setSortBy('prix_croissant')}</>}
           

             
            </tr>
          




          );
        }


export default Ligne
  
  