import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import Auth from "./components/Auth";

import VoterList from "./components/VoterList";
import {AverageStars, StarsRate} from "./components/Stars"
import {Input} from "./components/Input"




type VoteDocument = {
  vote: number;
  shop: string;
  datetime: string;
  commentaire: string;
  displayName: string;
  userPhoto: string;


};



export const boutique = "weltinfo"


export default function Etoiles() {
  

  

  

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


  //Push data into array

  const boutique_infos = []


  votes?.docs?.filter( (doc) => boutique_infos.push(doc.data() as VoteDocument))
  /// le haut va dans hitlist et le bas après la map
  
  const reducer = (a, b) => a + b;
  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === boutique){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : "Pas encore de note !"


//trouve le commentaire et l'envoi a firebase



  return (
    <div>

      
        
          

         
         
          

      
      <h6 className="text-small">
      Note Globale : {StarRating} --
      Nombre d'avis : {ListeNotesBoutique?.length} 

     <AverageStars rating={StarRating}         

        </h6>
      
        <div style={{ marginTop: "64px" }}>
        <h3>Avis concernant {boutique}:</h3>
        <div
          style={{
            maxHeight: "320px",
            overflowY: "auto",
            width: "500px",
          }}
        >
          {votes?.docs?.filter((doc) => doc.data().shop === boutique).sort((a, b) => b.data().vote - a.data().vote).map((doc) => 
            <>
              <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} commentaire={doc.data().commentaire} shop={doc.data().shop} datetime={doc.data().datetime} boutique= {boutique}/>
            </>
          )
            
        }
          
          
          
        </div>
      </div>
   
  
</div>
  );
}