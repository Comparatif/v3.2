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

  const heure= datetime?.replace(/min|h/g,':').replace(/sec/g,'').replace(/@/g,'|')

  return (

 

    <div class="row justify-content-start text-start my-2" style={{borderBottom: '1px solid rgba(191, 191, 191, 0.25)'}}
      
    >
    <div class='col-2'>
    <img
        style={{
          borderRadius: "75%",
          maxHeight: "48px",
         
        }}
        
        src={value.data()?.photoURL}
      />
    
    </div>
      
      <div class="col-10">
        <h6 style={{ marginBottom: 0 }}>{value.data()?.displayName ? value.data()?.displayName : value.data()?.email}</h6>
        
        <div>
        <div class="row justify-content-center" >
        
        <div class="col-5 ">
          <ReactStars
        key={vote}
        count={5}
        value={vote}
        isHalf={true}
        size={18}
        edit= {false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      
      </div>
      <div class="col-7 text-small text-end"> <p><small>{heure}</small></p></div>
        </div>
        <div class="row justify-content-start text-start">
        <div class="col-11">
        <p><small style={{color: "black"}}>{commentaire}</small></p>

       
        </div>
        </div>
        
        
        
        
        
        
        
        
        
        </div>
      </div>
      
      
    </div>

    
  );
}
