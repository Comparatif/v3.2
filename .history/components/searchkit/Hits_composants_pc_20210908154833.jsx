import React , { useEffect, useState } from 'react'
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


export const HitsList = ({ data }) => {
  
  /***************FireStore***********************/
// Time
var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
              + currentdate.getSeconds() + "sec";

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


votes?.docs?.filter( (doc) => boutique_infos.push(doc.data()))

/// le haut va dans hitlist et le bas après la map

const [CanvasState, SetCanvas] = useState('')
const OffCanevasChange = useReactiveVar(OffCanvas)

/***************Comparatifdz***********************/
  
useEffect(() => {var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"})

})})
const Liste = () => {setViewType('Liste')}
const Grille = () => {setViewType('Grille')}



const [viewType, setViewType] = useState('Liste')


  return (
   
   
  
<div class="container" id="results">

          

<div class="row justify-content-center text-start" >
<div class="col-lg-4  mb-0 p-0" >

{data?.results.hits.items.slice(0,1).map((hit)=>(

    
  <section id="fiche-produit">
  
  <div class="px-sm-0">
    <div class="row align-items-center">
      <div class="col-lg-12 mt-2 ">    
      <div class="card card-blog card-plain">
                <div class="position-relative">
                <a class="text-center">
                    <h6>
                    
                    {hit.fields.product_names}
                    </h6>
                  </a>
                  <a class="row justify-content-center blur-shadow-image">
                    <img src={hit.fields.product_imagelinks} alt={hit.fields.product_names} class="img-fluid shadow border-radius-lg w-50" />
                  </a>
                <div class="colored-shadow" id="card-url"></div></div>
                <div class="card-body px-1 pt-3 pb-0">
                  <p class="text-gradient text-primary mb-2 text-sm row justify-content-center">Prix le moins cher : {hit.fields.product_prices} DA</p>
                  <button onClick={() => {
                    if (typeof window !==  'undefined') {
                if (screen.width < 767.98){
                        document.getElementsByTagName("BUTTON")[2].scrollIntoView();
                        }}
                    }} type="button" class="btn bg-gradient-info btn-lg w-100">Comparer {data?.results.summary.total} offres</button>
                  <p class="small mb-0">
                  Processeur : Quad Core - Socket : AM4 - Type de processeur : Desktop - Nombre de threads : 4 a 3,6 GHz - Fréquence turbo max. : 4 GHz - Chipset graphique : Vega 8 - Cache : L3 4 Mo</p>
                </div>
              </div>  
      </div>
    </div>
  </div>
  <br/>
  
  
    
  
</section>


  
 ))}

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

 <div class="results1">
 <section class="top-0-section" id="info-produit1">
<div class="container card shadow-lg ">
<div class="row justify-content-start" >
<div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 mt-1 px-1 text-small text-center" ><h6 class="m-0 titles-size">Prix & Stock</h6></div>
<div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-1 px-md-2 px-lg-2 text-start " ><h6 class="m-0 titles-size">Paiement</h6></div>
<div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-2 px-md-2 px-lg-1 text-start" ><h6 class="m-0 titles-size">Livraison</h6></div>
<div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-0 px-md-0 px-lg-0 text-start"  ><h6 class="m-0 titles-size">Marchand</h6></div>

</div>
</div>
</section>


{data?.results.hits.items.map((hit) => {
  
  const reducer = (a, b) => a + b;

  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === hit.fields.vendeurs){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

 
  
//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0


  
  return(
  


  

  <section id="info-produit1">
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
          

          <strong>E-mail :</strong> <a href={"mailto:" + hit.fields.email + "?subject = Feedback = Message"} style={{wordWrap: "break-word"}} >{hit.fields.email}</a> <br/>
          
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
  
  
 
  
  
  
  

  <div key={hit.id.replace(/[0-9]/, 'Z')} class="container card shadow-lg ">
  
  <div class="row justify-content-center text-start" id="container-margin-padding">
  
  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
  
  <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + hit.id.replace(/[0-9]/, 'Z') + "-img"}>
    <h6 class="mt-1 mx-1 mb-0" id="title-style">{hit.fields.product_names}</h6>
    </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 pe-1" >
      <h1 class="text-gradient text-info ms-1 mb-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
      <p class="ms-1" id={hit.fields.stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{hit.fields.stocks}</strong></p>
    </div>

    
    <div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 px-1 px-md-4 px-lg-4" >

    <div title="" data-bs-original-title={"Paiement: " + hit.fields.paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {hit.fields.paiement.toString().includes("CCP") ? 
    <img class="shadow col-lg-6 col-md-6 col-sm-6 col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {hit.fields.paiement.toString().includes("Baridimob") ? 
    <img class="shadow col-lg-6 col-md-6 col-sm-6 col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    </div>
    
      
    </div>

    <div class="col-lg-1 col-md-1 col-sm-1 col-1 mb-1 ps-1 px-1 px-md-2 px-lg-2" >
    { hit.fields.livraison != undefined ? hit.fields.livraison.toString().includes(" ") ? <img title="" data-bs-original-title={"Livraison: " + hit.fields.livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/shipped-icon-13.jpg"/> : "" : ""}
    
    
    
    

    </div>





    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 px-1 px-md-4 px-lg-4"  >
    <div class="row justify-content-center text-center">
    <div class="dropdown col-lg-8">


    <a data-bs-toggle="dropdown" id={hit.id.replace(/[0-9]/, 'Z') + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={hit.fields.vendeurs_image} alt={hit.fields.vendeurs} class="img-fluid border-radius-lg" />
    </a>

    <ul class="dropdown-menu z-index-1"  aria-labelledby={hit.id.replace(/[0-9]/, 'Z')}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + hit.fields.telephone1} >
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

          <a class="dropdown-item text-bold" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + hit.id.replace(/[0-9]/, 'Z')}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>

    <div class="row justify-content-center text-center" onClick={() => SetCanvas(`SignUp-form-${hit.id}`)}>
       

{
  
  votesLoading ? "" :<AverageStars 
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={hit.id.replace(/[0-9]/, 'Z')}/>,
  
  
    
<UserConnected cle={hit.id} boutique={hit.fields.vendeurs} datetime={datetime} 
StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique} user={user} 
CanvasState={CanvasState} SetCanvas={SetCanvas}

/>
      




}

</div>

{console.log(OffCanevasChange)}







  


    
    </div>
    </div>






    
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 text-end ps-lg-1 pe-lg-3 ps-md-1 pe-md-3 ps-sm-1 pe-sm-3 ps-1" >
    
          <a href={hit.fields.product_links} 
          target="_blank"><button type="button" class="btn bg-gradient-info mb-0 position-relative z-index-0 button-width" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
    </div>
  </div>
  </div>



 

  
  
 
  
</section>


)}



)}
</div>






: 


<div class="results1" >
<div class="container px-lg-4 px-xl-4 px-md-4 px-sm-4 px-1">
<div class="row justify-content-center text-start">
{data?.results.hits.items.map((hit) => (
  


  
  
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

))}
</div></div>
</div>
}













</div>
</div>
</div>
 )}



 