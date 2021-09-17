import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

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

function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Connectez vous a Comparatifdz</h1>
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;