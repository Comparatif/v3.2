import React , { useEffect, useState, useCallback } from 'react'
import {Auth} from "../firebase/Auth";
import {AverageStars} from "../firebase/Stars"
import {UserConnected} from "../firebase/UserConnected";



export const Listes = ({ data, boutique_infos, votesLoading, user, datetime, CanvasState, SetCanvas, isOn, toggleIsOn }) => {
  

 return(<div class="results1">
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

  
  const reducer = (a, b) => a + b;

  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === vendeurs){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

 
  const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

useEffect(()=> 
  
  { // Regle le useState sur Off quand le Canvas se barre
    var myModalEl = document.getElementById("SignUp-form-" + cle)
    myModalEl?.addEventListener('hidden.bs.modal', function (event) {
      return SetCanvas('Off')
    })
  }
  
  )
  


  
  return(
  


  

  <section id="info-produit1">
  <div class="modal fade" id={cle} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
          <div class="modal-dialog" id={cle} >
          <div class="modal-content">
          <div class="modal-header justify-content-center">


          <a href={shop_website}>
          <img class="img-fluid border-radius-lg " id="img-width" src={vendeurs_image} alt={vendeurs}/>
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
          

          <strong>E-mail :</strong> <a href={"mailto:" + email + "?subject = Feedback = Message"} style={{wordWrap: "break-word"}} >{email}</a> <br/>
          
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
          <img src={product_imagelinks} />
          
          
          
          </div>
          </div>
          </div>
  
  
 
  
  
  
  

  <div key={cle} class="container card shadow-lg ">
  
  <div class="row justify-content-center text-start" id="container-margin-padding">
  
  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
  
  <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
    <h6 class="mt-1 mx-1 mb-0" id="title-style">{product_names}</h6>
    </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 pe-1" >
      <h1 class="text-gradient text-info ms-1 mb-0" id="state1" id="price-fontsize">{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
      <p class="ms-1" id={stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{stocks}</strong></p>
    </div>

    
    <div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 px-1 px-md-4 px-lg-4 " >

    <div title="" data-bs-original-title={"Paiement: " + paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {paiement.toString().includes("CCP") ? 
    <img class="shadow col-lg-6 col-md-6 col-sm-6 col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {paiement.toString().includes("Baridi") ? 
    <img class="shadow col-lg-6 col-md-6 col-sm-6 col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    {paiement.toString().includes("paypal") ? 
    <img class="shadow col-lg-6 col-md-6 col-sm-6 col-6" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt="Paypal" src="/img/custom/1156727_finance_payment_paypal_icon"/> : ""}

    </div>
    
      
    </div>

    <div class="col-lg-1 col-md-1 col-sm-1 col-1 mb-1 ps-1 px-1 px-md-2 px-lg-2" >
    { livraison != undefined ? livraison.toString().includes(" ") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/shipped-icon-13.jpg"/> : "" : ""}
    
    
    
    

    </div>





    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 px-1 px-md-4 px-lg-4"  >
    <div class="row justify-content-center text-center">
    <div class="dropdown col-lg-8">


    <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={vendeurs_image} alt={vendeurs} class="img-fluid border-radius-lg" />
    </a>

    <ul class="dropdown-menu z-index-1"  aria-labelledby={cle}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + telephone1} >
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

          <a class="dropdown-item text-bold" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>

    <div class="row justify-content-center text-center" onClick={() => SetCanvas(`SignUp-form-${cle}`)}>
       


    <div class="col-xl-10 row justify-content-center text-center px-lg-1" >
    <AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState} size={18}/>
    </div>
  
    </div>

<UserConnected cle={cle} boutique={vendeurs} datetime={datetime} 
StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique} user={user} 
CanvasState={CanvasState} SetCanvas={SetCanvas} boutique_infos={boutique_infos}
Vendeur_image={vendeurs_image} votesLoading={votesLoading}
isOn={isOn} toggleIsOn={toggleIsOn}
/>

  <Auth cle={cle} CanvasState={CanvasState}  user={user}/>

















  


    
    </div>
    </div>






    
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 text-end ps-lg-1 pe-lg-3 ps-md-1 pe-md-3 ps-sm-1 pe-sm-3 ps-1" >
    
          <a href={product_links} 
          target="_blank"><button type="button" class="btn bg-gradient-info mb-0 position-relative z-index-0 button-width" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
    </div>
  </div>
  </div>



 

  
  
 
  
</section>


)}



)}
</div>)






}



 