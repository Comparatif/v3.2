import React, {useState, useEffect, useRef} from 'react';
import ReactStars from "react-rating-stars-component";






export class StarsRate extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const { ratingChanged } = this.props
      const { className } = this.props
      const { size } = this.props
      return (
        <ReactStars
      className={className}
        count={5}
        onChange={ratingChanged}
        size={size}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
  
      )
    }
  }