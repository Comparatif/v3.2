import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'

const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div class='dropdown w-auto top-0 position-relative' key={facet.identifier}>
    <button class="btn bg-gradient-info dropdown-toggle mb-0" type="button" id={facet.label} data-bs-toggle="dropdown" aria-expanded="false">
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
    <div class='row'>
      {data.facets.map((facet) => {
        return <RefinementFacet facet={facet} />
      })}
    </div>
  )
}