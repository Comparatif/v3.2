import React, {useState, useEffect, useRef, ReactElement} from 'react';
import firebase from "./firebase/clientApp";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import ReactStars from "react-rating-stars-component";

const db = firebase.firestore();
export const UserConnected = ({cle, , datetime, boutique, commentaire}) => {
  const [value, loading, error] = useDocument(
    db.doc(`users/${id.replace("_" + boutique,'')}`)
  );

  if (loading) {
    return <h6>Loading...</h6>;
  }

  if (error) {
    return null;
  }


  return (
    <div class="modal fade" id={"SignUp-form-" + cle} tabindex="-1" role="dialog" aria-labelledby={"SignUp-form-" + cle} aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="modal-title-default">Bienvenue {value.data()?.displayName}</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn bg-gradient-primary">Save changes</button>
        <button type="button" class="btn btn-link  ml-auto" data-bs-dismiss="modal">Close</button>
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




