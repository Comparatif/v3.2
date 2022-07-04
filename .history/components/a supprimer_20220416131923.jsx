{loading ?
  <section id="info-produit">

            

<div class="container"> 
  <div class="row justify-content-center text-center">
<div class="col-md-12 col-sm-12 col-12 position-absolute top-50">
  <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
  </div>
  </div>
  </div>
  </section>
   : <>




{ data?.results.summary.total == 0 ?


(data?.results?.hits?.sortedBy == "relevance" && data?.results.summary.total == 0 ) ?

  <td class="results_ligne">{SearchBar}<h1>Aucun résultats, réessayez :(</h1></td>
  :
  <>
  {api.setSortBy('relevance')};
  {SearchBar}{resultats}
  </>
  

:
<>{SearchBar}{resultats}</>
}
</>}