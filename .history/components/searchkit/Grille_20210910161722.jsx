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


export const Grille = ({ data }) => {
<div class="results1" >
<div class="container px-lg-4 px-xl-4 px-md-4 px-sm-4 px-1">
<div class="row justify-content-center text-start">
{data?.results.hits.items.map((hit) => {
  useEffect(()=> 
  
  { // Regle le useState sur Off quand le Canvas se barre
    var myModalEl = document.getElementById("SignUp-form-" + hit.id)
    myModalEl?.addEventListener('hidden.bs.modal', function (event) {
      return SetCanvas('Off')
    })
  }
  
  )
  
  
  
  
  return(
  


  
  
  <div key={hit.id.replace(/[0-9]/, 'Z')} class="col-lg-6 col-xl-4 col-md-6 col-sm-6 col-6 mb-2 px-1" >
  <div class="card">


  <div class="modal fade" id={hit.id.replace(/[0-9]/, 'Z')} tabindex="-1" aria-labelledby={hit.id.replace(/[0-9]/, 'Z') + "Label"} aria-hidden="true">
          <div class="modal-dialog" id={hit.id.replace(/[0-9]/, 'Z')} >
          <div class="modal-content">
          <div class="modal-header justify-content-center">


          <a href={hit.fields.shop_website}>
          <img class="img-fluid border-radius-lg " id="img-width" src={hit.fields.vendeurs_image} alt={hit.fields.vendeurs}/>
          </a>
          
          
          </div>
          <div class="modal-body text-left">
          <strong>Pays :</strong>  {hit.fields.product_country} <img src={hit.fields.product_country == "Algérie" ? "/img/custom/2634506_algeria_ensign_flag_nation_icon.png" : "" } style={{width: "8%", height: "8%", borderRadius: "1px", boxShadow: "1px 1px 2px black"}}></img><br/>
          <strong>Villes :</strong> {hit.fields.villes1} <br/>
          <strong>Commune :</strong> {hit.fields.commune} <br/>
          <strong>Adresse :</strong> {hit.fields.adresses} <br/>
          <strong>Mobile 1 :</strong> <a href={"tel:" + hit.fields.telephone1}>{hit.fields.telephone1} </a><br/>
          <strong>Mobile 2 :</strong> <a href={"tel:" + hit.fields.telephone2}>{hit.fields.telephone2}</a> <br/>
          <strong>Téléphone fixe :</strong> <a href={"tel:" + hit.fields.fix1}>{hit.fields.fix1}</a> <br/>

          <strong>E-mail :</strong> <a href={"mailto:" + hit.fields.email + "?subject = Feedback = Message"}>{hit.fields.email}</a> <br/>
          <strong>Modes de paiement :</strong> {hit.fields.paiement == "" ? "N/A" : hit.fields.paiement} <br/>
          <strong>Livraison :</strong> {hit.fields.livraison == "" ? "N/A" : hit.fields.livraison} <br/>
          <strong>Heures d'ouvertures :</strong> {hit.fields.horaires} <br/>

          <strong>Réseau sociaux :</strong> <a href={hit.fields.facebook} target="_blank">
          <img src="/img/custom/317727_facebook_social media_social_icon.png" style={{width: "8%", height: "8%", borderRadius: "30px"}}></img></a> 

          <a href={hit.fields.instagram} target="_blank">
          <img style={{width: "8%", height: "8%", borderRadius: "1px"}} src="/img/custom/3225191_app_instagram_logo_media_popular_icon.png"></img></a>
             </div>
          <div class="modal-footer justify-content-end">
          
          <button type="button" class="btn bg-gradient-info" data-bs-dismiss="modal">Terminé</button>
          </div>
          </div>
          </div>
          </div>

          <div class="modal fade" id={hit.id.replace(/[0-9]/, 'Z') + "-img"} tabindex="-1" aria-labelledby={hit.id.replace(/[0-9]/, 'Z') + "Label"} aria-hidden="true">
          <div class="modal-dialog" id={hit.id.replace(/[0-9]/, 'Z') + "-img"} >
          <div class="modal-content">
          <img src={hit.fields.product_imagelinks} />

          
          </div>
          </div>
          </div>
          
          
          
          <div class="card-header h-50 p-0 m-2 position-relative z-index-0 justify-content-center row">
            <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + hit.id.replace(/[0-9]/, 'Z') + "-img"} class="d-block blur-shadow-image">
              <img src={hit.fields.product_imagelinks}  class="img-fluid shadow border-radius-lg w-100" style={{objectFit: "cover", aspectRatio: "1 / 1"}}/>
            </a>
          </div>
    
          <div class="card-body h-50 p-1 m-2">
            <div class="text-bold overflow-title" style={{minHeight: "50px"}}>
            {hit.fields.product_names}
            </div>


            <div class="row justify-content-start text-start">
            <h1 class="text-gradient text-info mb-1 col-8 pe-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
            <div class="col-4 row justify-content-center text-start px-1">
            <div class="col-7 p-0" >
            <div title="" data-bs-original-title={"Paiement: " + hit.fields.paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
            {hit.fields.paiement.toString().includes("CCP") ? 
            <img class="shadow col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
            {hit.fields.paiement.toString().includes("Baridimob") ? 
            <img class="shadow col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
            </div>
           
              
            </div>

            <div class="col-5 p-0" >
            { hit.fields.livraison != undefined ? hit.fields.livraison.toString().includes(" ") ? <img title="" data-bs-original-title={"Livraison: " + hit.fields.livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/shipped-icon-13.jpg"/> : "" : ""}
            
            
            
            

            </div>
            </div>
            </div>
            <p class="mb-1" style={{minHeight: "25px"}} id={hit.fields.stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{hit.fields.stocks}</strong></p>
            
            <div class="row justify-content-center">
            <div class="col-md-6 col-sm-6 col-6 ">
            <div class="pull-left ">
            <div class="dropdown mb-1 ">


    <a data-bs-toggle="dropdown" id={hit.id.replace(/[0-9]/, 'Z') + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={hit.fields.vendeurs_image} alt={hit.fields.vendeurs} class="img-fluid border-radius-lg " style={{maxheight: "20px"}}/>
    </a>

    <ul class="dropdown-menu z-index-1" aria-labelledby={hit.id.replace(/[0-9]/, 'Z')}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + hit.fields.telephone1} target="_blank">
          <li >
          <img src="/img/custom/phone-call.svg"/>  Appeler
          </li>
          </a>

          <a class="dropdown-item text-bold" href={hit.fields.localisation} target="_blank">
          <li>
          <img src="/img/custom/map.svg"/> Localisation
          </li>
          </a>

          <a class="dropdown-item text-bold" href={hit.fields.shop_website} target="_blank">
          <li>
          <img src="/img/custom/external-link.svg"/> Voir site
          </li>
          </a>

          <a class="dropdown-item text-bold" data-bs-toggle="modal" data-bs-target={"#" + hit.id.replace(/[0-9]/, 'Z')}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>
            </div></div>
            <div class="col-md-6 col-sm-6 col-6 p-0 text-center">
            <a href={hit.fields.product_links}  class="text-success icon-move-right titles-size">Voir l'offre
              <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
            </a>
            </div>
          </div>
          </div>
        
          
          
</div>
</div>

)})}





</div></div>
</div>
}













</div>
</div>
</div>
 )}



 