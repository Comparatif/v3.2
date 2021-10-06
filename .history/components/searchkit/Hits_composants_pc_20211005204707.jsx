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
import { Markup } from 'interweave';
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'


export const HitsList = ({ data }) => {
  
  const api = useSearchkit();
const lesDescriptions =  data?.description?.hits?.items?.slice(0,1).map(
  (hit)=>

  ({a: hit?.fields.description1, b: hit?.fields.brand_name, c: hit?.fields.description2, d: hit?.fields.prod_description,
    e: hit?.fields.prod_specs_big_title, f: hit?.fields.total, g: hit?.fields.product_names})
  

  )

  const description1 = lesDescriptions != null ? lesDescriptions['0'].a : ""
  const brand_name = lesDescriptions != null ? lesDescriptions['0'].b  : ""
  const description2 = lesDescriptions != null ? lesDescriptions['0'].c : ""
  const prod_description = lesDescriptions != null ? lesDescriptions['0'].d : ""
  const prod_specs_big_title = lesDescriptions != null ? lesDescriptions['0'].e : ""
  const total = lesDescriptions != null ? lesDescriptions['0'].f : ""
  const names_bdd = lesDescriptions != null ? lesDescriptions['0'].g : ""


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

/// le haut va dans hitlist et le bas après la map

const [CanvasState, SetCanvas] = useState('Off')
const [isOn, toggleIsOn] = useToggle();
const [isOn2, toggleIsOn2] = useToggle2();
const [Description, setDescription] = useState('Description')


/***************Comparatifdz***********************/

  
useEffect(() => {
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
  
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    
      var tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"})
      return tooltip
    
})


})



const Liste = () => {setViewType('Liste')}
const Grille = () => {setViewType('Grille')}



 //const url = window.location.href.toString().includes("query=") ? window.location.href.match(/query=(.+)/)[1] : ''

const [viewType, setViewType] = useState('Liste')


  return (
   
   
  
<div class="container" id="results">

          

<div class="row justify-content-center text-start" >
<div class="col-lg-4  mb-0 p-0" >

{data?.results?.hits?.items.slice(0,1).map((hit)=>
  {
    const cle = hit.id.replace(/[0-9]/, 'Z')
    const product_names = hit.fields.product_names
    const product_imagelinks = hit.fields.product_imagelinks

    const product_prices = hit.fields.product_prices

   
    useEffect(()=> 
  
  { // Regle le useState sur Off quand le Canvas se barre
    var myModalEl = document.getElementById("SignUp-form-" + cle)
    myModalEl?.addEventListener('hidden.bs.modal', function (event) {
     return SetCanvas('Off')
    })
  }
  
  )
    return(

    
  <section id="fiche-produit">
  
  <div class="px-sm-0">
    <div class="row align-items-center">
      <div class="col-lg-12 mt-2 ">    
      <div class="card card-blog card-plain">
                <div class="position-relative">
                <a class="text-center">
                    <h1 class="title-fontsize-h1">
                    {api.getQuery()== "" ? product_names : names_bdd } - Prix Algérie
                    
                    </h1>
                    <p>
                    <small >
                  {api.getQuery()== "" ? "" : description1}  <img src="/img/custom/info.svg" title="" data-bs-original-title="Beta : la description peut ne pas correspondre a la recherche dans certains cas."   data-bs-toggle="tooltip" data-bs-placement="right"/></small></p>
                  </a>
                  <a class="row justify-content-center blur-shadow-image">
                    <img src={product_imagelinks} alt={product_names} class="img-fluid shadow border-radius-lg w-50" style={{objectFit: "cover", aspectRatio: "1 / 1"}}/>
                  </a>
                <div class="colored-shadow" id="card-url"></div></div>
                <div class="card-body px-1 pt-3 pb-0">
                  <p class="text-gradient text-primary mb-2 text-sm row justify-content-center">Prix le moins cher : {product_prices} DA</p>
                  <button class="btn bg-gradient-info btn-lg w-50 py-2 px-1 " onClick={toggleIsOn2} >{isOn2 ? 'Description' : 'Spécifications'}</button>
                  <button onClick={() => {
                    if (typeof window !==  'undefined') {
                if (screen.width < 767.98){
                        document.getElementsByTagName("BUTTON")[2].scrollIntoView();
                        }}
                    }} type="button" class="btn bg-gradient-info btn-lg w-50 py-2 px-1">Comparer {data?.results.summary.total} offres</button>
                   
                  
                   
                    {data?.description.summary.query == "" ? undefined :
                (<div style={{textAlign: 'justify', textJustify: 'inter-word'}} class="description-custom">
                 {isOn2 === false ? <p class="small mb-0" >
                 
                <Markup content={prod_description?.replace("<h2>", "<h2 class='title-fontsize-h2'>").replace("<h3>", "<h3 class='title-fontsize-h2'>")} />
                 
                 </p> 
                 :

                 <p class="small mb-0" style={{whiteSpace: 'pre-wrap'}}>
                 {total}</p>}
                 
                 </div>)}


                 
                  </div>
              </div>  
      </div>
    </div>
  </div>
  <br/>
  
  
    
  
</section>


  
 )


})}

 </div>
 


<div class="col-lg-8 mb-1 p-0" id="results1">
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
user={user} datetime={datetime} CanvasState={CanvasState}  SetCanvas={SetCanvas} 
isOn={isOn} toggleIsOn={toggleIsOn}/>}













</div>
</div>
</div>
 )}



 