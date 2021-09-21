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
export const HitsList = ({ data }) => {
  
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

{data?.results.hits.items.slice(0,1).map((hit)=>
  {
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
    const description1 = hit.fields.description1
    const brand_name = hit.fields.brand_name
    const description2 = hit.fields.description2
    const prod_description = hit.fields.prod_description
    const prod_specs_big_title = hit.fields.prod_specs_big_title
    const total = hit.fields.total
    
    return(

    
  <section id="fiche-produit">
  
  <div class="px-sm-0">
    <div class="row align-items-center">
      <div class="col-lg-12 mt-2 ">    
      <div class="card card-blog card-plain">
                <div class="position-relative">
                <a class="text-center">
                    <h1 class="title-fontsize-h1">
                    {product_names} - Prix Algérie
                    
                    </h1>
                  </a>
                  <a class="row justify-content-center blur-shadow-image">
                    <img src={product_imagelinks} alt={product_names} class="img-fluid shadow border-radius-lg w-50" />
                  </a>
                <div class="colored-shadow" id="card-url"></div></div>
                <div class="card-body px-1 pt-3 pb-0">
                  <p class="text-gradient text-primary mb-2 text-sm row justify-content-center">Prix le moins cher : {product_prices} DA</p>
                  <button onClick={() => {
                    if (typeof window !==  'undefined') {
                if (screen.width < 767.98){
                        document.getElementsByTagName("BUTTON")[2].scrollIntoView();
                        }}
                    }} type="button" class="btn bg-gradient-info btn-lg w-100">Comparer {data?.results.summary.total} offres</button>
                  <p class="small mb-0">
                  {description1}</p>
                <br/>
                <p class="small mb-0">
                  {description2}</p>
                  <p class="small mb-0" style={{whiteSpace: 'pre-wrap'}}>
                 {total}</p>
                
                 <p class="small mb-0">
                 <td dangerouslySetInnerHTML={{__html: this.state.actions}} /></p>
                
                 
                  </div>
              </div>  
      </div>
    </div>
  </div>
  <br/>
  
  
    
  
</section>


  
 )})

}

 </div>
 


<div class="col-lg-8 mb-1 p-0" id="results1">
<section id="info-produit">
  
                

<div class="container">
<div class="row justify-content-center text-start">

<div class='col-lg-2 col-md-3 col-sm-3 col-3 mt-0 ps-0 text-center'>
  <Facets data={data.results}/>
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



 