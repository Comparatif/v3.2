import React from 'react';
import { useForm } from "react-hook-form"

type Props = {

  commentaire: string;
  

}

export default function Input(addCommentDocument) {
  const { register, handleSubmit, errors } = useForm<Props>()
  const onSubmit = handleSubmit((data) => {
    addCommentDocument(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="commentaire">Commentaire</label>
    <input ref={register({ required: true})} type="text" placeholder="Laisser un commentaire" id="commentaire" name="commentaire"  />
    
    {errors.commentaire && <div className="error">Entrer un commentaire</div>}
    <input type="submit" />
    </form>
    )


}

type PersonScore = {
  name: string;
  email: string;
  score: number;
};

export const PersonScoreForm = () => {
  const { register } = useForm<PersonScore>();
  return (
    <form>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
        {...register("search")} defaultValue={criteria}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
        ref={register}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="field">
        <label htmlFor="score">Score</label>
        <input
        ref={register}
          type="number"
          id="score"
          name="score"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};