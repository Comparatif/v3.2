import React , { useEffect, useState, useCallback } from 'react'
import {Auth} from "../firebase/Auth";
import {AverageStars} from "../firebase/Stars"
import {UserConnected} from "../firebase/UserConnected";


export const Grilles = ({ data, boutique_infos, votesLoading, user, datetime, CanvasState, SetCanvas, isOn, toggleIsOn }) => {
    
return(
    
    
    <div className="results1" >
<div className="container px-lg-4 px-xl-4 px-md-4 px-sm-4 px-1">
<div className="row justify-content-center text-start">
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
  


  
  
  <div key={cle} className="col-lg-6 col-xl-4 col-md-6 col-sm-6 col-6 mb-2 px-1" >
  <div className="card">


  <div className="modal fade" id={cle} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
          <div className="modal-dialog" id={cle} >
          <div className="modal-content">
          <div className="modal-header justify-content-center">


          <a href={shop_website}>
          <img className="img-fluid border-radius-lg " id="img-width" src={vendeurs_image} alt={vendeurs}/>
          </a>
          
          
          </div>
          <div className="modal-body text-left">
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

          <strong>Réseau sociaux :</strong> <a href={facebook} target="_blank" rel="noreferrer">
          <img src="/img/custom/317727_facebook_social media_social_icon.png" style={{width: "8%", height: "8%", borderRadius: "30px"}}></img></a> 

          <a href={instagram} target="_blank" rel="noreferrer">
          <img style={{width: "8%", height: "8%", borderRadius: "1px"}} src="/img/custom/3225191_app_instagram_logo_media_popular_icon.png"></img></a>
             </div>
          <div className="modal-footer justify-content-end">
          
          <button type="button" className="btn bg-gradient-info" data-bs-dismiss="modal">Terminé</button>
          </div>
          </div>
          </div>
          </div>

          <div className="modal fade" id={cle + "-img"} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
          <div className="modal-dialog" id={cle + "-img"} >
          <div className="modal-content">
          <div className="modal-body">
          <div className="row justify-content-center">
          <img className="w-75" src={product_imagelinks} />
          </div>
          
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
            
          </div>
          
          
          </div>
          </div>
          </div>
          
          
          
          <div className="card-header h-50 p-0 m-2 position-relative z-index-0 justify-content-center row">
            <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"} className="d-block blur-shadow-image">
              <img src={product_imagelinks}  className="img-fluid shadow border-radius-lg w-100" style={{objectFit: "cover", aspectRatio: "1 / 1"}}/>
            </a>
          </div>
    
          <div className="card-body h-50 p-1 m-2">
            <a target="_blank" rel="noreferrer" href={product_links} className="text-bold overflow-title" style={{minHeight: "50px"}}>
            
            <small>{product_names}</small>
            </a>


            <div className="row justify-content-start text-start">
            <h1 className="text-gradient text-info mb-1 col-8 pe-0" id="state1" id="price-fontsize">{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
            
            </div>
            <p className="mb-1" style={{minHeight: "25px"}} id={stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{stocks}</strong></p>
            
            <div className="row justify-content-center">
            <div className="col-md-6 col-sm-6 col-6 ps-0">
            <div className="pull-left ">
            <div className="dropdown mb-1 ">


    <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={vendeurs_image} alt={vendeurs} className="img-fluid border-radius-lg " style={{maxheight: "20px"}}/>
    </a>

    <ul className="dropdown-menu z-index-1" aria-labelledby={cle}>
    
          

          <a className="dropdown-item text-bold" href={'tel:' + telephone1} target="_blank" rel="noreferrer">
          <li >
          <img src="/img/custom/phone-call.svg"/>  Appeler
          </li>
          </a>

          <a className="dropdown-item text-bold" href={localisation} target="_blank" rel="noreferrer">
          <li>
          <img src="/img/custom/map.svg"/> Localisation
          </li>
          </a>

          <a className="dropdown-item text-bold" href={shop_website} target="_blank" rel="noreferrer">
          <li>
          <img src="/img/custom/external-link.svg"/> Voir site
          </li>
          </a>

          <a className="dropdown-item text-bold" data-bs-toggle="modal" data-bs-target={"#" + cle}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>
    


            </div></div>
            <div className="row col-md-6 col-sm-6 col-6 ps-0">
          
            <div className="col-8 p-0" >
            <div  title="" data-bs-original-title={"Paiement: " + paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {paiement.toString().includes("CCP") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {paiement.toString().includes("Baridi") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    {paiement.toString().includes("paypal") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt="Paypal" src="/img/custom/1156727_finance_payment_paypal_icon.png"/> : ""}
    {paiement.toString().includes("visa") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt="visa" src="/img/custom/206684_visa_method_card_payment_icon.png"/> : ""}
    {paiement.toString().includes("CIB") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt="CIB" src="/img/custom/CIB.png"/> : ""}
    {paiement.toString().includes("DAHABIA") ? 
    <img className="shadow" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"50%"}} alt="dahabia" src="/img/custom/edahabia_gold-300x190.png"/> : ""}
    </div>
           
              
            </div>

            <div className="col-4 p-0" >
            { livraison != undefined ? livraison.toString().includes("UPS") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/UPS-Icon.png"/>: "" : ""}
    { livraison != undefined ? livraison.toString().includes("FEDEX") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/logo-FedEx-1.jpg"/>: "" : ""}
    { livraison != undefined ? livraison.toString().includes("isponible") || livraison.toString().includes("territoire national") || livraison.toString().includes("Toutes les wilaya")
     ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/shipped-icon-13.jpg"/>: "" : ""}
            
            
            
            
            </div>
            
            </div>
            <div className="row justify-content-center text-center" onClick={() => SetCanvas(`SignUp-form-${cle}`)}>
       

  
    
  
    <div  className="p-0 width-stars"><AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState} size={18} className={""}/>
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
        
          
          
</div>
</div>

)})}





</div></div>
</div>)
}












 