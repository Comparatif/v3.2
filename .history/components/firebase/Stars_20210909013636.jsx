import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import {Auth} from "./Auth";
import {UserConnected} from "./UserConnected";
import VoterList from "./VoterList";
import {Input} from "./Input"
import useToggle from "../useful/toggle"

export const AverageStars = ({StarRating, ListeNotesBoutique, cle, votesLoading, CanvasState}) => {


  
  /*useEffect(() => {var canevas = [].slice.call(document.querySelectorAll('[class="offcanvas offcanvas-end show"]'))
  //canevas > 1 ? canevas.slice(-1).remove()
  //console.log(canevas)
  const ShouldCanevasDisapear = canevas?.map((a) => a.id).toString().includes("SignUp-form-" + cle)
  console.log(ShouldCanevasDisapear)

          })
  */

   
   
      //var canevas = [].slice.call(document.querySelectorAll('[class="offcanvas offcanvas-end show"]'))
      //var ContientLaValeur = canevas > 1 ? (canevas?.map((a) => a.id).at(-1).toString() === "SignUp-form-" + cle ? "oui" : "non") : "<1"
      
      //console.log(canevas?.map((a) => a.id))
      //console.log((canevas?.map((a) => a.id)).at(-1) == "SignUp-form-" + cle)
   
  
  
    return (
     
      votesLoading ? "" :
      <div class="col-xl-10 row justify-content-center text-center px-lg-1"  
      
      title={{StarRating  === 0 ? 'Ce marchand n\'a pas encore de note, notez le !'
    :
    `Note Globale : ${StarRating}
    | Avis: ${ListeNotesBoutique?.length}` }
      
  data-bs-trigger="hover"
    
        data-bs-toggle="tooltip" data-bs-placement="bottom"
      
      id= {"tooltip-" + cle}
      >
      
        <ReactStars
        className='cursor-pointer'
        key={StarRating}
        count={5}
        value={StarRating}
        isHalf={true}
        size={18}
        edit= {true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      
</div>

      
 
        



    )
  }



