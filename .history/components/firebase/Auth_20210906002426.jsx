import React, {useState, useEffect, useRef} from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./firebase/clientApp";

// , firebase.auth.EmailAuthProvider.PROVIDER_ID
/* {
  provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID, 
  recaptchaParameters: {
      type: 'image',
      size: 'invisible',
      badge: 'bottomleft'
  }
  
}*/
// Configure FirebaseUI.
const uiConfig = {


  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display GitHub as auth providers.
  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const Auth = ({cle}) => {
  
  return (
    <div class="modal fade" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h3 class="font-weight-bolder text-info text-gradient">Bienvenue !</h3>
                <p class="mb-0">Connectez vous a Comparatifdz pour pouvoir voter</p>
              </div>
              <div class="card-body">
              
                <form role="form text-left">
                
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                  <label>Email</label>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <label>Password</label>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="rememberMe" />
                    <label class="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <a href="javascript:;" class="text-info text-gradient font-weight-bold">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {useEffect(() =>
    {
      var myModal = new bootstrap.Modal(document.getElementById("SignUp-form-" + cle))
    return (myModal.show())})}
    </div>
    
    
  );
}




