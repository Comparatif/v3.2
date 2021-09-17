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