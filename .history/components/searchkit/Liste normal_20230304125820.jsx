import React , { useEffect, useState, useCallback } from 'react'
import {Auth} from "../firebase/Auth";
import {AverageStars} from "../firebase/Stars"
import {UserConnected} from "../firebase/UserConnected";
import styles from './stars.module.css'
import useWindowDimensions from '../window/window';



export const Listes = ({ data, boutique_infos, votesLoading, user, datetime, CanvasState, SetCanvas, isOn, toggleIsOn }) => {

  
  

  //const background_abonnement_test= {legendaires : ["ITEC-ALG", "fractal"], epiques:["assli"], rares:["twins-multimedia"]}
  const legendaires = ["ITEC-ALG", "fractal"]
  const epiques  =["El Assli Hi-Tech"]
  const rares = ["twins-multimedia"]

 return(<>
   
  <div className="results1">
 <section className="top-0-section" id="info-produit1">
<div className="container card shadow-lg ">
<div className="row justify-content-start" >
<div className="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 mt-1 px-1 text-small text-center" ><h6 className="m-0 titles-size">Prix & Stock</h6></div>
<div className="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-1 px-md-2 px-lg-2 text-start " ><h6 className="m-0 titles-size">Paiement</h6></div>
<div className="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-2 px-md-2 px-lg-1 text-start" ><h6 className="m-0 titles-size">Livraison</h6></div>
<div className="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 mt-1 px-0 px-sm-0 px-md-0 px-lg-0 text-start"  ><h6 className="m-0 titles-size">Marchand</h6></div>

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
    const description1 = hit.fields.description1
    const brand_name = hit.fields.brand_name
    const description2 = hit.fields.description2
    const prod_description = hit.fields.prod_description
    const prod_specs_big_title = hit.fields.prod_specs_big_title
    const total = hit.fields.total

    const background_abonnement = 
    legendaires.includes(vendeurs) ? "#26253d" : 
    epiques.includes(vendeurs) ? "#26253d" : 
    rares.includes(vendeurs) ? "#26253d" : "container card shadow-lg"

    const title_abonnement = legendaires.includes(vendeurs) ? "#ff8000" : 
    epiques.includes(vendeurs) ? "#a335ee" : 
    rares.includes(vendeurs) ? "#0070dd" : "title-style"

    const price_abonnement = legendaires.includes(vendeurs) ? "#ff8000" : 
    epiques.includes(vendeurs) ? "#a335ee" : 
    rares.includes(vendeurs) ? "#0070dd" : "text-gradient text-info ms-1 mb-0 title-fontsize-h1"

    
    
    const partenaire = legendaires.includes(vendeurs) || epiques.includes(vendeurs) || rares.includes(vendeurs) ? true : false



   

  
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


  


  
  return(
  


  

  <section key={cle} id="info-produit1">
  <div className="modal fade" id={cle} tabIndex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
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
          

          <strong>E-mail :</strong> <a href={"mailto:" + email + "?subject = Feedback = Message"} style={{wordWrap: "break-word"}} >{email}</a> <br/>
          
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

          <div className="modal fade" id={cle + "-img"} tabIndex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
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
  
  
 
  
          
  
  
          
  <div className="container card shadow-lg" style={{backgroundColor : background_abonnement}}>
  
  
  <div className="row justify-content-center text-start" id="container-margin-padding">
  
  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
  
  <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
    <h2 className="mt-1 mx-1 mb-0 title-fontsize-h2" id="title-style" style={{color: title_abonnement}}>{product_names} - {villes1}</h2> 
    </a>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 pe-1" >
      <h3 className={partenaire ? "ms-1 mb-0 title-fontsize-h1" : "text-gradient text-info ms-1 mb-0 title-fontsize-h1"} style={partenaire ? {color : "#f0db44"}: undefined} id="price-fontsize">{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h3>
      <p className="ms-1" id={stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{stocks}</strong></p>
    </div>

    
    <div className="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 px-1 px-md-4 px-lg-4 " >

    <div style={{maxHeight: "50%"}} title="" data-bs-original-title={"Paiement: " + paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {paiement?.toString().includes("CCP") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {paiement?.toString().includes("aridi") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    {paiement?.toString().includes("paypal") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="Paypal" src="/img/custom/1156727_finance_payment_paypal_icon.png"/> : ""}
    {paiement?.toString().includes("visa") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="visa" src="/img/custom/206684_visa_method_card_payment_icon.png"/> : ""}
    {paiement?.toString().includes("CIB") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="CIB" src="/img/custom/CIB.png"/> : ""}
    {paiement?.toString().includes("DAHABIA") ? 
    <img  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="dahabia" src="/img/custom/edahabia_gold-300x190.png"/> : ""}
    </div>
    
      
    </div>

    <div className="col-lg-1 col-md-1 col-sm-1 col-1 mb-1 ps-1 px-1 px-md-2 px-lg-2" >
    
    { livraison != undefined ? livraison?.toString().includes("UPS") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/UPS-Icon.png"/>: "" : ""}
    { livraison != undefined ? livraison?.toString().includes("FEDEX") ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/logo-FedEx-1.jpg"/>: "" : ""}
    { livraison != undefined ? livraison?.toString().includes("isponible") || livraison?.toString().includes("territoire national") || livraison?.toString().includes("Toutes les wilaya")
     ? <img title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" className="col-lg-12 col-md-12 col-sm-12 col-12" style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/shipped-icon-13.png"/>: "" : ""}
    

    

    </div>





    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 px-1 px-md-4 px-lg-4"  >
    <div className="row justify-content-center text-center">
    <div className="dropdown col-lg-8">


    <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
    <img id="img-width" src={vendeurs_image} alt={vendeurs} className="img-fluid border-radius-lg" />
    </a>

    <ul className="dropdown-menu z-index-1"  aria-labelledby={cle}>
    
          

          <a className="dropdown-item text-bold" href={'tel:' + telephone1} >
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

          <a className="dropdown-item text-bold" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle}>
          <li>
          <img src="/img/custom/info.svg"/> Détails
          </li>
          </a>

          
          
         
          
         
      
  </ul>


    


    </div>

    <div className="row justify-content-center text-center" onClick={() => SetCanvas(`SignUp-form-${cle}`)}>
       

  
    <div className="row justify-content-center text-center p-0" >
  
    <div  className="p-0 width-stars"><AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState} className={""}/>
    </div>
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






    
    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 text-end ps-lg-1 pe-lg-3 ps-md-1 pe-md-3 ps-sm-1 pe-sm-3 ps-1" >
    
          <a href={product_links} 
          target="_blank" rel="noreferrer"><button type="button" className="btn bg-gradient-info mb-0 position-relative z-index-0 button-width" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
    </div>
  </div>
  
  </div>
  
    


 

  
  
 
  
</section>


)}



)}
</div>)






}



 