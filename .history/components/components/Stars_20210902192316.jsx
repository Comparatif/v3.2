import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";




export const AverageStars = ({rating}) => {
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
      
        <ReactStars
        key={rating}
        count={5}
        value={rating}
        isHalf={true}
        size={24}
        edit= {false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />

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
