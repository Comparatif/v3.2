import React, {useState} from "react";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import boutique from "../../pages/index"







const db = firebase.firestore();

type Inputs = {
  commentaire: string;
  singleValue: string;

}
export const Input = ({boutique, user, datetime}) => {
const [isSubmited, setSubmit] = useState(false)
  
  const addCommentDocument = async (commentaire: string, shop : string, comment_datetime: string) => {
  
  
    const CommentDocument = await db.collection("votes").doc(user.uid + "_" + boutique)
    CommentDocument.get()
      .then((doc) => {
      if (doc.exists) {
        CommentDocument.update({
          commentaire, shop, comment_datetime
      });
    } else {
      CommentDocument.set({commentaire, shop, comment_datetime}) 
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
    addCommentDocument(singleValue, boutique, datetime);
    watch("commentaire").length > 0 ? setSubmit(true) : undefined
  }; // your form submit function which will invoke after successful validation

  console.log(watch("commentaire")); // you can watch individual input by pass the name of the input NECESSAIRE
  return (

          <div className="card card-plain">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" >
              <div className="card-body pb-2">
                
                  
                <div className="form-group mb-0 mt-md-0 mt-4">
                  
                  <textarea {...register("commentaire")} className="form-control" id="message" rows={5} placeholder="Donnez votre avis sur ce marchand"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                  <button type="submit" className="btn bg-gradient-info mt-3 mb-0"  {...watch("commentaire")?.length > 0 ? (isSubmited ? {disabled:true} : {disabled:false}) : {disabled:true}}>{isSubmited ? "Avis envoyé !" : "Donnez votre avis"}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
   



    
  );
}
