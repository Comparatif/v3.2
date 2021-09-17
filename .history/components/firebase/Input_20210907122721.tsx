import React from "react";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import boutique from "../../pages/index"









type Inputs = {
  commentaire: string;
  singleValue: string;

}
export const Input = ({boutique, user}) => {

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

  const singleValue = getValues("commentaire") !== undefined ? getValues("commentaire") : ""
  const onSubmit: SubmitHandler<Inputs> = () => {
    addCommentDocument(singleValue);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("commentaire")); // you can watch individual input by pass the name of the input

  return (

          <div className="card card-plain">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" >
              <div className="card-body pb-2">
                
                  
                <div className="form-group mb-0 mt-md-0 mt-4">
                  
                  <textarea {...register("commentaire")} className="form-control" id="message" rows={2} placeholder="Donnez votre avis sur ce marchand"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
   



    {getValues("commentaire") !== undefined ?}
  );
}
