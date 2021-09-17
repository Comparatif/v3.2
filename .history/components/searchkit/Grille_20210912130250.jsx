import React , { useEffect, useState, useCallback } from 'react'



export const Grilles = ({ data, boutique_infos, votesLoading, user, datetime, CanvasState, SetCanvas }) => {
    
return(
    
    
    <div class="results1" >
<div class="container px-lg-4 px-xl-4 px-md-4 px-sm-4 px-1">
<div class="row justify-content-center text-start">
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

    const cle = hit.id.replace(/[0-9]/, 'Z')
  useEffect(()=> 
  
  { // Regle le useState sur Off quand le Canvas se barre
    var myModalEl = document.getElementById("SignUp-form-" + cle)
    myModalEl?.addEventListener('hidden.bs.modal', function (event) {
      return SetCanvas('Off')
    })
  }
  
  )
  
  
  
  
  return(
  


  
  
  <div key={cle} class="col-lg-6 col-xl-4 col-md-6 col-sm-6 col-6 mb-2 px-1" >
  <div class="card">


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

          <strong>E-mail :</strong> <a href={"mailto:" + email + "?subject = Feedback = Message"}>{email}</a> <br/>
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
          <div class="modal-body">
          <div class="row justify-content-center">
          <img class="w-75" src={product_imagelinks} />
          </div>
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
            
          </div>
          
          
          </div>
          </div>
          </div>
          
          
          
          <div class="card-header h-50 p-0 m-2 position-relative z-index-0 justify-content-center row">
            <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"} class="d-block blur-shadow-image">
              <img src={product_imagelinks}  class="img-fluid shadow border-radius-lg w-100" style={{objectFit: "cover", aspectRatio: "1 / 1"}}/>
            </a>
          </div>
    
          <div class="card-body h-50 p-1 m-2">
            <div class="text-bold overflow-title" style={{minHeight: "50px"}}>
            {product_names}
            </div>


            <div class="row justify-content-start text-start">
            <h1 class="text-gradient text-info mb-1 col-8 pe-0" id="state1" id="price-fontsize">{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
            <div class="col-4 row justify-content-center text-start px-1">
            <div class="col-7 p-0" >
            <div  title="" data-bs-original-title={"Paiement: " + paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {paiement.toString().includes("CCP") ? 
    <img class="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"60%"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {paiement.toString().includes("Baridi") ? 
    <img class="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    {paiement.toString().includes("paypal") ? 
    <img class="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt="Paypal" src="/img/custom/1156727_finance_payment_paypal_icon.png"/> : ""}
    {paiement.toString().includes("visa") ? 
    <img class="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt="Paypal" src="/img/custom/206684_visa_method_card_payment_icon.png"/> : ""}
    {paiement.toString().includes("CIB") ? 
    <img class="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt="Paypal" src="/img/custom/CIB.png"/> : ""}
    </div>
           
              
            </div>

            <div class="col-5 p-0" >
            { livraison != undefined ? livraison.toString().includes(" ") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1"}} alt= "CCP" src="/img/custom/shipped-icon-13.jpg"/> : "" : ""}
            
            
            
            

            </div>
            </div>
            </div>
            <p class="mb-1" style={{minHeight: "25px"}} id={stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{stocks}</strong></p>
            
            <div class="row justify-content-center">
            <div class="col-md-6 col-sm-6 col-6 ">
            <div class="pull-left ">
            <div class="dropdown mb-1 ">


    <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={vendeurs_image} alt={vendeurs} class="img-fluid border-radius-lg " style={{maxheight: "20px"}}/>
    </a>

    <ul class="dropdown-menu z-index-1" aria-labelledby={cle}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + telephone1} target="_blank">
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

          <a class="dropdown-item text-bold" data-bs-toggle="modal" data-bs-target={"#" + cle}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>
            </div></div>
            <div class="col-md-6 col-sm-6 col-6 p-0 text-center">
            <a href={product_links}  class="text-success icon-move-right titles-size">Voir l'offre
              <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
            </a>
            </div>
          </div>
          </div>
        
          
          
</div>
</div>

)})}





</div></div>
</div>)
}












 