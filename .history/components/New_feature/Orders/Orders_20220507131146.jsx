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
votes?.docs?.filter( (doc) => boutique_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))


export const CA = () => {

    return()
}