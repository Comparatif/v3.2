import React, { useRef } from 'react'
import { useSearchkit, FilterLink, FilterLinkClickRef } from '@searchkit/client'
import useWindowDimensions from '../window/window'




const RefinementFacet = ({ facet }) => {

  const api = useSearchkit();
  const ref = useRef();
    
        return (
          <div key={facet.identifier}>
          <hr className="horizontal dark"/>
      <h4 className="text-gradient text-info ">{facet.label}</h4>
      <div className="filters container">
          {facet.entries.map((entry) => {
          
          const isSelected = api.isFilterSelected({
            identifier: facet.identifier,
            value: entry.label,
          });
          const toggle = () => api.toggleFilter({
            identifier: facet.identifier,
            value: entry.label,
          });
          
          return (
            <>
            <div
              className={isSelected ? ' row justify-content-between text-bold mb-1' : 'row justify-content-between mb-1'}
              
              key={entry.label}
              onClick={
               ()=> toggle()
              }
              ref={ref}
              
              >
              
              <div style={{cursor: "pointer"}} className="col-md-10 col-sm-10 col-10 no-of2 p-0">
              <FilterLink className="facet-custom"  filter={{ identifier: facet.identifier, value: entry.label }} > 
              {entry.label}
              <style jsx>{`
        .facet-custom:nth-child {
          flex: 0 0 auto;
          width: 83.333333%;
          text-overflow: ellipsis;
          overflow: hidden; 
          cursor: pointer;
          padding: 0px;

        }
   
      `}</style>
              </FilterLink> 
              
              </div>
              <div className="col-md-2 col-sm-2 col-2 p-0">
              <div className={isSelected ? 'btn bg-gradient-info py-1 px-2 mb-0' : 'btn bg-gradient-secondary py-1 px-2 mb-0'}>{entry.count}</div>
            </div>
            </div>
            
            </>
          );
        })}
        </div>
        
        
        </div>)
      

};





export const Facets = ({ data, id }) => {
  const { height, width } = useWindowDimensions();
  
  return (
    <>
    <button id="btn-fontsize" className="btn bg-gradient-info mb-0 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target={id ? ("#"+ id) : "canvas"} aria-controls="offcanvasScrolling">Filtres</button>


<div className={ width < 767.98 ? "offcanvas offcanvas-top h-50" : "offcanvas offcanvas-start" } data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id={id ? id : "canvas"} aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header pb-0">
    <h3 className="offcanvas-title text-gradient text-info" id="offcanvasScrollingLabel">Réglages</h3>
    <div className="col-1 row justify-content-center">
    <i  className={width < 767.98 ? "ni ni-bold-up no-overflow col-12" : "ni ni-bold-left no-overflow col-12"} data-bs-dismiss="offcanvas" aria-label="Close"></i>
   
  </div>
  </div>
  <div className="offcanvas-body text-start pt-0">
  <div className="container">
  
  {data?.facets.map((facet) => {
    
    return(
   
    
    
    
    <RefinementFacet  facet={facet} />

   

      
    

    )
  })}
  </div>
  
  </div>
</div>
      

      </>
    
  )
}

