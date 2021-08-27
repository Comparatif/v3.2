import React, { useState } from 'react'
import { useSearchkit } from '@searchkit/client'

const RefinementFacet = ({ facet }) => {
  const api = useSearchkit();
  return (
    <div key={facet.identifier}>
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