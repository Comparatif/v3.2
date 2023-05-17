import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'

export const Resultats =  ({setData, data, isSelected, setSelect, id}) =>



data?.results.hits.items.map((hit, col) => {

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
      
        <td 

          key={cle} 
          className={isSelected.row === id && isSelected.col === col ? "results_ligne border-radius-xl full-shadow-box m-1 bg-gradient-dark"  :"results_ligne border-radius-xl full-shadow-box m-1" }
         
        
          >
            
        <div className="modal fade" id={cle} tabIndex="-1" aria-labelledby={cle + "Label"} aria-hidden="true">
      <div className="modal-dialog" id={cle} >
      <div className="modal-content">
      <div className="modal-header justify-content-center">
  
  
      <a href={shop_website}>
      <img  className="img-fluid border-radius-lg img_white_background" id="img-width" src={vendeurs_image} onError={(e) => { e.target.src = '/img/custom/broken-image.png' }} alt=""/>
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
  
      
      <div className="dropdown mb-1 ">
  
  
  <a data-bs-toggle="dropdown" id={cle + "drop"} style={{cursor: "pointer"}}>
  <img id="img-width" src={vendeurs_image} onError={(e) => { e.target.src = '/img/custom/broken-image.png' }} alt="" className="img-fluid border-radius-2xl img_white_background " style={{maxheight: "20px", objectFit: "scale-down", aspectRatio: "20/9"}}/>
  </a>
  
  <ul className="dropdown-menu z-index-3" aria-labelledby={cle}>
  
  
  
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
  
  
  
      
      <div style={{cursor: "pointer"}} onClick={()=> {setSelect({row: id, col: col}); setData({data: data})}} className="row justify-content-center text-center">
      <h3 className={isSelected.row === id && isSelected.col === col ? "mb-1 col-8 p-0 z-index-1 text-light text-bold" : "text-gradient text-info mb-1 col-8 p-0 z-index-1"} id="price-fontsize-ligne" ><small>{product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</small><small id="price-fontsize-ligne-currency"> DA</small></h3>
      <div className= "testrow justify-content-center">
      <i className="fas fa-credit-card mx-1" style={{color: paiement?.toString() === "" ? "" : "green" }}
      data-bs-toggle="tooltip" data-bs-placement="top" title={paiement} data-container="body" data-animation="true"></i>
      <i className="fas fa-boxes mx-1" style={{color: stocks === 'Rupture de stock' ? "red" : stocks?.includes("Stock") ? "green" : stocks?.includes("command") ? "orange" : "" }} 
      data-bs-toggle="tooltip" data-bs-placement="top" title={stocks} data-container="body" data-animation="true"></i>
      <i className="fas fa-truck mx-1" style={{color: livraison?.toString() === '' ? "" : "green" }}
      data-bs-toggle="tooltip" data-bs-placement="top" title={livraison?.toString()} data-container="body" data-animation="true"></i>
      </div>
      

      </div>
      
        </td>
    )})