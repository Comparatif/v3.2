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

 

    <div class="row justify-content-start text-start"
      
    >
    <div></div>
      <img
        style={{
          borderRadius: "75%",
          maxHeight: "48px",
         
        }}
        
        src={value.data()?.photoURL}
      />
      <div>
        <h6 style={{ marginBottom: 0 }}>{value.data()?.displayName ? value.data()?.displayName : value.data()?.email}</h6>
        <h6 style={{ marginTop: 0 }}>
          <ReactStars
        key={vote}
        count={5}
        value={vote}
        isHalf={true}
        size={24}
        edit= {false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
          <br/>
          Commentaire : {commentaire}
          <br/>
          Crée le {datetime}
        </h6>
      </div>
      
      
    </div>

    
  );
}
