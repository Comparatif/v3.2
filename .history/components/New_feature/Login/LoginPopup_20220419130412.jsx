import firebase from '../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState} from 'react'

export const LoginPopup = () =>

{
    //const isBrowser = typeof window !== `undefined`
    const auth = firebase.auth()



    const signupForm = document.querySelector('#signup-Form')
useEffect(()=> {
  
  signupForm?.addEventListener('submit', (e) =>{ e.preventDefault();})
})

      // get user info
      const email = signupForm['signup-email'].value;
      const password = signupForm["signup-password"].value;

      //sign up the user
      auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
      })



    
   
    

return(


    <div class="me-2">
    <button type="button" class="btn btn-block btn-info mb-3" data-bs-toggle="modal" data-bs-target="#modal-form">
    Créer un compte
    </button>
    <div class="modal fade" id="modal-form" tabindex="-1" aria-labelledby="modal-form" style={{display: "none"}} aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
    <div class="modal-body p-0">
    
    
      
          <div class="card overflow-hidden">
            <div class="row">
              <div class="col-lg-7">
                <form class="p-3" id="signup-Form" method="post">
                  <div class="card-header px-4 pt-sm-5 pb-sm-3 pt-3 pb-2">
                    <h2>Bienvenue sur Comparatifdz !</h2>
                    <p class="lead"> Créer un compte c'est très simple :</p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <label>Adresse e-mail</label>
                        <input class="form-control" placeholder="Adresse e-mail" type="email" id="signup-email"/>
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label>Mot de passe</label>
                        <input class="form-control" type="password" placeholder="Mot de passe" />
                      </div>
                      <div class="col-md-12 pe-2 mb-5">
                        <label>Confirmation</label>
                        <input class="form-control" type="password" placeholder="Mot de passe" id="signup-password"/>
                      </div>
                      
                    </div>
                    <div class="row">
                      <div class="col-md-6 text-right ms-auto">
                        <button type="submit" class="btn btn-round bg-gradient-info mb-0">Créer un compte</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-5 position-relative bg-cover px-0" style={{backgroundImage: "url(" + "/img/curved-images/curved5.jpg" + ")"}}>
                <div class="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
                  <img src="/img/wave-1.svg" class="h-100 ms-n2" alt="vertical-wave"/>
                </div>
                <div class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div class="mask bg-gradient-info opacity-9"></div>
                  <div class="p-5 ps-sm-8 position-relative text-left my-auto z-index-2">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">Notre équipe est la pour vous aider 24/7</p>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-phone text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">0555 37 70 86</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">comparatif.algerie@gmail.com</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-map-marker-alt text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">Alger, Bir Mourad Rais</span>
                      </div>
                    </div>
                    <div class="mt-4">
                    <a href="https://www.facebook.com/Comparatifdz" target="_blank">
                      <button  type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook" data-bs-original-title="" title="">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                      </button>
                      </a>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter" data-bs-original-title="" title="">
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble" data-bs-original-title="" title="">
                        <i class="fab fa-dribbble" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram" data-bs-original-title="" title="">
                        <i class="fab fa-instagram" aria-hidden="true"></i>
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


