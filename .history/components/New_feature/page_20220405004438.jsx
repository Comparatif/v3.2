import AutoCompleteText_recherche from '../autocomplete/AutoCompleteText_recherche';
import {NavBar} from '../navbar/navbar';
import Footer from '../footer/footer';
import liste from '../autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue } from '@searchkit/client'
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

export const test =({data}) =>

{ data?.results.summary.total == 0 ?
    <>
    
    {(data?.results?.hits?.sortedBy == "relevance" && data?.results.summary.total == 0 ) ?
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