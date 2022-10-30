import React from 'react'

export default class Footer extends React.Component {


  render () {
  
      return(
            
        <footer className="footer">
        <hr className="horizontal dark mb-5"/>
        <div className="container">
          <div className=" row">
            <div className="col-md-3 mb-4 ms-auto col-12">
              <div>
                <h6 className="text-gradient text-primary font-weight-bolder">Comparatifdz</h6>
              </div>
              <div>
                <h6 className="mt-3 mb-2 opacity-8">Social</h6>
                <ul className="d-flex flex-row ms-n3 nav">
                  <li className="nav-item">
                    <a className="nav-link pe-1" href="https://www.facebook.com/Comparatifdz" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook text-lg opacity-8"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">Entreprise</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      A propos
                    </a>
                  </li>
    
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Abonnement premium
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">Ressources</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Programmes d'affiliation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">Aide & Support</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a className="nav-link" href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message" >
                      Contactez-Nous
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Fonctionnement du site
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Sponsors & Partenariats
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
              <div>
                <h6 className="text-gradient text-primary text-sm">Legal</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                      Conditions d'utilisation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="" target="_blank" rel="noreferrer">
                    Politique de confidentialité
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <p className="my-4 text-sm">
                 Design by <a href="https://v2-azure.vercel.app" target="_blank" rel="noreferrer">Comparatifdz</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
  

  )
}}











