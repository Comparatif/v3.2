import React from 'react'
import {Apropos} from './stuff.jsx'
import {
  FacetsList
} from '@searchkit/elastic-ui'

const prix= "Meilleur prix"
const Facets = FacetsList([])

 export const HitsList = ({ data }) => (
   
  
<div className="container" id="results">
<div className="row justify-content-center text-start" >
<div className="col-md-5 mb-0" >

{data?.searchkit2.hits.items.slice(0,1).map((hit)=>(

    
  <section id="fiche-produit">
  
  <div className="px-sm-0">
    <div className="row align-items-center">
      <div className="col-lg-12 mt-2 ">    
      <div className="card card-blog card-plain">
                <div className="position-relative">
                <a className="text-center">
                    <h6>
                    {hit.fields.product_names}
                    </h6>
                  </a>
                  <a className="row justify-content-center blur-shadow-image">
                    <img src={hit.fields.product_imagelinks} alt={hit.fields.product_names} className="img-fluid shadow border-radius-lg w-50" />
                  </a>
                <div className="colored-shadow" id="card-url"></div></div>
                <div className="card-body px-1 pt-3 pb-0">
                  <p className="text-gradient text-primary mb-2 text-sm row justify-content-center">Prix le moins cher : {hit.fields.product_prices} DA</p>
                  <button onClick={onLinkClick} type="button" className="btn bg-gradient-info btn-lg w-100">Comparer {data?.searchkit2.summary.total} offres</button>
                  <p className="small mb-0">
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
 


<div className="col-md-7 mb-1" id="results1">
<section id="info-produit">
  
                

<div className="container">
<div className="row justify-content-center text-start">
<div className="dropdown col-md-6 col-sm-6 col-6 mt-0 text-center">
  <button className="btn bg-gradient-info dropdown-toggle mb-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Filtres
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <div className="row justify-content-center text-start">
  <Facets data={data?.searchkit2} />
  </div>
  </ul>
</div>
{<Apropos/>} 

  
  
  </div>
</div>


</section>





 <div className="results1">
{data?.searchkit2.hits.items.map((hit) => (


  

  <section id="info-produit1">
  
  
  
  <div key={hit.id} className="container card shadow-lg ">
  <div className="row justify-content-center text-start" id="container-margin-padding">
  <div className="col-md-12 col-sm-12 col-12">
    <h6 className="my-1 mx-1" id="title-style">{hit.fields.product_names}</h6>
    </div>
    <div className="col-md-4 col-sm-4 col-4 mb-1 pe-1" >
   
     
    {({i})=> {if (i===0) {prix}}}
      <h1 className="text-gradient text-info ms-1 mb-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
      <p className="ms-1" id={hit.fields.stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{hit.fields.stocks}</strong></p>
    </div>
    <div className="col-md-3 col-sm-3 col-4 mb-1" >
    <img id="img-width" src={hit.fields.vendeurs_image} alt={hit.fields.vendeurs} className="img-fluid border-radius-lg"/>
    <a className="row justify-content-center mb-0" id="num-font-size" href={'tel:' + hit.fields.telephone1}>{hit.fields.telephone1}</a>
    </div>
    
    <div className="col-md-4 col-sm-4 col-4 mb-1 text-end ps-1 pe-3" >
    
          <a href={hit.fields.product_links} 
        
          
          
          
          
          target="_blank" rel="noreferrer"><button type="button" className="btn bg-gradient-info mb-0 position-relative z-index-1" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
    </div>
  </div>
  </div>
  
</section>


))}
</div>
</div>
</div>
</div>
 )



 