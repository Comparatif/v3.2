import AutoCompleteText_recherche from '../autocomplete/AutoCompleteText_recherche';
import {NavBarLigne} from '../navbar/navbarligne';
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
      <NavBarLigne/>
  <header className="bg-gradient-dark position-fixed w-100 z-index-2">
    <div className="page-header" id="page-header-custom-recherche-ligne">
      <span className="mask bg-gradient-info opacity-8"></span>

      <div className="position-absolute w-100 z-index-1 bottom-0">
      
        <svg className="waves-custom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto" >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="moving-waves">
        
            <use xlinkHref="#gentle-wave" x="98" y="0" fill="rgba(255,255,255,1)" ></use>
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