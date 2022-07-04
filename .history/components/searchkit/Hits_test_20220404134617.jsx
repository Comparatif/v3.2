import React , { useEffect, useState, useCallback } from 'react'
import {Apropos, Maj} from './stuff.jsx'
import {Facets} from '../facet/facet'
import firebase from "../firebase/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import {Auth} from "../firebase/Auth";
import VoterList from "../firebase/VoterList";
import {AverageStars, StarsRate} from "../firebase/Stars"
import {Input} from "../firebase/Input"
import { OffCanvas } from '../UserContext';
import {UserConnected} from "../firebase/UserConnected";
import { useReactiveVar } from '@apollo/client'
import { Listes } from './Liste'
import { Grilles } from './Grille'
import useToggle from '../useful/toggle.jsx';
import {useToggle2} from '../useful/toggle.jsx';
import {useToggle3} from '../useful/toggle.jsx';
import { Markup } from 'interweave';
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'


export const HitsList = ({ data }) => {
  const api = useSearchkit();
  const CheckIfSorted = data?.results?.hits.sortedBy
  const isBrowser = typeof window !== `undefined`
const [viewType, setViewType] = useState('Liste')
/// le haut va dans hitlist et le bas après la map

const [CanvasState, SetCanvas] = useState('Off')
const [CanvasState2, SetCanvas2] = useState('Off')
const [isOn, toggleIsOn] = useToggle();
const [isOn2, toggleIsOn2] = useToggle2();
const [isOn3, toggleIsOn3] = useToggle3();
const Liste = () => {setViewType('Liste')}
const Grille = () => {setViewType('Grille')}
const s = isBrowser ? window.location.href : ''

      const s1 = s?.replace('//', '')
      const s2 = s1?.split('/')[1];
      const s3 = s2?.split('&')[0];
      

      /*typeof document !== undefined  ?       useEffect(() => {
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
  
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

      if (bootstrap) {return new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"})}
    
})


}) : "" */

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


  /***************FireStore***********************/
// Time
var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
              //+ currentdate.getSeconds() + "sec";

// Firestore
const db = firebase.firestore();

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Votes Collection
const [votes, votesLoading, votesError] = useCollection(
  db.collection("votes"),
  {}
);




//Push data into array

const boutique_infos = []


votes?.docs?.filter( (doc) => boutique_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})       )   )




/***************Comparatifdz***********************/
  








 //const url = window.location.href.toString().includes("query=") ? window.location.href.match(/query=(.+)/)[1] : ''




  return (
   
   
  
<div class="container" id="results">

          

<div class="row justify-content-center text-start" >
<div class="col-lg-4  mb-0 p-0" >

{data?.results?.hits?.items.slice(0,1).map((hit)=>
  {

    const product_names = hit.fields.product_names
    const product_imagelinks = hit.fields.product_imagelinks

    const product_prices = hit.fields.product_prices
    const urlLength = s1?.split('/').length
    const titleShortUrl= s3?.replaceAll('-', ' ').replaceAll('%20', ' ')
    const titleLongUrl = api.getQuery()== "" ? product_names : (names_bdd ? names_bdd : product_names)
   
    


})}

 </div>
 


<div class="col-lg-12 mb-1 p-0" id="results1">
<section id="info-produit">
  
                

<div class="container">
<div class="row justify-content-center text-start">

<div class='col-lg-2 col-md-3 col-sm-3 col-3 mt-0 ps-0 text-center'>
  <Facets data={data?.results}/>
  </div>

 
  <div class='col-lg-5 col-md-5 col-sm-6 col-6 mt-0 text-center'>
  

   <div class="row justify-content-center">
   
      <div class=" col-md-4 col-sm-4 col-5 p-0" >
         <button id="btn-fontsize" type="button"  class={viewType === "Liste" ? "btn bg-gradient-info mb-0 " : "btn mb-0  "} onClick={Liste}  >
         Liste
         </button>
      </div>   
      <div class=" col-md-4 col-sm-4 col-5 p-0" >
         <button id="btn-fontsize" type="button"  class={viewType === "Grille" ? "btn bg-gradient-info mb-0  " : "btn mb-0  "} onClick={Grille} >
         Grille
         </button>
      </div>
      

      </div>
      

</div>


<div class="col-lg-2 col-md-3 col-sm-3 col-3 mt-0 pe-0 text-center">

{<Apropos/>} 

</div>

  
  
  </div>
</div>


</section>



{viewType === "Liste" ? 


<Listes data={data} boutique_infos={boutique_infos} 
votesLoading={votesLoading} user={user} datetime={datetime} CanvasState={CanvasState}  
SetCanvas={SetCanvas} isOn={isOn} toggleIsOn={toggleIsOn} /> 


: <Grilles data={data} boutique_infos={boutique_infos} votesLoading={votesLoading} 
user={user} datetime={datetime} CanvasState={CanvasState2}  SetCanvas={SetCanvas2} 
isOn={isOn3} toggleIsOn={toggleIsOn3}/>}













</div>
</div>
</div>
 )}



 