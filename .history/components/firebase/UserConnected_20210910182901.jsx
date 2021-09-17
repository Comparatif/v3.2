import React, {useState, useEffect, useRef, ReactElement, useCallback} from 'react';
import firebase from "./firebase/clientApp";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import ReactStars from "react-rating-stars-component";
import { useAuthState } from "react-firebase-hooks/auth";
import {StarsRate} from "./StarsRate"
import {Input} from "./Input"
import { OffCanvas } from '../UserContext';
import  {VoterList}  from './VoterList'
import {AverageStars} from "../firebase/Stars"

// Firestore
const db = firebase.firestore();
export const UserConnected = ({cle, boutique_infos, datetime, boutique
  , commentaire, StarRating, ListeNotesBoutique, user, CanvasState, SetCanvas, Vendeur_image, votesLoading}) => {
    
  
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
    
    (CanvasState == (`SignUp-form-${cle}`) && user) ?
    <div class="offcanvas offcanvas-end" data-bs-backdrop="false" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
    {console.log(boutique_infos)}
      <div class="offcanvas-header">
        <h6  class="font-weight-bolder text-info text-gradient">Bienvenue {user?.displayName} !</h6>
        
      </div>
      <div class="offcanvas-body pt-0">
<div class="h-25">

<div class="row justify-content-start">
<div></div>
<img src={Vendeur_image} alt="Unitech-dz" class="img-fluid border-radius-lg"/>
<AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState}/>




      Note Globale : {StarRating} --
      {ListeNotesBoutique?.length} avis
      
      Notez {boutique} : <StarsRate ratingChanged={ratingChanged} boutique={boutique}/>

      <Input user={user} boutique={boutique} datetime={datetime} />
      
      
      </div></div>
      <div class="h-75">
      {boutique_infos?.filter((doc) => doc.shop === boutique).sort((a, b) => b.vote - a.vote).map((doc) => 
        <>
          <VoterList id={doc.id} key={doc.id} vote={doc.vote} 
          commentaire={doc.commentaire} shop={doc.shop} datetime={doc.datetime} boutique={boutique}/>
        </>
      )
        
    }
    </div>








      </div>



      <div class="modal-footer">

        <button type="button" class="btn btn-link  ml-auto" onClick={() => SetCanvas('Off')}>Fermer</button>
      </div>
   

      
  {useEffect(() =>
    {
      var myOffcanvas = document.getElementById("SignUp-form-" + cle)
      
       return (new bootstrap.Offcanvas(myOffcanvas).show() ) 

       
  }

  )}
  {useEffect(()=> 
      {
        var elem = document.getElementsByClassName("tooltip fade show bs-tooltip-bottom")[0]
        elem?.parentNode.removeChild(elem)
      
      }
      
            )}
  

    </div>
    : ""
   
    
  );
}




