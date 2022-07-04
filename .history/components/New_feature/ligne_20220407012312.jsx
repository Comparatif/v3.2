export const Ligne = ({data}) => {

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
  
    return(
  <div class="card" id="results-position">
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Produits</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Technology</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {data?.results?.hits?.items.slice(0,1).map((hit)=>
            {
              const product_names = hit.fields.product_names
              const product_imagelinks = hit.fields.product_imagelinks
  
              return(
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img src={product_imagelinks} class="avatar avatar-sm me-3"/>
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">{product_names}</h6>
                  <p class="text-xs text-secondary mb-0">{!names_bdd ? "" : description1}</p>
                </div>
              </div>
            </td>)
          
          
          })}
          {data?.results.hits.items.map((hit) => {
      
            const vendeurs = hit.fields.vendeurs
        const product_names = hit.fields.product_names
        const product_imagelinks = hit.fields.product_imagelinks
        const marques = hit.fields.marques
        const categories = hit.fields.categories
        const product_links = hit.fields.product_links
        const product_prices = hit.fields.product_prices
        const vendeurs_image = hit.fields.vendeurs_image
        const villes1 = hit.fields.villes1
        const adresses = hit.fields.adresses
        const telephone1 = hit.fields.telephone1
        const telephone2 = hit.fields.telephone2
        const fix1 = hit.fields.fix1
        const email = hit.fields.email
        const facebook = hit.fields.facebook
        const instagram = hit.fields.instagram
        const horaires = hit.fields.horaires
        const localisation = hit.fields.localisation
        const stocks = hit.fields.stocks
        const shop_website = hit.fields.shop_website
        const product_country = hit.fields.product_country
        const commune = hit.fields.commune
        const livraison = hit.fields.livraison
        const paiement = hit.fields.paiement
        const type = hit.fields.type
        return(
            <td>
              <p class="text-xs font-weight-bold mb-0">{vendeurs}</p>
              <p class="text-xs text-secondary mb-0">{product_prices}</p>
            </td>
        )})}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  )}
  
  