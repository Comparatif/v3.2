export const 

{ data?.results.summary.total == 0 ?
    <>
    
    {(data?.results?.hits?.sortedBy == "relevance" && data?.results.summary.total == 0 ) ?
      <>
      <section id="results-position">
      <div class="container p-0">
      <div class="row content-justify-center text-center">
      
      <h1>Aucun résultats, Sorry :(</h1>
        </div>
        <br class="mb-4"/><br class="mb-4"/><br class="mb-4"/>
      
      
        
      </div>
      </section>
      <Footer/>
      </>
      :
  
      <>
      {api.setSortBy('relevance')};
      <section id="results-position">
      <div class="container p-0">
      
     
      <HitsList data={data}  />
      <Pagination data={data?.results} />
    
      
      {<Maj/>} 
      
        
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
  
    
    {<Maj/>} 
    
      
    </div>
    </section>
    <Footer/>
  </>
  }