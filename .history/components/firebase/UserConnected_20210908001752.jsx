import React, {useState, useEffect, useRef, ReactElement} from 'react';
import firebase from "./firebase/clientApp";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import ReactStars from "react-rating-stars-component";
import { useAuthState } from "react-firebase-hooks/auth";
import {StarsRate} from "./StarsRate"
import {Input} from "./Input"

// Firestore
const db = firebase.firestore();
export const UserConnected = ({cle, boutique_infos, datetime, boutique
  , commentaire, StarRating, ListeNotesBoutique, user, SetCanvas, CanvasState}) => {

  
  // Create document function
  const addVoteDocument = async (vote, shop, datetime) => {const VoteDocument = await db.collection("votes").doc(user.uid + "_" + boutique)
          VoteDocument.get()
          .then((doc) => {
          if (doc.exists) {
            VoteDocument.update({
              vote, shop, datetime
            });
         
        } else {
          VoteDocument.set({vote, shop, datetime}) 
        }
    });
      };
    
      //When you click on the stars
      const ratingChanged = (newRating) => {
        addVoteDocument(newRating, boutique, datetime)
      };



  return (
    
    <div class="offcanvas offcanvas-end" data-bs-backdrop="false" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
    
      <div class="offcanvas-header">
        <h6  class="font-weight-bolder text-info text-gradient">Bienvenue {user?.displayName} !</h6>
        
      </div>
      <div class="offcanvas-body">

      <h6>{boutique}</h6>
      Note Globale : {StarRating} --
      {ListeNotesBoutique?.length} avis
      
      Notez {boutique} : <StarsRate ratingChanged={ratingChanged}/>

      <Input user={user} boutique={boutique} />
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-link  ml-auto" onClick={() => SetCanvas('')}>Close</button>
      </div>
   

      
  {useEffect(() =>
    {
      var myOffcanvas = document.getElementById("SignUp-form-" + cle)
      
       return (new bootstrap.Offcanvas(myOffcanvas).show() ) : ""
  })}
  

    </div>
    
   
    
  );
}




