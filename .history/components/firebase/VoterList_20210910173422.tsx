import React, { ReactElement } from "react";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import firebase from "./firebase/clientApp";
import ReactStars from "react-rating-stars-component";

const db = firebase.firestore();

interface Props {
  // id is the id of the vote document
  // (which is also the uid of the user, and the name of the user doucment for that user)
  id: string;
  vote: number;
  shop: string;
  datetime: string;
  boutique: string;
  commentaire: any;

}

export default function VoterList({ id, vote, shop, datetime, boutique, commentaire }: Props): ReactElement {


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

 

    <div
      
    >
      <img
        style={{
          borderRadius: "50%",
          maxHeight: "48px",
          marginTop: "8px",
          marginRight: "8px",
        }}
        src={value.data()?.photoURL}
      />
      <div>
        <h4 style={{ marginBottom: 0 }}>{value.data()?.displayName ? value.data()?.displayName : value.data()?.email}</h4>
        <h4 style={{ marginTop: 0 }}>
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
          Crée le {datetime.replace("@", "a")}
        </h4>
      </div>
      
      
    </div>

    
  );
}
