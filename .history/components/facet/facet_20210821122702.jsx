import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'

const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div class='dropdown w-auto sub-filters me-2 col-md-9 col-sm-9 col-8 mt-0 text-center' key={facet.identifier}>
    <div>
    <button class="btn bg-gradient-info dropdown-toggle mb-0 filters" type="button" id={facet.label} data-bs-toggle="dropdown" aria-expanded="false">
    {facet.label}
  </button>
  
  
  <ul class="dropdown-menu" aria-labelledby={facet.label}>
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