import React , { useEffect } from 'react'
import {Apropos, Maj} from './stuff.jsx'
import {Facets} from '../facet/facet'








export const HitsList = ({ data }) => (
   
   
  
<div class="container" id="results">
<div class="row justify-content-center text-start" >
<div class="col-md-5 mb-0 p-0" >

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
 


<div class="col-md-7 mb-1 p-0" id="results1">
<section id="info-produit">
  
                

<div class="container">
<div class="row justify-content-center text-start">

<div class='col-md-6 col-sm-6 col-6 mt-0 text-center'>
  <Facets data={data.results}/>
  </div>

 


<div class="col-md-6 col-sm-6 col-6 mt-0 text-center">

{<Apropos/>} 

</div>

  
  
  </div>
</div>


</section>





 <div class="results1">
{data?.results.hits.items.map((hit) => (


  

  <section id="info-produit1">
  
  
  
  <div key={hit.id} class="container card shadow-lg ">
  <div class="row justify-content-center text-start" id="container-margin-padding">
  <div class="col-md-12 col-sm-12 col-12">
    <h6 class="my-1 mx-1" id="title-style">{hit.fields.product_names}</h6>
    </div>
    <div class="col-md-4 col-sm-4 col-4 mb-1 pe-1" >
   
     
    
      <h1 class="text-gradient text-info ms-1 mb-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h1>
      <p class="ms-1" id={hit.fields.stocks === 'Rupture de stock' ? "Rupture_de_stock" : "En_stock" }><strong>{hit.fields.stocks}</strong></p>
    </div>





    <div class="col-md-3 col-sm-3 col-4 mb-1" >
    <div class="dropdown">


    <a data-bs-toggle="dropdown" id={hit.id}>
    <img id="img-width" src={hit.fields.vendeurs_image} alt={hit.fields.vendeurs} class="img-fluid border-radius-lg"/>
    </a>

    <ul class="dropdown-menu no-overflow" aria-labelledby={hit.id}>
    

      <li class="sub-filters">
          <a class="dropdown-item bg-gradient-info" href="#">
          Détails
          </a>
      
          <a class="dropdown-item bg-gradient-success" href="#">
          Appeler
          </a>
          </li>

          <li class="sub-filters">
      
          <a class="dropdown-item bg-gradient-warning" href="#">
          <button type="button" class="btn bg-gradient-warning">Localisation
          </a>

          <a class="dropdown-item " href="#">
          <button type="button" class="btn bg-gradient-default">Voir site</button>
          </a>

          </li>
         
      
  </ul>


    <a class="row justify-content-center mb-0" id="num-font-size" href={'tel:' + hit.fields.telephone1}>{hit.fields.telephone1}</a>


    </div>
    </div>






    
    <div class="col-md-4 col-sm-4 col-4 mb-1 text-end ps-1 pe-3" >
    
          <a href={hit.fields.product_links} 
        
          
          
          
          
          target="_blank"><button type="button" class="btn bg-gradient-info mb-0 position-relative z-index-1" id="btn-fontsize" data-animation="true">Voir l'offre</button></a>
          
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



 