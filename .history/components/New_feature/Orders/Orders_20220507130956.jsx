import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );


export const CA = () => {

    return()
}