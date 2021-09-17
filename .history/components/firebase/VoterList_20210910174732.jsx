import React, { ReactElement } from "react";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import firebase from "./firebase/clientApp";
import ReactStars from "react-rating-stars-component";
import ClipLoader from "react-spinners/ClipLoader";

const db = firebase.firestore();



export const VoterList = ({ id, vote, shop, datetime, boutique, commentaire }) => {


  const [value, loading, error] = useDocument(
    db.doc(`users/${id.replace("_" + boutique,'')}`)
  );

  if (loading) {
    return <section id="info-produit">

              

    <div class="container"> 
        <div class="row justify-content-center text-center">
     <div class="col-md-12 col-sm-12 col-12 position-absolute top-50">
        <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
        </div>
        </div>
        </div>
        </section>;
  }

  if (error) {
    return null;
  }

  

  return (

 
    <section id="info-produit">
    <div class="container"> 
        <div class="row justify-content-center text-center">
     <div class="col-md-12 col-sm-12 col-12 position-absolute top-50">
        <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
        </div>
        </div>
        </div>
        </section>

    
  );
}
