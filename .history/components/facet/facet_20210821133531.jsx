import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'


const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 576, itemsToShow: 3, itemsToScroll: 3, pagination: false },
    { width: 768, itemsToShow: 4, itemsToScroll: 4, pagination: false},
    { width: 992, itemsToShow: 6, itemsToScroll: 6, pagination: false },
  ]
  return (
    <Carousel breakPoints={breakPoints} >


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