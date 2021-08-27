import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import Carousel, { consts } from 'react-elastic-carousel';


const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
      <h4 class="text-gradient text-info ">{facet.label}</h4>
      <div class="filters">
        {facet.entries.map((entry) => {
          const isSelected = api.isFilterSelected({
            identifier: facet.identifier,
            value: entry.label,
          });
          return (
            <div
              class={isSelected ? 'text-gradient text-info text-bold' : ''}
              key={entry.label}
              onClick={() => {
                api.toggleFilter({ identifier: facet.identifier, value: entry.label });
                api.search();
              }}>
              {entry.label} - {entry.count}
            </div>
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
  <div class="offcanvas-header ">
    <h3 class="offcanvas-title text-gradient text-info" id="offcanvasScrollingLabel">Réglages</h3>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
  {data.facets.map((facet) => {
    return <RefinementFacet  facet={facet} />
  })}
  
  </div>
</div>
      

      </>
    
  )
}

