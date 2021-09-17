import React from "react";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import boutique from "../../pages/index"









type Inputs = {
  commentaire: string;

}
export const Input = ({boutique}) => {
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
<section>
  <div class="container py-4">
    <div class="row">
      <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
        <div class="card d-flex justify-content-center p-4 shadow-lg">
          <div class="text-center">
            <h3 class="text-gradient text-primary">Contact us</h3>
            <p class="mb-0">
              For further questions, including partnership opportunities, please email hello@creative-tim.com
              or contact using our contact form.
            </p>
          </div>
          <div class="card card-plain">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" >
              <div class="card-body pb-2">
                <div class="row">
                  <div class="col-md-6">
                    <label>Full Name</label>
                    <div class="input-group mb-4">
                      <input class="form-control" placeholder="Full Name" aria-label="Full Name" type="text" >
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <label>Email</label>
                    <div class="input-group">
                      <input type="email" class="form-control" placeholder="hello@creative-tim.com" >
                    </div>
                  </div>
                </div>
                <div class="form-group mb-0 mt-md-0 mt-4">
                  <label>How can we help you?</label>
                  <textarea {...register("commentaire")} placeholder="Laisser un commentaire"  class="form-control" id="message" rows="6" placeholder="Votre avis sur ce marchand"></textarea>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button type="submit" class="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Commentaire: </label>
      <input {...register("commentaire")} placeholder="Laisser un commentaire" />
     
      <input type="submit" />
    </form>
  );
}
