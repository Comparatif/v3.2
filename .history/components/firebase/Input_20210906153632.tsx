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
  <div className="container py-4">
    <div className="row">
      <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
        <div className="card d-flex justify-content-center p-4 shadow-lg">
          <div className="text-center">
            <h3 className="text-gradient text-primary">Contact us</h3>
            <p className="mb-0">
              For further questions, including partnership opportunities, please email hello@creative-tim.com
              or contact using our contact form.
            </p>
          </div>
          <div className="card card-plain">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" >
              <div className="card-body pb-2">
                <div className="row">
                  <div className="col-md-6">
                    <label>Full Name</label>
                    <div className="input-group mb-4">
                      <input className="form-control" placeholder="Full Name" aria-label="Full Name" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6 ps-md-2">
                    <label>Email</label>
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="hello@creative-tim.com" >
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0 mt-md-0 mt-4">
                  <label>Commentaire:</label>
                  <textarea {...register("commentaire")} placeholder="Laisser un commentaire"  className="form-control" id="message" rows="6" placeholder="Donnez votre avis sur ce marchand"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
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



    
  );
}
