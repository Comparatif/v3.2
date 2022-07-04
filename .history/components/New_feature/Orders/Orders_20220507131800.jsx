import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );
const Orders_infos = []

Orders?.docs?.filter( (doc) => Orders_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))
console.log(Orders_infos)

const reducer = (a, b) => a + b;

  const CA = Orders_infos.map(doc => {
    
      if ([doc.vote].length > 0)
    {return [doc.vote].reduce(reducer)}}).filter(function(x) {
      return x !== undefined;
      
  });

 
  const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

export const CA = () => {

    return(console.log(Orders_infos))
}