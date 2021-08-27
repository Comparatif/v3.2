import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import Carousel, { consts } from 'react-elastic-carousel';


const RefinementFacet = ({ facet }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 576, itemsToShow: 3, itemsToScroll: 3, pagination: false },
    { width: 768, itemsToShow: 4, itemsToScroll: 4, pagination: false},
    { width: 992, itemsToShow: 6, itemsToScroll: 6, pagination: false },
  ]
  const api = useSearchkit();
  return (
    <div class="dropdown w-auto sub-filters me-2">
    
    <button key={facet.identifier} class="btn bg-gradient-info dropdown-toggle mb-0" type="button" id={facet.label} data-bs-toggle="dropdown" aria-expanded="false">
    {facet.label}
  </button>
  
  
  <ul  key={facet.identifier} class="dropdown-menu" aria-labelledby={facet.label}>
  <div class="row justify-content-center text-start">
  {facet.entries.map((entry) => {
    const isSelected = api.isFilterSelected({
      identifier: facet.identifier,
      value: entry.label,
    });
    return (
      <li
        className={isSelected ? 'selected' : ''}
        key={entry.label}
        onClick={() => {
          api.toggleFilter({ identifier: facet.identifier, value: entry.label });
          api.search();
        }}>
        {entry.label} - {entry.count}
      </li>
    );
  })}

  
  </div>
  </ul>
      
    </div>
  );
};

export const Facets = ({ data }) => {
  return (
    <>
      {data.facets.map((facet) => {
        return <RefinementFacet facet={facet} />
      })}

      </>
    
  )
}

<Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000} >

{data?.results.hits.items.slice(0,20).map((hit)=>(
  
    <div class="card card-plain card-blog mx-2">
      <div class="card-image border-radius-lg position-relative">
        <a href="javascript:;">
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