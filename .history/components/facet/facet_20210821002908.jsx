import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'

const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
    <div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <li class="nav-item">
         <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
         My Profile
         </a>
      </li>
    </ul>
</div>
      <span>{facet.label}</span>
      <ol>
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
      </ol>
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