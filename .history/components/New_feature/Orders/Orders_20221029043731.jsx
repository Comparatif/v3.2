import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();








export const data = () => {



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
const prix = Orders?.docs?.map( (doc) => Number(doc.data().Infos_boutique.product_prices
)).filter(function(x) {
    return x !== undefined;
    
})
const CA = OrdersLoading ? "Chargement..." : prix.reduce((a, b) => a + b, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
const OrdersNumber = OrdersLoading ? "Chargement..." : prix.length
const Sold = OrdersLoading ? "Chargement..." : Orders?.docs?.filter((doc)=> doc.data().sold === true).length
const Pending = OrdersLoading ? "Chargement..." : Orders?.docs?.filter((doc)=> doc.data().sold === false).length

return ({CA: CA, OrdersNumber: OrdersNumber, Sold: Sold, Pending: Pending})
}



  //const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

//const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
//const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0
