import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import Carousel, { consts } from 'react-elastic-carousel';


const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
    <hr class="horizontal dark"/>
      <h4 class="text-gradient text-info ">{facet.label}</h4>
      <div class="filters justify-content-between">
        {facet.entries.map((entry) => {
          const isSelected = api.isFilterSelected({
            identifier: facet.identifier,
            value: entry.label,
          });
          return (
            <>
            <div
              class={isSelected ? ' text-bold no-overflow' : 'no-overflow'}
              
              key={entry.label}
              onClick={() => {
                api.toggleFilter({ identifier: facet.identifier, value: entry.label });
                api.search();
              }}>
              <span>{entry.label} </span> <span class={isSelected ? 'btn bg-gradient-primary p-1 mb-0' : 'btn bg-gradient-secondary p-1 mb-0'}>{entry.count}</span>
            </span>
            
            </>
          );
        })}
      </div>

      
    </div>
  );
};








export const Facets = ({ data }) => {
  
  return (
    <>
    <button class="btn bg-gradient-info mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtres</button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header pb-0">
    <h3 class="offcanvas-title text-gradient text-info" id="offcanvasScrollingLabel">Réglages</h3>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-start">
  <div class="container">
  
  {data.facets.map((facet) => {
    return <RefinementFacet  facet={facet} />
  })}
  </div>
  
  </div>
</div>
      

      </>
    
  )
}

