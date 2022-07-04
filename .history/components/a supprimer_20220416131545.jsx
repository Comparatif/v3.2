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
<>

{(data?.results?.hits?.sortedBy == "relevance" && data?.results.summary.total == 0 ) ?
  <>
  <td class="results_ligne">

  <h1>Aucun résultats, Sorry :(</h1>
    
  </td>
  </>
  :

  <>
  {api.setSortBy('relevance')};
  <section id="results-position">
  <div class="container p-0">
  
 
  <HitsList data={data}  />
  <Pagination data={data?.results} />}   
  </div>
  </section>
  <Footer/>
  </>
}  
</>
:
<>
<section id="results-position">
<div class="container p-0">
<HitsList data={data} />
<Pagination data={data?.results} />
</div>
</section>
<Footer/>
</>
}
</>}