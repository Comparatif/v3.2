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
import useToggle from '../useful/toggle';
// Firestore
const db = firebase.firestore();
export const UserConnected = ({cle, boutique_infos, datetime, boutique
  , commentaire, StarRating, ListeNotesBoutique, user, CanvasState, SetCanvas, 
  Vendeur_image, votesLoading, isOn, toggleIsOn}) => {
    
  
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
      <div class="offcanvas-header px-2">
        <h6  class="font-weight-bolder text-info text-gradient">Bienvenue {user?.displayName} !</h6>
        
      </div>
      <div class="offcanvas-body py-0 px-1">
<div class="h-25 px-2">

<div class="row justify-content-center">
<div class="row justify-content-center col-12">
<div class="row justify-content-center col-6">
<img src={Vendeur_image} alt="Unitech-dz" class="img-fluid border-radius-lg"/>
</div>
<div class="row justify-content-center">
<div class="col-2 px-0 pt-xl-2 pt-lg-2 pt-sm-2 pt-lg-2 pt-3">
<h2>{StarRating}</h2>
</div>
<div style={{width : "150px"}} class="px-0 pt-2" >

<AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState} size={30}/>
    </div>
    <div class="col-2 px-0 pt-4">
    <h6>
    {ListeNotesBoutique?.length} avis
    </h6>
    </div></div></div>


    
      
      
      </div></div>

      <div class="h-75 px-2">
      <div class="row justify-content-end">
      <div class="col-5">
      <a style={{cursor: "pointer"}} onClick={toggleIsOn} >{isOn == false ? "Commenter" : "Voir les avis"}</a>
      </div>
      </div>
      <br/>
      
      {isOn == false ? 
      
      boutique_infos?.filter((doc) => doc.shop === boutique).sort((a, b) => b.vote - a.vote).map((doc) => 
        <>
          <VoterList id={doc.id} key={doc.id} vote={doc.vote} 
          commentaire={doc.commentaire} shop={doc.shop} datetime={doc.datetime} boutique={boutique}/>
        </>
      )
      : 
      <div class="row justify-content-center">
      
      <div class='col-2'>
    <img
        style={{
          borderRadius: "75%",
          maxHeight: "48px",
         
        }}
        
        src={user?.photoURL}
      />
    
    </div>
    <div class="col-10 text-start"><h6>{user?.displayName}</h6></div>
    <div style={{width : "150px"}} class="p-0">
        <StarsRate className={"w-50"} ratingChanged={ratingChanged} boutique={boutique} size={30}/>
        </div>
        <Input user={user} boutique={boutique} datetime={datetime}  />
        </div>
    }

    </div>
      </div>



      <div class="modal-footer px-1">
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




