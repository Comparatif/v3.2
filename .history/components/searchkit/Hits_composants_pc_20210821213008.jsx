import React , { useEffect } from 'react'
import {Apropos, Maj, Infoboutique} from './stuff.jsx'
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

    <ul class="dropdown-menu" aria-labelledby={hit.id}>
    
          

          <a class="dropdown-item text-bold" href={'tel:' + hit.fields.telephone1} target="_blank">
          <li >
          <img src="/img/custom/phone-call.svg"/>  Appeler
          </li>
          </a>

          <a class="dropdown-item text-bold" href={hit.fields.localisation} target="_blank">
          <li>
          <img src="/img/custom/map.svg"/> Localisation
          </li>
          </a>

          <a class="dropdown-item text-bold" href={hit.fields.shop_website} target="_blank">
          <li>
          <img src="/img/custom/external-link.svg"/> Voir site
          </li>
          </a>

          
          
          <button type="button" class="btn bg-gradient-info mb-0" data-bs-toggle="modal" data-bs-target="#exampleModal">A propos</button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" id="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h6 class="modal-title" id="exampleModalLabel">Le comparateur de prix qu'il manquait a l'Algérie..</h6>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body text-left">
<p class= "small">Le but de ce site est de vous aider a trouver le prix <strong class="text-secondary">le moins cher et gagner du temps !</strong></p>
              
          <h6>Pour les consommateurs :</h6>
        <p class= "small">1- Vous faire gagner du temps car le site regroupera a terme énormement d'articles donc vous pourrez<br/> 
        comparer les prix donc plus besoin de chercher tout les magasins pour trouver le moins cher.<br/>
         2- Vous faire économiser de l'argent en trouvant l'article qui vous convient au prix le moins cher. </p>

         <h6>Pour les boutiques :</h6>
        <p class= "small">1- Avoir plus de visibilité car notre site référence vos articles et redirige vers votre boutiques. <br/>
         2- Possibilité d'avoir une vue d'ensemble sur les prix du marché. </p>

        <p class= "small"> Enfin, cette initiative a pour but d'aider a la fois les consommateurs et les vendeurs. 
            En apportant plus de <br/>transparence et de clarté des deux côtés le marché ne peut que mieux se porter 
            et tout le monde y trouve son compte ! </p>



            <h6 class="text-success"> Et c'est totalement gratuit ! </h6>



        
            <p class= "small"> Idées, suggestions, remarques, feedback négatif, bugs... <br/>
            Tout est bon pour nous aider a nous améliorer : <strong>comparatif.algerie@gmail.com</strong> <br/>
            Aussi, n'hésitez pas a nous contacter si vous souhaitez rejoindre l'équipe !</p>



            <h6 class="text-danger"> Remarques: </h6> 
            <p class= "small">1- Ce site ne vend et n'achete aucun article.<br/>
            2- Nous utilisons des informations publiques et disponibles pour tout le monde sur les siteweb des marchands.<br/> 
            Nous nous contentons de les regrouper pour informer les consommateurs<br/>
            3- Nous garantissons notre impartialité et bonne foi, le comparatif de prix est <strong class="text-warning">COMPLETEMENT NEUTRE.</strong><br/>
            4- Nous faisons notre maximum pour garder le site a jour et fournir une information <strong class="text-success">FIABLE</strong> a tout le monde.<br/>
            5- Si le prix d'un marchand ne correspond pas a celui affiché sur notre site veuillez nous le signaler ici : <strong>comparatif.algerie@gmail.com</strong><br/>
            6- Ce site est en version bêta donc il est possibile que vous rencontriez certains <strong class="text-danger">bugs</strong>.<br/>
            7- Ce site utilise le nom des marques et le logo des marques dans le seul but d'informer conformément a ce qu'autorise la loi (<a className="law" href='https://www.droit-afrique.com/upload/doc/algerie/Algerie-Ordonnance-2003-06-marques.pdf' target="_blank">Voir article</a>).
            </p>
            </div>
<div class="modal-footer justify-content-end">

<button type="button" class="btn bg-gradient-info" data-bs-dismiss="modal">J'ai compris</button>
</div>
</div>
</div>
</div>
         
      
  </ul>


    


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



 