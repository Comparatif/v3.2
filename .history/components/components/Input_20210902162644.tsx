import React from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import boutique from "../../pages/index"









type Inputs = {
  commentaire: string;

}
export const Input = ({}) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const db = firebase.firestore();
  const addCommentDocument = async (commentaire: string) => {
  
  
    const CommentDocument = await db.collection("votes").doc(user.uid + "_" + boutique)
    CommentDocument.get()
      .then((doc) => {
      if (doc.exists) {
        CommentDocument.update({
          commentaire
      });
    } else {
      CommentDocument.set({commentaire}) 
    }
  })};
  
  const {
    register,
    handleSubmit,
    watch, getValues,
    formState: { errors }
  } = useForm<Inputs>();

  const singleValue = getValues("commentaire")
  const onSubmit: SubmitHandler<Inputs> = () => {
    addCommentDocument(singleValue);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("commentaire")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Commentaire: </label>
      <input {...register("commentaire")} placeholder="Laisser un commentaire" />
     
      <input type="submit" />
    </form>
  );
}
