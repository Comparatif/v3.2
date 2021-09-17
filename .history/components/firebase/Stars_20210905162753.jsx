import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import {Auth} from "./Auth";
import VoterList from "./VoterList";
import {Input} from "./Input"


export const AverageStars = ({boutique_infos, boutique, cle}) => {
 // Time
 var currentdate = new Date(); 
 var datetime =   currentdate.getDate() + "/"
               + (currentdate.getMonth()+1)  + "/" 
               + currentdate.getFullYear() + " @ "  
               + currentdate.getHours() + "h"  
               + currentdate.getMinutes() + "min" 
               + currentdate.getSeconds() + "sec";
 
 // Firestore
 const db = firebase.firestore();

 // User Authentication
 const [user, loading, error] = useAuthState(firebase.auth());

 // Votes Collection
 const [votes, votesLoading, votesError] = useCollection(
   db.collection("votes"),
   {}
 );

 // Create document function
 const addVoteDocument = async (vote: number, shop: string, datetime: string, 
) => {const VoteDocument = await db.collection("votes").doc(user.uid + "_" + boutique)
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


  
  const reducer = (a, b) => a + b;

  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === boutique){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0
  
    return (
      <>
      
      <div class="col-xl-10 row justify-content-center text-center px-lg-1"  
      
      title={StarRating  === 0 ? 'Ce marchand n\'a pas encore de note, notez le !'
    :
    `Note Globale : ${StarRating}
    | Avis: ${ListeNotesBoutique?.length}` }
      
    
    
        data-bs-toggle="tooltip" data-bs-placement="bottom"
      
      
      >
      <div data-bs-toggle="modal" data-bs-target={"#SignUp-form-" + cle}>
        <ReactStars
        
        key={StarRating}
        count={5}
        value={StarRating}
        isHalf={true}
        size={18}
        edit= {false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      </div>
      {!user && <Auth cle={cle} />}
      </div>
      
      
        
</>


    )
  }


export class StarsRate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ratingChanged } = this.props
    return (
      <ReactStars
    
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />

    )
  }
}
