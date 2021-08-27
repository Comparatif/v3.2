import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'
import Carousel, { consts } from 'react-elastic-carousel';


const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  
  return (
    


    
    {facet.label}
  
  
  
  
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
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
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

