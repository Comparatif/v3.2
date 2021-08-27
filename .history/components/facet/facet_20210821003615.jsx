import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'

const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
    <button class="btn bg-gradient-info dropdown-toggle mb-0" type="button" id={facet.label} data-bs-toggle="dropdown" aria-expanded="false">
    {facet.label}
  </button>
  
  <ul class="dropdown-menu" aria-labelledby={facet.label}>
  <div class="row justify-content-center text-start">
  

  
  </div>
  </ul>
      
    </div>
  );
};

export const Facets = ({ data }) => {
  return (
    <div>
      {data.facets.map((facet) => {
        return <RefinementFacet facet={facet} />
      })}
    </div>
  )
}