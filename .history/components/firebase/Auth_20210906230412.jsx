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


export const Auth = ({cle}) => {
  
  return (
    
    
    
  );
}




