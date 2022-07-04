import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();
const Orders_infos = []
const ListeDesPrix = []


export const CA = () => {

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );

Orders?.docs?.filter( (doc) => Orders_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))


const reducer = (a, b) => a + b;




Orders_infos.map(doc => {
    const prix = Number(doc.Infos_boutique.product_prices)
      if (prix > 0)
      
    {return ListeDesPrix.push(prix)}}).filter(function(x) {
      return x !== undefined;
      
  })
console.log(ListeDesPrix)

const affaire = ListeDesPrix.reduce((a, b) => a + b, 0)

return OrdersLoading ? "Chargement..." : affaire
}

 
  //const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

//const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
//const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

