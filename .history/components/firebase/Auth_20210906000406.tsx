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
    <div className="modal fade" id={"SignUp-form-" + cle} tabIndex={-1} role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="card card-plain">
              <div className="card-header pb-0 text-left">
                <h3 className="font-weight-bolder text-info text-gradient">Bienvenue !</h3>
                <p className="mb-0">Connectez vous a Comparatifdz pour pouvoir voter</p>
              </div>
              <div className="card-body">
              
                <form role="form text-left">
                
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                  <label>Email</label>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <label>Password</label>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {useEffect(() =>
    {
      var myModal = new bootstrap.Modal(document.getElementById("SignUp-form-" + cle), {
    keyboard: false})
    return (myModal.show())})}
    </div>
    
    
  );
}




