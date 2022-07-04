import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue, SearchkitProvider } from '@searchkit/client'
import AutoCompleteText_ligne from '../autocomplete/AutoCompleteText_ligne.js';
import {Facets} from '../facet/facet'

export const LeftField = ({data, isOn, toggleIsOn, setQuery, liste, IndexChange}) => 
  
    
{const lesDescriptions =  data?.description?.hits?.items?.slice(0,1).map(
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
    const api = useSearchkit()
    const CheckIfZeroResults = data?.results?.summary.total == 0
    const ShowSearchBar = !isOn || api.getQuery() == "" || CheckIfZeroResults
   return(
    <td class="searchbar_ligne" >
    
<div class="d-flex px-2 py-1">
{ShowSearchBar ?
<AutoCompleteText_ligne api={api} toggleIsOn={toggleIsOn} setQuery={setQuery} items={liste} index={IndexChange}/>



:<>
{data?.results?.hits?.items.slice(0,1).map((hit)=>
{
const product_names = hit.fields.product_names
const product_imagelinks = hit.fields.product_imagelinks
const results_number = data?.results.summary.total
const cle = hit.id.replace(/[0-9]/, 'Z')
return(
<div>
<div class="d-flex flex-column justify-content-center">
<a style={{cursor : "pointer"}} data-bs-toggle="modal" data-bs-target={"#" + cle + "-img"}>
  <img src={product_imagelinks} class="avatar avatar-sm me-3"/>
  </a>
</div>
<div class="d-flex flex-column justify-content-center">
<a style={{cursor : "pointer"}} onClick={()=> toggleIsOn()} >
  <h6 class="mb-0 text-xs">{names_bdd ? names_bdd : product_names} {"(" + results_number + " résultats)"}</h6>
  <p class="text-xs text-secondary mb-0">{!names_bdd ? "" : description1}</p>
  </a>
  
  </div>
  <div class='col-lg-2 col-md-2 col-sm-2 col-2 mx-2 p-0'>


            <Facets class="facet_ligne"  data={data?.results}/>

            <style jsx>{`
            .facet_ligne:nth-child {
              margin: 1px
              padding: 0px;
    
            }
       
          `}</style>

            </div>


  
  
  </>)})}
  
  
  </>


}

</div></td>)



}