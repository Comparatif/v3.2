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
  
  // We will display GitHub as auth providers.
  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID, 
    firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }


};


export const Auth = ({cle, CanvasState, SetCanvas, user}) => {
  
  return (
    (CanvasState == (`SignUp-form-${cle}`) && !user) ?
    <div className="modal fade" id={"SignUp-form-" + cle} tabIndex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="card card-plain">
              <div className="card-header pb-0 text-left">
                <h3 className="font-weight-bolder text-info text-gradient text-center">Connexion</h3>
                <p className="mb-0">Connectez vous a Comparatifdz pour pouvoir voter :</p>
              </div>
              <div className="card-body">
              
                <form role="form text-left">
                
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                  
                  
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
      
      var myModal = document.getElementById("SignUp-form-" + cle)
    return (new bootstrap.Modal(myModal).show() )
  }
  
  )}
  {useEffect(()=> 
    {
      var elem = document.getElementsByClassName("tooltip fade show bs-tooltip-bottom")[0]
      elem?.parentNode.removeChild(elem)
    
    }
    
          )}

  
        
    

    </div>
    :""
    
    
  );
}



