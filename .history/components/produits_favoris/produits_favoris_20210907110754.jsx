import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel';


function myArrow({ type, onClick, isEdge }) {
   
  const pointer = type === consts.PREV ? <button class="carousel-control-prev" type="button" ><i class="ni ni-bold-right"></i></button> :  <button class="carousel-control-next" type="button" ><i class="ni ni-bold-left"></i></button>
  return (
    <div onClick={onClick} disabled={isEdge}>
      {pointer}
    </div>
  )
}

const breakPoints = [
  { width: 1, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 576, itemsToShow: 3, itemsToScroll: 3, pagination: false },
  { width: 768, itemsToShow: 4, itemsToScroll: 4, pagination: false},
  { width: 992, itemsToShow: 6, itemsToScroll: 6, pagination: false },
]

export const Produits_favoris = ({ data }) => (
    
  <section class="py-3">
  
  <div class="mx-3">
  <div class="row">
  <div class="col-lg-6 text-left mb-5 mt-5">
  <h3 class="text-dark z-index-1 position-relative mx-3">Produits favoris</h3>
  <p class="text-dark opacity-8 mb-0 mx-3">Tendances du moment 🔥</p>
  </div>
  </div>
    
    
    <section>
<Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000} >

{data?.results.hits.items.slice(0,20).map((hit)=>(
  
    <div class="card card-plain card-blog mx-2">
      <div class="card-image border-radius-lg position-relative">
        <a href={hit.fields.product_links}>
          <img class="w-100 border-radius-lg move-on-hover shadow produits_favoris_image" src={hit.fields.product_imagelinks} />
        </a>
      </div>
      <div class="card-body px-0 pt-3 pb-0">
        
          <a  class="text-dark font-weight-bold" ><h1 class="small" id="title-style">{hit.fields.product_names}</h1></a>
        
        <h2 class="text-gradient text-info mb-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h2>
        <a href={hit.fields.product_links} class="text-info icon-move-right">Voir produit
          <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    
))}
</Carousel>
</section>


  </div>
</section>
  
  

  )



  export const Produits_recommandés = ({ data }) => (
            
    <section class="pt-sm-8 pb-10 position-relative bg-gradient-dark">
    <div class="position-absolute w-100 z-inde-1 top-0 mt-n1">
      <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>wave-down</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="#FFFFFF" fill-rule="nonzero">
            <g id="wave-down">
              <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="mx-3">
      <div class="row">
        <div class="col-lg-6 text-left mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative mx-3">Produits recommandés</h3>
          <p class="text-white opacity-8 mb-0 mx-3">Les meilleurs produits triés sur le volet pour vous !</p>
        </div>
      </div>
      <div class="mt-4">
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000} >

{data?.results.hits.items.slice(0,20).map((hit)=>(
  
    <div class="card card-plain card-blog mx-2">
      <div class="card-image border-radius-lg position-relative">
        <a href={hit.fields.product_links}>
          <img class="w-100 border-radius-lg move-on-hover produits_favoris_image"  alt={G:\Boulot_G\Searchkit 30072021\searchkit-next\examples\next\public\img\custom} src={hit.fields.product_imagelinks} />
        </a>
      </div>
      <div class="card-body px-0 pt-3 pb-0">
        
          <a  class="font-weight-bold" ><h1 class="small text-white" id="title-style">{hit.fields.product_names}</h1></a>
        
        <h2 class="text-gradient text-info mb-0" id="state1" id="price-fontsize">{hit.fields.product_prices.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DA</h2>
        <a href={hit.fields.product_links} class="text-info icon-move-right">Voir produit
          <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    
    
))}

</Carousel>

</div> 
</div>   
    
    <div class="position-absolute w-100 bottom-0 mn-n1">
      <svg width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>wave-up</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="wave-up" transform="translate(0.000000, -5.000000)">
              <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" fill="#f8f9fa"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </section>
    
    
  
    )




  



