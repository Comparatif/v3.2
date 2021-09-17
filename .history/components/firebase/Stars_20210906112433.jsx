import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";
import firebase from "./firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import {Auth} from "./Auth";
import {Auth} from "./Auth";
import VoterList from "./VoterList";
import {Input} from "./Input"
import useToggle from "../useful/toggle"

export const AverageStars = ({boutique_infos, boutique, user, loading, datetime, db, cle}) => {
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
        {!user && <Auth cle={cle}/>}
        {user && (
          <>
            <h1 >Notez {boutique}</h1>
  
            <StarsRate ratingChanged={ratingChanged}/>
           
            <Input />
  
        <div style={{ flexDirection: "row", display: "flex" }}>  
        <h3>
        Note Globale : {StarRating} --
        Nombre d'avis : {ListeNotesBoutique?.length} 
  
       
  
          </h3>
        </div>
          <div style={{ marginTop: "64px" }}>
          <h3>Avis concernant {boutique}:</h3>
          <div
            style={{
              maxHeight: "320px",
              overflowY: "auto",
              width: "500px",
            }}
          >
            {votes?.docs?.filter((doc) => doc.data().shop === boutique).sort((a, b) => b.data().vote - a.data().vote).map((doc) => 
              <>
                <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} commentaire={doc.data().commentaire} shop={doc.data().shop} datetime={doc.data().datetime} boutique= {boutique}/>
              </>
            )
              
          }  
          </div>
        </div>
      </>
    )}
        
        
        </> 
      
      
      
      : undefined }
 
      
      {useEffect(() =>
        {
          var myModal = document.getElementById("SignUp-form-" + cle)
          myModal?.addEventListener('hide.bs.modal', function () {
            return toggleIsOn(false)
          })
          

          var myTooltipEl = document.getElementById("tooltip-" + cle)
          var tooltip = new bootstrap.Tooltip(myTooltipEl, {trigger: "manual"})
          {isOn ? (tooltip.disable()) : (tooltip.enable())
          }
          myTooltipEl?.addEventListener('mouseenter', function () {
            return (tooltip.show())
          })
          myTooltipEl?.addEventListener('mouseleave', function () {
            return (tooltip.hide())
          })
     })}




 



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
