import firebase from '../../../../../../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../../../../../../../New_feature/context/AuthContext'
import { useRouter } from 'next/router'
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";
import ClipLoader from "react-spinners/ClipLoader";

//GraphQL
import {gql, useQuery, useMutation} from "@apollo/client";

const UpdateOrderMutation = gql`
  mutation (
    $pending: Boolean
    $accepted: Boolean
    $acceptedBy: String
    $acceptedAt: String  
    $sold: Boolean
    $soldBy: String   
    $soldAt: String   
    $canceled: Boolean
    $canceledBy: String  
    $canceledAt: String  
    $canceledWhy: String
    
  ) {
    updateOrder(
      pending: $pending
      accepted: $accepted
      acceptedBy: $acceptedBy
      acceptedAt: $acceptedAt  
      sold: $sold
      soldBy: $soldBy 
      soldAt: $soldAt  
      canceled: $canceled
      canceledBy: $canceledBy  
      canceledAt: $canceledAt  
      canceledWhy: $canceledWhy
    ) {
      pending
      accepted
      acceptedBy
      acceptedAt  
      sold
      soldBy  
      soldAt 
      canceled
      canceledBy  
      canceledAt
      canceledWhy
    }
  }
  
`;



const db = firebase.firestore();

export const OrderTracking = ({TrackContext, data}) =>


{
  const [updateOrder, { Data, loading, error }] =
    useMutation(UpdateOrderMutation);

  //const { id, pending, accepted, acceptedBy, acceptedAt, sold, soldBy, soldAt, canceled, canceledBy, canceledAt, canceledWhy } = Data ;
  //e.id, e.pending, e.accepted, e.acceptedBy, e.acceptedAt, e.sold, e.soldBy, e.soldAt, e.canceled, e.canceledBy, e.canceledAt, e.canceledWhy
  
  //const variables = { id, pending, accepted, acceptedBy, acceptedAt, sold, soldBy, soldAt, canceled, canceledBy, canceledAt, canceledWhy };
    
  const [Message, SetMessage] = useState("")
  const resetMessage = () => SetMessage("")
  
  //console.log(Message)
  console.log(Data)

var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
var date = (currentdate.getDate()) + (currentdate.getMonth()+1)  +  (currentdate.getFullYear())


const a = data?.orders.edges.map(({ node })=> node)
const b = TrackContext?.number
const e = (b ==! undefined || b >= 0) ? a[b] : "" 

  const { user } = useAuth()

  const update = async (data) => {

    fetch('/api/update',{
      body: JSON.stringify(data),
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json() ).then((data) => SetMessage(data.message))
    .catch((err)=> SetMessage(err))
    
    
    ;
  
  } 
  const AcceptOrder = async () => {
    
    updateOrder({"id": e.id, "accepted": true, "acceptedBy": user?.email, "acceptedAt": datetime, "pending": false})
  }

  const CancelOrder = async () => {

    const  DatabaseSeed = {}

  }

  const SoldOrder = async () => {

    const  DatabaseSeed = {}

  }

return(

  <div className="modal fade" id="modal-tracking" tabIndex={-1} aria-labelledby="modal-tracking" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h6 className="font-weight-bolder text-center">
 {e.product_names + " (" + e.shop_commune + ")"}
  </h6>
<div>
<div class="row justify-content-center">
<img src={e.product_imagelinks} class="img-fluid shadow border-radius-lg w-50" style={{"objectFit": "cover", "aspectRatio": "1/1"}}/>
</div>
<br/>
<SuiBox class="col-12 pb-2" textAlign="left">


      <SuiProgress 
      
      value={e.sold ? 100 : e.canceled ? 100 : e.accepted ? 50 : e.pending ? 25 : 0} 
      color={e.sold ? "success" : e.canceled ? "error" : e.accepted ? "info" : e.pending ? "warning" : "secondary"} 
      gh label={false} />
<div class="row justify-content-between pt-2">
<p class={e.sold ? "col-4 text-start text-bold text-success" : e.canceled ? "col-4 text-start text-bold text-danger" : e.accepted ? "col-4 text-start text-bold text-info" : e.pending ? "col-4 text-start text-bold text-warning" : ""}>Commandée</p>
<p class={e.sold ? "col-4 text-center text-bold text-success" : e.canceled ? "col-4 text-center text-bold text-danger" : e.accepted ? "col-4 text-center text-bold text-info" : e.pending ? "col-4 text-center text-bold text-secondary" : ""}>Acceptée</p>
<p class={e.sold ? "col-4 text-end text-bold text-success" : e.canceled ? "col-4 text-end text-bold text-danger" : e.accepted ? "col-4 text-end text-bold text-secondary" : e.pending ? "col-4 text-end text-bold text-secondary" : ""}>{e.canceled ? "Annulée" : "Vendue"}</p>
</div>
      </SuiBox>
      
      </div>
      
  </div>
  <div className="card-body">
  
  <div class="row justify-content-center">
  
  {e.pending ? 
  <div class="col-6">
  <button type="button" class="btn bg-gradient-info" data-bs-toggle="modal" data-bs-target="#accept" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Accepter la commande</button>
  </div>
  : null}
  
  {(e.accepted && !e.sold) ? 
    <>
    <div class="col-6">
  <button type="button" class="btn bg-gradient-danger" data-bs-toggle="modal" data-bs-target="#cancel" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Annuler la commande</button>
  </div>
  <div class="col-6">
  <button type="button" class="btn bg-gradient-success" data-bs-toggle="modal" data-bs-target="#sold" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Marquer comme vendue</button>
  </div>
  </>
  : null}





  <div class="modal fade" id="accept" tabindex="-1" role="dialog" aria-labelledby="confirmationLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header justify-content-center">
        <h6 class="modal-title" id="confirmationLabel">Accepter la commande ?</h6>
      </div>
      <div class="modal-body">

  
  <div class="row justify-content-center">
  {error?.length > 1 ?
    <p>{error}</p>
    :
    <>
      <button type="button" class="btn bg-gradient-danger col-5 p-2 m-2" data-bs-dismiss="modal" data-target="#confirmation">Retour</button>
      <button type="button" class="btn bg-gradient-info col-5 p-2 m-2" onClick={AcceptOrder}>Confirmer</button>
      </>
    }
      </div>
      

      </div>
      
    </div>
  </div>
</div>
  </div> 
  
  </div>
  </div>

  </div>
  </div>
  </div>
  </div>

 

 
  )





}


