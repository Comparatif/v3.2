import useToggle from '../useful/toggle.jsx';
import AutoCompleteText_ligne from '../autocomplete/AutoCompleteText_ligne.js';
import { useSearchkit, useSearchkitQueryValue } from '@searchkit/client'
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import liste from '../autocomplete/liste.js'
import { useReactiveVar } from '@apollo/client'
import { useEffect } from 'react';
import router from 'next/router'

export const Ligne = ({data}) => {
  
    const IndexChange = useReactiveVar(SearchkitIndex)
    const [isOn, toggleIsOn] = useToggle();
    const [query, setQuery] = useSearchkitQueryValue()
    const api = useSearchkit()
    useEffect(()=>{
      if(!router.isReady) return;
      api.setPage({size: 50})
      api.search()
    }, [router.isReady]); 

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
  
    return(
  
          <tr>
          {data?.results?.hits?.items.slice(0,1).map((hit)=>
            {
              const product_names = hit.fields.product_names
              const product_imagelinks = hit.fields.product_imagelinks
              const cle = hit.id.replace(/[0-9]/, 'Z')
              return(
            
              
                <td class="col-lg-2 col-xl-3 col-md-3 col-sm-3 col-3 mb-2 px-1" >
                
                <div class="d-flex px-2 py-1">
                {isOn ?
                <AutoCompleteText_ligne api={api} toggleIsOn={toggleIsOn} setQuery={setQuery} items={liste} index={IndexChange}/>
                
                
    
                :
                <>
                <div>
                <a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
                  <img src={product_imagelinks} class="avatar avatar-sm me-3"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center">
                <a style={{cursor : "pointer"}} onClick={()=> toggleIsOn()} >
                  <h6 class="mb-0 text-xs">{product_names}</h6>
                  <p class="text-xs text-secondary mb-0">{!names_bdd ? "" : description1}</p>
                  </a>
                  </div>
                  </>}
                  </div></td>
            
              )
          
          
              })}
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
        return(
            <td key={cle} class="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-1 mb-2 px-1">
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
  


          
          <div class="row justify-content-center text-center">
          <h3 class="text-gradient text-info mb-1 col-8 p-0" id="price-fontsize-ligne"><small>{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</small></h3>
          
          </div>
            </td>
        )})}
          </tr>
  
  )}
  
  