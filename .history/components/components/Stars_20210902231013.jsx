import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";




export const AverageStars = ({boutique_infos, boutique}) => {
  const reducer = (a, b) => a + b;

  const ListeNotesBoutique = boutique_infos.map(info => {
    if (info.shop === boutique){
      if ([info.vote].length > 0)
    {return [info.vote].reduce(reducer)}}}).filter(function(x) {
      return x !== undefined;
      
  });

//Calculate average star rating for each shop

const Resultat = (ListeNotesBoutique?.reduce(reducer, 0) / ListeNotesBoutique?.length)
const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : "Pas encore de note !"
  
    return (
      <>
      <div class="col-xl-8 row justify-content-center text-center px-lg-1" data-html="true"
      
      title="<>{StarRating}  === 0 ? 'Ce marchand n'a pas encore de note, notez le !'
    :
      <div>Note Globale : {StarRating}, {ListeNotesBoutique?.length} 
      </div>
    
    
    </>"  data-bs-toggle="tooltip" data-bs-placement="top"
      
      
      >
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
      <h6 class="text-small">
      {ListeNotesBoutique?.length} avis
        </h6>
        
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
