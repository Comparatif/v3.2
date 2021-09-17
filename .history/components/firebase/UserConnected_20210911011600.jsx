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


const [Avis, setAvis] = useState('Avis')
const Commenter = () => {setAvis('Commenter')}
const ListeAvis = () => {setAvis('Avis')}

  return (
    
    (CanvasState == (`SignUp-form-${cle}`) && user) ?
    <div class="offcanvas offcanvas-end" data-bs-backdrop="false" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
    {console.log(boutique_infos)}
      <div class="offcanvas-header px-1">
        <h6  class="font-weight-bolder text-info text-gradient">Bienvenue {user?.displayName} !</h6>
        
      </div>
      <div class="offcanvas-body py-0 px-1">
<div class="h-25">

<div class="row justify-content-center">
<div class="row justify-content-center col-12">
<div class="row justify-content-center col-6">
<img src={Vendeur_image} alt="Unitech-dz" class="img-fluid border-radius-lg"/>
</div>
<div class="row justify-content-center">
<div class="col-2 px-0 py-1"><h4>{StarRating}</h4></div>
<div class="col-3 px-0 pt-2">

<AverageStars votesLoading={votesLoading}
    StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique}  
    cle={cle} CanvasState={CanvasState}/></div>
    <div class="col-2 px-0 pt-2">
    <h5>
    {ListeNotesBoutique?.length} avis
    </h5>
    </div></div></div>


    
      
      
      </div></div>

      <div class="h-75">
      <button
      {Avis == "Commenter" ? 
      
      boutique_infos?.filter((doc) => doc.shop === boutique).sort((a, b) => b.vote - a.vote).map((doc) => 
        <>
          <VoterList id={doc.id} key={doc.id} vote={doc.vote} 
          commentaire={doc.commentaire} shop={doc.shop} datetime={doc.datetime} boutique={boutique}/>
        </>
      )
      : 
      <div class="row justify-content-center col-7">
      <div class="col-10">
      <h4>Notez</h4>
        <StarsRate className={"w-50"} ratingChanged={ratingChanged} boutique={boutique}/>
        <Input user={user} boutique={boutique} datetime={datetime} />
        </div></div>
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




