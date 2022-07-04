import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();



const Orders_infos = []




export const CA = () => {

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );

//Orders?.docs?.filter( (doc) => Orders_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))
//const Prix = Orders?.docs?.filter( (doc) => doc.data().Infos_boutique.product_prices !== "")
//const CA = Prix?.reduce((a, b) => a + b, 0).filter(function(x) {
//    return x !== undefined;
    
//})

const Prix = Orders?.docs?.map( (doc) => doc.Infos_boutique)
console.log(Prix)
const reducer = (a, b) => a + b;


const ListeDesPrix = Orders_infos.map(doc => {
    const prix = Number(doc.Infos_boutique.product_prices)
      if (prix > 0)
      
    {return [prix].reduce(reducer)}}).filter(function(x) {
      return x !== undefined;
      
  })
console.log(ListeDesPrix)

const affaire = ListeDesPrix.reduce((a, b) => a + b, 0)

return OrdersLoading ? "Chargement..." : Prix
}

 
  //const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

//const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
//const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

