import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import Auth from "./Auth";
import VoterList from "./VoterList";
import {Input} from "./Input"


export const AverageStars = ({boutique_infos, boutique, user, loading, datetime, db}) => {



  
  const reducer = (a, b) => a + b;

  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === boutique){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0
  
    return (
      <>
      
      <div class="col-xl-10 row justify-content-center text-center px-lg-1"  
      
      title={StarRating  === 0 ? 'Ce marchand n\'a pas encore de note, notez le !'
    :
    `Note Globale : ${StarRating}
    | Avis: ${ListeNotesBoutique?.length}` }
      
    
    
        data-bs-toggle="tooltip" data-bs-placement="bottom"
      
      
      >
      <div data-bs-toggle="modal" data-bs-target="#SignUp-form">
        <ReactStars
        
        key={StarRating}
        count={5}
        value={StarRating}
        isHalf={true}
        size={18}
        edit= {false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      </div>

      <div class="modal fade" id="SignUp-form" tabindex="-1" role="dialog" aria-labelledby="SignUp-form" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
                <p class="mb-0">Enter your email and password to sign in</p>
              </div>
              <div class="card-body">
                <form role="form text-left">
                  <label>Email</label>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <label>Password</label>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked=""/>
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <a href="javascript:;" class="text-info text-gradient font-weight-bold">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
































      </div>
      
      
        
</>


    )
  }


export class StarsRate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ratingChanged } = this.props
    return (
      <ReactStars
    
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />

    )
  }
}
