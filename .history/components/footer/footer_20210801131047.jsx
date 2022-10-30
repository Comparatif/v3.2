import React from 'react'

export default class Footer extends React.Component {


  render () {
  
      return(
            
        <footer class="footer">
        <hr class="horizontal dark mb-5"/>
        <div class="container">
          <div class=" row">
            <div class="col-md-3 mb-4 ms-auto col-12">
              <div>
                <h6 class="text-gradient text-primary font-weight-bolder">Comparatifdz</h6>
              </div>
              <div>
                <h6 class="mt-3 mb-2 opacity-8">Social</h6>
                <ul class="d-flex flex-row ms-n3 nav">
                  <li class="nav-item">
                    <a class="nav-link pe-1" href="https://www.facebook.com/Comparatifdz" target="_blank">
                      <i class="fab fa-facebook text-lg opacity-8"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 class="text-gradient text-primary text-sm">Entreprise</h6>
                <ul class="flex-column ms-n3 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      A propos
                    </a>
                  </li>
    
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Abonnement premium
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 class="text-gradient text-primary text-sm">Ressources</h6>
                <ul class="flex-column ms-n3 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Programmes d'affiliation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 class="text-gradient text-primary text-sm">Aide & Support</h6>
                <ul class="flex-column ms-n3 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message" >
                      Contactez-Nous
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Fonctionnement du site
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Sponsors & Partenariats
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
              <div>
                <h6 class="text-gradient text-primary text-sm">Legal</h6>
                <ul class="flex-column ms-n3 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                      Conditions d'utilisation
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" target="_blank">
                    Politique de confidentialité
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="text-center">
                <p class="my-4 text-sm">
                 Design by <a href="https://v2-azure.vercel.app" target="_blank">Comparatifdz</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
  

  )
}}











