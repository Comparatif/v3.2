export const LoginPopup = () =>

{
    
    const blabla = 'dfbgfd'

return(


    <div className="me-2">
    <button type="button" className="btn btn-block btn-info mb-3" data-bs-toggle="modal" data-bs-target="#modal-form">
    Connectez vous
    </button>
    <div className="modal fade" id="modal-form" tabIndex="-1" aria-labelledby="modal-form" style={{display: "none"}} aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
    <div className="modal-body p-0">
    
    
      
          <div className="card overflow-hidden">
            <div className="row">
              <div className="col-lg-7">
                <form className="p-3" id="contact-form" method="post">
                  <div className="card-header px-4 pt-sm-5 pb-sm-3 pt-3 pb-2">
                    <h2>Bienvenue sur Comparatifdz !</h2>
                    <p className="lead"> Créer un compte c'est très simple :</p>
                  </div>
                  <div className="card-body pt-1">
                    <div className="row">
                      <div className="col-md-12 pe-2 mb-3">
                        <label>Adresse e-mail</label>
                        <input className="form-control" placeholder="Adresse e-mail" type="text"/>
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <label>Mot de passe</label>
                        <input className="form-control" type="password" placeholder="Mot de passe" />
                      </div>
                      <div className="col-md-12 pe-2 mb-5">
                        <label>Confirmation</label>
                        <input className="form-control" type="password" placeholder="Mot de passe" />
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="col-md-6 text-right ms-auto">
                        <button type="submit" className="btn btn-round bg-gradient-info mb-0">Créer un compte</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 position-relative bg-cover px-0" style={{backgroundImage: "url(" + "/img/curved-images/curved5.jpg" + ")"}}>
                <div className="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
                  <img src="/img/wave-1.svg" className="h-100 ms-n2" alt="vertical-wave"/>
                </div>
                <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div className="mask bg-gradient-info opacity-9"></div>
                  <div className="p-5 ps-sm-8 position-relative text-left my-auto z-index-2">
                    <h3 className="text-white">Contact Information</h3>
                    <p className="text-white opacity-8 mb-4">Notre équipe est la pour vous aider 24/7</p>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">0555 37 70 86</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-envelope text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">comparatif.algerie@gmail.com</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-map-marker-alt text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">Alger, Bir Mourad Rais</span>
                      </div>
                    </div>
                    <div className="mt-4">
                    <a href="https://www.facebook.com/Comparatifdz" target="_blank" rel="noreferrer">
                      <button  type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook" data-bs-original-title="" title="">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </button>
                      </a>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter" data-bs-original-title="" title="">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble" data-bs-original-title="" title="">
                        <i className="fab fa-dribbble" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram" data-bs-original-title="" title="">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
   
  
  </div>
  </div>
  </div>
  </div>
  </div>


)





}


