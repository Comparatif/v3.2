import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import useWindowDimensions from '../window/window'




const RefinementFacet = ({ facet }) => {

  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
    <hr class="horizontal dark"/>
      <h4 class="text-gradient text-info ">{facet.label}</h4>
      <div class="filters container">
        {facet.entries.map((entry) => {
          const isSelected = api.isFilterSelected({
            identifier: facet.identifier,
            value: entry.label,
          });
          return (
            <>
            <div
              class={isSelected ? ' row justify-content-between text-bold mb-1' : 'row justify-content-between mb-1'}
              
              key={entry.label}
              onClick={() => {
                api.toggleFilter({ identifier: facet.identifier, value: entry.label });
                api.search();
              }}>
              <div style={{cursor: "pointer"}} class="col-md-10 col-sm-10 col-10 no-of2 p-0"> {entry.label}</div>  
              <div class="col-md-2 col-sm-2 col-2 p-0">
              <div class={isSelected ? 'btn bg-gradient-info py-1 px-2 mb-0' : 'btn bg-gradient-secondary py-1 px-2 mb-0'}>{entry.count}</div>
            </div>
            </div>
            
            </>
          );
        })}
      </div>

      
    </div>
  );
};


export const Facets = ({ data }) => {
  //const { height, width } = useWindowDimensions();
  
  return (
    <>
    <button id="btn-fontsize" class="btn bg-gradient-info mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtres</button>


<div class={typeof window !==  'undefined'? screen.width < 767.98 ? "offcanvas offcanvas-top h-50" : "offcanvas offcanvas-start" : ""} data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header pb-0">
    <h3 class="offcanvas-title text-gradient text-info" id="offcanvasScrollingLabel">Réglages</h3>
    <div class="col-1 row justify-content-center">
    <i  class={width < 767.98 ? "ni ni-bold-up no-overflow col-12" : "ni ni-bold-left no-overflow col-12"} data-bs-dismiss="offcanvas" aria-label="Close"></i>
   
  </div>
  </div>
  <div class="offcanvas-body text-start pt-0">
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

