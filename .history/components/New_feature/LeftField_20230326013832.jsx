import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue, SearchkitProvider } from '@searchkit/client'
import AutoCompleteText_ligne from '../autocomplete/AutoCompleteText_ligne.js';
import {FacetsVeille} from '../facet/facet_veille'
import { LoginPopup } from './Login/LoginPopup';
import React, { useEffect , useContext, useState} from 'react'

export const LeftField = ({sss, updatetest123, data, isOn, toggleIsOn, setQuery, liste, IndexChange, id, SearchState}) => 
  
    
{
  
  const api = useSearchkit()

   
  
  const lesDescriptions =  data?.description?.hits?.items?.slice(0,1).map(
    (hit)=>
  
    ({a: hit?.fields.description1, b: hit?.fields.brand_name, c: hit?.fields.description2, d: hit?.fields.prod_description,
      e: hit?.fields.prod_specs_big_title, f: hit?.fields.total, g: hit?.fields.product_names})
    
  
    )
  
    const description1 = lesDescriptions != undefined ? lesDescriptions['0']?.a : ""
    const brand_name = lesDescriptions != undefined ? lesDescriptions['0']?.b  : ""
    const description2 = lesDescriptions != undefined ? lesDescriptions['0']?.c : ""
    const prod_description = lesDescriptions != undefined ? lesDescriptions['0']?.d : ""
    const prod_specs_big_title = lesDescriptions != undefined ? lesDescriptions['0']?.e : ""
    const total = lesDescriptions != undefined ? lesDescriptions['0']?.f : ""
    const names_bdd = lesDescriptions != undefined ? lesDescriptions['0']?.g : ""
    

    const CheckIfSorted = data?.results?.hits.sortedBy
    const CheckIfZeroResults = data?.results?.summary.total == 0
    const ShowSearchBar = !isOn || api.getQuery() == "" || CheckIfZeroResults
    const reglage1 = () => {api.setSortBy('prix_croissant'); api.search();}
    const reglage2 = () => {api.setSortBy('relevance'); api.search();}
  

   return(
    <td className="searchbar_ligne" >
    
<div className="d-flex px-2 py-1">
{ShowSearchBar ?
<>
<div className="d-flex flex-column col-1 justify-content-center">
  <a onClick={()=>toggleIsOn()} c>
  <small>
<img src="/img/custom/info.svg" title="" data-bs-original-title="Beta : la description peut ne pas correspondre a la recherche dans certains cas." data-bs-toggle="tooltip" data-bs-placement="right"/>
</small>
</a>
</div>

<div className="d-flex flex-column col-9 justify-content-center me-1">
<AutoCompleteText_ligne sss={sss} updatetest123={updatetest123} id={id} api={api} SearchState={SearchState} toggleIsOn={toggleIsOn} setQuery={setQuery} items={liste} index={IndexChange}/>
  </div>

<div className='col-lg-2 col-md-2 col-sm-2 col-2 mx-2 mt-1 justify-content-end p-0'>
<FacetsVeille className="facet_ligne" id={id} data={data?.results}/>

<button 
            id="btn-fontsize" 
            className={CheckIfSorted == "prix_croissant" ? "btn bg-gradient-success mt-1 mb-0 px-1 py-1" :"btn bg-gradient-warning mt-1 mb-0 px-1 py-1" }
            type="button"
            onClick={()=> CheckIfSorted == "prix_croissant" ? reglage2() : reglage1()} >Trier</button>

            <style jsx>{`
            .facet_ligne:nth-child {
              margin: 0px;
              padding: 0px;
    
            }
       
          `}</style>

</div>
</>


:<>
{data?.results?.hits?.items.slice(0,1).map((hit)=>
{
const product_names = hit.fields.product_names
const product_imagelinks = hit.fields.product_imagelinks
const results_number = data?.results.summary.total
const cle = hit.id.replace(/[0-9]/, 'Z')
return(
<>
<div className="d-flex flex-column col-2 justify-content-center">
<a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
  <img src={product_imagelinks} className="avatar avatar-l"/>
  </a>
</div>
<div className="d-flex flex-column col-8 justify-content-center me-1">
<a style={{cursor : "pointer"}} onClick={()=> toggleIsOn()} >
  <h6 className="mb-0 text-xs">{names_bdd ? names_bdd : product_names} {"(" + results_number + " résultats)"}</h6>
  <p className="text-xs text-secondary mb-0">{!names_bdd ? "" : description1}</p>
  </a>
  
  </div>
  <div className='col-lg-2 col-md-2 col-sm-2 col-2 mx-2 mt-1 justify-content-end p-0'>


            <FacetsVeille className="facet_ligne" id={id} data={data?.results}/>
         
            <button 
            id="btn-fontsize" 
            className={CheckIfSorted == "prix_croissant" ? "btn bg-gradient-success mt-1 mb-0 px-1 py-1" :"btn bg-gradient-warning mt-1 mb-0 px-1 py-1" }
            type="button"
            onClick={()=> CheckIfSorted == "prix_croissant" ? reglage2() : reglage1()} >Trier</button>

            <style jsx>{`
            .facet_ligne:nth-child {
              margin: 0px;
              padding: 0px;
    
            }
       
          `}</style>

            </div>
  </>)})}
  
  
  </>


}

</div></td>)



}