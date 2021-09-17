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

export const AverageStars = ({boutique_infos, boutique, user, loading, datetime, cle}) => {
  const [isOn, toggleIsOn] = useToggle()
  

  
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
      
    data-bs-trigger= "manual"
    
        data-bs-toggle="tooltip" data-bs-placement="bottom"
      
      id= {"tooltip-" + cle}
      >
      <div onClick={toggleIsOn} >
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

      {isOn ? 
        
        <>
        
        {user ? <UserConnected cle={cle} boutique={boutique} 
        datetime={datetime} StarRating={StarRating} ListeNotesBoutique={ListeNotesBoutique} user={user} />
      :  <Auth cle={cle} />}
        
        
        </> 
      
      
      
      : undefined }
 
      
      {useEffect(() =>
        {
          

          ['hide.bs.modal','hide.bs.offcanvas'].forEach( evt => 
 document.getElementById("SignUp-form-" + cle)?.addEventListener(evt, function () {
            return toggleIsOn(false) && myModal.hide() 
          }))
          
          

          var myTooltipEl = document.getElementById("tooltip-" + cle)
          var tooltip = new bootstrap.Tooltip(myTooltipEl, {trigger: "manual"})
          {isOn ? (tooltip.disable()) : (tooltip.enable())
          }
           
          myTooltipEl?.addEventListener('mouseenter', function () {
            if !isOn (tooltip.show())
          }) 
          myTooltipEl?.addEventListener('mouseleave', function () {
            return (tooltip.hide())
          })
     })}




 



</div>
      
 
        
</>


    )
  }



