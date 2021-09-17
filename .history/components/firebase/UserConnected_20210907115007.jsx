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
  , commentaire, StarRating, ListeNotesBoutique}) => {
 



  return (
    
    <div class="modal fade" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
    <div class="modal-content">
      
      <div class="modal-body">

      gfjf
      </div>
      
    </div>
  </div>

      
  {useEffect(() =>
    {
      var myModal = document.getElementById("SignUp-form-" + cle)
      
    return (new bootstrap.Modal(myModal).show() )
  })}

    </div>
    
   
    
  );
}




