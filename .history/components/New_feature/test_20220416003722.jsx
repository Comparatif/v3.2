import AutoCompleteText_recherche from '../autocomplete/AutoCompleteText_recherche';
import {NavBar} from '../navbar/navbar';
import Footer from '../footer/footer';
import liste from '../autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import {Table} from './table.jsx'
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import { useReactiveVar } from '@apollo/client'



const Page = () => {
  const IndexChange = useReactiveVar(SearchkitIndex)
    return (
      <>
  <NavBar />
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
<Table/>
  <Footer/>
</>)}
    
export default Page