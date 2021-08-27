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

<div class='col-md-9 col-sm-9 col-8 mt-0 text-center'>
  <Facets data={data.results}/>
  </div>

 


<div class="col-md-3 col-sm-3 col-4 mt-0 text-center">

{<Apropos/>} 

</div>

  
  
  </div>
</div>


</section>





 
</div>
</div>
</div>
 )



 