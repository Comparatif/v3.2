import firebase from '../../../../../../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../../../../../../../New_feature/context/AuthContext'
import { useRouter } from 'next/router'
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

import { orderStatus, TrackingContext } from '../../../../../../../UserContext.js'

import Link from 'next/link'




const db = firebase.firestore();

export const OrderTracking = () =>


{
  const [Data, SetData] = useState()
  const {TrackContext, SetTrackContext} = useContext(TrackingContext)

var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
var date = (currentdate.getDate()) + (currentdate.getMonth()+1)  +  (currentdate.getFullYear())


const a = TrackContext?.data
const b = TrackContext?.number
//const e = useEffect(()=> b ? a[b] : "") 

//b ==! undefined ? SetData(a[b]) : ""

console.log(a)
console.log(b)
console.log(a[b])
  const { user } = useAuth()

  const create = async (data) => {
try{
    fetch('/api/create',{
      body: JSON.stringify(data),
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
    });
  } catch (error) {
    throw new Error(error);
  }
  } 

return(
Data ?
  <div className="modal fade" id="modal-tracking" tabIndex={-1} aria-labelledby="modal-tracking" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient">
 Suivi de la commande
  </h3>

  <SuiBox width="8rem" textAlign="left">

      <SuiProgress 
      
      value={Data.sold ? 100 : Data.canceled ? 100 : Data.accepted ? 66 : Data.pending ? 33 : 0} 
      color={Data.sold ? "success" : Data.canceled ? "error" : Data.accepted ? "info" : Data.pending ? "warning" : "secondary"} 
      variant="gradient" label={false} />

      </SuiBox> 
  
  </div>
  <div className="card-body">
  

  <p>test</p>
  </div>
  </div>

  </div>
  </div>
  </div>
  </div>

 
: "...loading"
 
  )





}


