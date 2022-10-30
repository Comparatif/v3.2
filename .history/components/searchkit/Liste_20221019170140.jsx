import React , { useEffect, useState, useCallback, useContext } from 'react'
import {Auth} from "../firebase/Auth";
import {AverageStars} from "../firebase/Stars"
import {UserConnected} from "../firebase/UserConnected";
import styles from './stars.module.css'
import useWindowDimensions from '../window/window';

import { showShop, enableOrder, legendaires, epiques, rares } from '../../lib/Options'
import { orderStatus, UserContext } from '../UserContext'
import firebase from '../firebase/firebase/clientApp'
import useSWR from 'swr'
import Image from 'next/future/image'

const db = firebase.firestore();

export const Listes = ({ data, boutique_infos, votesLoading, user, datetime, CanvasState, SetCanvas, isOn, toggleIsOn }) => {

  const {OrderContext, SetOrderContext} = useContext(UserContext)
  const imgWidth = {maxHeight: '40px'}
  const imgWidthBlur = {maxHeight: '40px', filter: "blur(1rem)", width: "60%"}
  const productCountryCss = {borderRadius: "1px", boxShadow: "1px 1px 2px black"}
  const w75 = {width: "75%", height:"auto"}

  

  
  
  //const background_abonnement_test= {legendaires : ["ITEC-ALG", "fractal"], epiques:["assli"], rares:["twins-multimedia"]}
//SetOrderContext({boutique:vendeurs, product_name: product_names})

 return(
   
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

    const product_names_id = product_names.replaceAll(" ", "_").replaceAll("/", "_")
    const vendeurs_id= vendeurs.replaceAll(' ', '_').replaceAll("/", "_")
    const orderId = product_names_id + "_" + vendeurs_id + "_" + user?.email
    /*const doesOrderExist = async () => {
      
      const Order = await db.collection("Orders").doc(product_names_id + "_" + vendeurs_id + "_" + user.uid)
      
      Order.get().then((doc) => {if (doc.exists) 
        {SetOrderContext({...OrderContext, isOrderTaken: true, hit: hit, boutique:vendeurs, product_name: product_names})} 
        else {SetOrderContext({...OrderContext, isOrderTaken: false, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names})}
      }).catch((err)=> console.log(err)) 

    }*/
    const doesOrderExist = async () => {
      user ? 
    
      fetch(`/api/verify-existance?searchString=${orderId}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }}).then((res) => res.json() )
      .then((data) => {
        console.log("db: " + data.orderId)
        console.log("local: " + orderId)
        data.orderId == orderId?
        SetOrderContext({...OrderContext, isOrderAlreadyTaken: true, hit: hit, boutique:vendeurs, product_name: product_names})
        :
        SetOrderContext({...OrderContext, isOrderAlreadyTaken:false, isOrderTaken: false, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names})
      }).catch((err)=> console.log(err),SetOrderContext({...OrderContext, isOrderAlreadyTaken:false, isOrderTaken: false, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names}))
    
      : SetOrderContext({...OrderContext, isOrderAlreadyTaken:false, isOrderTaken: false, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names})
    } 

   

        



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
    
    /*const product_names_id = product_names.replaceAll(" ", "_").replaceAll("/", "_")
    const vendeurs_id= vendeurs.replaceAll(' ', '_').replaceAll("/", "_")
    const doesOrderExist = async () => {

      const Order = await db.collection("Orders").doc(product_names_id + "_" + vendeurs_id + "_" + user.uid)
       
      try {Order.get()
         .then((doc) => {
         if (doc.exists) {
           console.log("j'existe")
       } else {
        console.log("comme si je n'existais pas..")
       }
     })} catch (err) {
       console.log(err);}
   }*/

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
  <div class="modal fade" id={cle} tabindex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
          <div class="modal-dialog" id={cle} >
          <div class="modal-content">
          <div class="modal-header justify-content-center">


          <a href={shop_website}>
          <Image class="img-fluid border-radius-lg " style={imgWidth}  width= {'100%'} height={'auto'} src={vendeurs_image} alt={vendeurs}/>
          </a>
          
          
          </div>
          <div class="modal-body text-left">
          <strong>Pays :</strong>  {product_country} <Image width= {"8%"} height= {"8%"} src={product_country == "Algérie" ? "/img/custom/2634506_algeria_ensign_flag_nation_icon.png" : "" } style={productCountryCss}/><br/>
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
          <Image src="/img/custom/317727_facebook_social media_social_icon.png" width= {"8%"} height= {"8%"} style={{borderRadius: "30px"}}/></a> 

          <a href={instagram} target="_blank">
          <Image width= {"8%"} height= {"8%"} style={{borderRadius: "1px"}} src="/img/custom/3225191_app_instagram_logo_media_popular_icon.png"/></a>
          
          
          
          
          
          
          
          
          
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
          <Image width= {"75%"} src={product_imagelinks} />
          </div>
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
            
          </div>
          
          
          </div>
          </div>
          </div>
  
  
 
  
          
  
  
          
  <div class="container card shadow-lg" style={{backgroundColor : background_abonnement}}>
  
  
  <div class="row justify-content-center text-start" id="container-margin-padding">
  
  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
  
  <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
    <h2 class="mt-1 mx-1 mb-0 title-fontsize-h2" id="title-style" style={{color: title_abonnement}}>{product_names} - {villes1}</h2> 
    </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 pe-1" >
      <h3 class={partenaire ? "ms-1 mb-0 title-fontsize-h1" : "text-gradient text-info ms-1 mb-0 title-fontsize-h1"} style={partenaire ? {color : "#f0db44"}: undefined} id="price-fontsize">{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h3>
      <p class="ms-1" id={stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{stocks}</strong></p>
    </div>

    
    <div class="col-lg-2 col-md-2 col-sm-2 col-2 mb-1 px-1 px-md-4 px-lg-4 " >

    <div style={{maxHeight: "50%"}} title="" data-bs-original-title={"Paiement: " + paiement}  data-bs-toggle="tooltip" data-bs-placement="top">
    {paiement?.toString().includes("CCP") ? 
    <Image width= {"auto"} height= {"auto"}  style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt= "CCP" src="/img/custom/ccp.png"/> : ""}
    {paiement?.toString().includes("aridi") ? 
    <Image  width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="Baridimob" src="/img/custom/baridimob.png"/> : ""}
    {paiement?.toString().includes("paypal") ? 
    <Image  width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="Paypal" src="/img/custom/1156727_finance_payment_paypal_icon.png"/> : ""}
    {paiement?.toString().includes("visa") ? 
    <Image  width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="visa" src="/img/custom/206684_visa_method_card_payment_icon.png"/> : ""}
    {paiement?.toString().includes("CIB") ? 
    <Image  width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="CIB" src="/img/custom/CIB.png"/> : ""}
    {paiement?.toString().includes("DAHABIA") ? 
    <Image  width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"33%"}} alt="dahabia" src="/img/custom/edahabia_gold-300x190.png"/> : ""}
    </div>
    
      
    </div>

    <div class="col-lg-1 col-md-1 col-sm-1 col-1 mb-1 ps-1 px-1 px-md-2 px-lg-2" >
    
    { livraison != undefined ? livraison?.toString().includes("UPS") ? <Image title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/UPS-Icon.png"/>: "" : ""}
    { livraison != undefined ? livraison?.toString().includes("FEDEX") ? <Image title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/logo-FedEx-1.jpg"/>: "" : ""}
    { livraison != undefined ? livraison?.toString().includes("isponible") || livraison?.toString().includes("territoire national") || livraison?.toString().includes("Toutes les wilaya")
     ? <Image title="" data-bs-original-title={"Livraison: " + livraison} data-bs-toggle="tooltip" data-bs-placement="top" class="col-lg-12 col-md-12 col-sm-12 col-12" width= {"auto"} height= {"auto"} style={{objectFit: "scale-down", aspectRatio: "1 / 1", maxWidth:"75%"}} alt= {"Livraison -" + livraison} src="/img/custom/shipped-icon-13.jpg"/>: "" : ""}
    

    </div>

    
    <div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 px-1 px-md-4 px-lg-4"  >
    {showShop ? <>
    
    <div class="row justify-content-center text-center">
    <div class="dropdown col-lg-8">


    <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
    <Image style={imgWidth} width= {'100%'} src={vendeurs_image} alt={vendeurs} class="img-fluid border-radius-lg"/>
    </a>

    <ul class="dropdown-menu z-index-1"  aria-labelledby={cle}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + telephone1} >
          <li >
          <Image width= {"auto"} height= {"auto"}  src="/img/custom/phone-call.svg"/>  Appeler
          </li>
          </a>

          <a class="dropdown-item text-bold" href={localisation} target="_blank">
          <li>
          <Image width= {"auto"} height= {"auto"} src="/img/custom/map.svg"/> Localisation
          </li>
          </a>

          <a class="dropdown-item text-bold" href={shop_website} target="_blank">
          <li>
          <Image width= {"auto"} height= {"auto"} src="/img/custom/external-link.svg"/> Voir site
          </li>
          </a>

          <a class="dropdown-item text-bold" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle}>
          <li>
          <Image width= {"auto"} height= {"auto"} src="/img/custom/info.svg"/> Détails
          </li>
          </a>     
  </ul>

  
  
  
    </div>

    <div class="row justify-content-center text-center" onClick={() => SetCanvas(`SignUp-form-${cle}`)}>
    <div class="row justify-content-center text-center p-0" >
    <div  class="p-0 width-stars"><AverageStars votesLoading={votesLoading}
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

    
    </>: 
    <div class="row justify-content-center text-center">
    <div class="dropdown col-lg-8">
    
    <a data-bs-toggle="Abonnez-vous" id={cle + "drop"} style={{cursor: "pointer"}}>
    <Image style={imgWidthBlur}  width= {"auto"} height= {"auto"} src="/blur/4.jpg"  class="img-fluid border-radius-lg" />
    </a>
  
    </div>
    </div>
  }
    </div>

    

{enableOrder ? 
<div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 text-end ps-lg-1 pe-lg-3 ps-md-1 pe-md-3 ps-sm-1 pe-sm-3 ps-1">
  
<div  class="col-lg-12 col-md-12 col-sm-12 col-12 mb-1 text-end ps-lg-1 pe-lg-1 ps-md-1 pe-md-1 ps-sm-1 pe-sm-1 ps-1">
    
  <a onClick={doesOrderExist} data-bs-toggle="modal" data-bs-target="#modal-form-order"><button type="button" class="btn bg-gradient-success mb-0 position-relative z-index-0 button-width" id="btn-fontsize-product" data-animation="true">Acheter</button></a>
  
</div>
<div  class="col-lg-12 col-md-12 col-sm-12 col-12 mb-1 text-end ps-lg-1 pe-lg-1 ps-md-1 pe-md-1 ps-sm-1 pe-sm-1 ps-1" >
    
          <a href={product_links} 
          target="_blank"><button type="button" class="btn bg-gradient-info mb-0 position-relative z-index-0 button-width" id="btn-fontsize-product" data-animation="true">Voir l'offre</button></a>
          
    
    </div>

    </div>

: 

<div class="col-lg-3 col-md-3 col-sm-3 col-3 mb-1 text-end ps-lg-1 pe-lg-3 ps-md-1 pe-md-3 ps-sm-1 pe-sm-3 ps-1" >
    
          <a href={product_links} 
          target="_blank"><button type="button" class="btn bg-gradient-info mb-0 position-relative z-index-0 button-width" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
    </div>

}

  </div>
  </div>
</section>

)}
)}
</div>)

}



 