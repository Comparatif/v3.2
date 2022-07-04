import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../firebase/firebase/clientApp";
// Firestore
const db = firebase.firestore();

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );


export const CA = () => {

    return()
}