export const LeftField = () => 
  
    
{

    const ShowSearchBar = !isOn || api.getQuery() == "" || CheckIfZeroResults
   return(
    <td class="searchbar_ligne" >

<div class="d-flex px-2 py-1">
{ShowSearchBar ?
<AutoCompleteText_ligne api={api} toggleIsOn={toggleIsOn} setQuery={setQuery} items={liste} index={IndexChange}/>



:
data?.results?.hits?.items.slice(0,1).map((hit)=>
{
const product_names = hit.fields.product_names
const product_imagelinks = hit.fields.product_imagelinks
const results_number = data?.results.summary.total
const cle = hit.id.replace(/[0-9]/, 'Z')
return(
<>
<div>
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
  </>)


})}
  </div></td>)}