import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import useWindowDimensions from '../window/window'




const RefinementFacet = ({ facet }) => {

  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
    <hr className="horizontal dark"/>
      <h4 className="text-gradient text-info ">{facet.label}</h4>
      <div className="filters ">
        {facet.entries.map((entry) => {
          const isSelected = api.isFilterSelected({
            identifier: facet.identifier,
            value: entry.label,
          });
          return (
            <>
            <li
              className={isSelected ? ' text-bold no-overflow mb-1' : 'no-overflow mb-1'}
              
              key={entry.label}
              onClick={() => {
                api.toggleFilter({ identifier: facet.identifier, value: entry.label });
                api.search();
              }}>
              <div>{entry.label}</div>  <div className={isSelected ? 'btn bg-gradient-info py-1 px-2 mb-0' : 'btn bg-gradient-secondary py-1 px-2 mb-0'}>{entry.count}</div>
            </li>
            
            </>
          );
        })}
      </div>

      
    </div>
  );
};


export const Facets = ({ data }) => {
  const { height, width } = useWindowDimensions();
  
  return (
    <>
    <button className="btn bg-gradient-info mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtres</button>


<div className={ width < 767.98 ? "offcanvas offcanvas-top" : "offcanvas offcanvas-start" } data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header pb-0">
    <h3 className="offcanvas-title text-gradient text-info" id="offcanvasScrollingLabel">Réglages</h3>
    <div>
    <i  className={width < 767.98 ? "ni ni-bold-up no-overflow" : "ni ni-bold-left no-overflow"} data-bs-dismiss="offcanvas" aria-label="Close"></i>
   
  </div>
  </div>
  <div className="offcanvas-body text-start pt-0">
  <div className="container">
  
  {data.facets.map((facet) => {
    return <RefinementFacet  facet={facet} />
  })}
  </div>
  
  </div>
</div>
      

      </>
    
  )
}

