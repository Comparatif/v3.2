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
  const {TrackContext, SetTrackContext} = useContext(TrackingContext)

var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
var date = (currentdate.getDate()) + (currentdate.getMonth()+1)  +  (currentdate.getFullYear())


const e = TrackContext.data
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

  <div className="modal fade" id="modal-tracking" tabIndex={-1} aria-labelledby="modal-tracking" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient">
 Suivi de la commande
  </h3>
  <div class="progress-wrapper">
  <div class="progress-info">
  </div>
  <div class="progress">
    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
  </div>
</div>
  
  
  <div>


  <SuiBox width="8rem" textAlign="left">

      <SuiProgress 
      
      value={e?.sold ? 100 : e?.canceled ? 100 : e?.accepted ? 66 : e?.pending ? 33 : 0} 
      color={e?.sold ? "success" : e?.canceled ? "error" : e?.accepted ? "info" : e?.pending ? "warning" : "secondary"} 
      variant="gradient" label={false} />

      </SuiBox>
  </div>
  </div>
  <div className="card-body">
  

  <p>test</p>
  </div>
  </div>

  </div>
  </div>
  </div>
  </div>

 

 
  )





}


