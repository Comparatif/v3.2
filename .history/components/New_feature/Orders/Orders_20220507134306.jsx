import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();



export const CA = () => {

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );
const Orders_infos = []

Orders?.docs?.filter( (doc) => Orders_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))


const reducer = (a, b) => a + b;



const chiffre = Orders_infos.map(doc => {
    const prix = doc.Infos_boutique.product_prices
      if (prix > 0)
    {return [prix].reduce(reducer)}}).filter(function(x) {
      return x !== undefined;
      
  })

const affaire = chiffre?.reduce(reducer, 0)

return chiffre
}

 
  //const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

//const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
//const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

