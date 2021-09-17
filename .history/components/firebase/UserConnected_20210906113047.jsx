import React, {useState, useEffect, useRef, ReactElement} from 'react';
import firebase from "./firebase/clientApp";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import ReactStars from "react-rating-stars-component";

const db = firebase.firestore();
export const UserConnected = ({cle}) => {
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
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h3 class="font-weight-bolder text-info text-gradient">Bienvenue {}!</h3>
                <p class="mb-0">Connectez vous a Comparatifdz pour pouvoir voter :</p>
              </div>
              <div class="card-body">
              
                <form role="form text-left">
                
      
      
                  
                  
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <a href="javascript:;" class="text-info text-gradient font-weight-bold">Sign up</a>
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
    
    
    

  
  
  
  })}
    

    </div>
    
    
  );
}




