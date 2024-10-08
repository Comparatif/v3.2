import firebase from '../../../../../../../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../../../../../../../context/AuthContext'
import { useRouter } from 'next/router'
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";
import {Accept} from "./Accept"
import {Sell} from "./Sell"
import {Cancel} from "./Cancel"

//GraphQL
import {gql, useQuery, useMutation} from "@apollo/client";

const UpdateOrderMutation = gql`
  mutation (
    $id: String
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
      id: $id
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
      id
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



const db = firebase?.firestore();

export const OrderTracking = ({TrackContext, data}) =>


{

  

  const [updateOrder, { Data, loading, error }] =
    useMutation(UpdateOrderMutation);

  
  //e?.id, e?.pending, e?.accepted, e?.acceptedBy, e?.acceptedAt, e?.sold, e?.soldBy, e?.soldAt, e?.canceled, e?.canceledBy, e?.canceledAt, e?.canceledWhy
  
  //const variables = { id, pending, accepted, acceptedBy, acceptedAt, sold, soldBy, soldAt, canceled, canceledBy, canceledAt, canceledWhy };
  const [CanceledWhyHook, setCanceledWhyHook] = useState({
    canceledWhy: '',
    textAera: '',
  })
  const CommentToReturn = CanceledWhyHook.canceledWhy + CanceledWhyHook.textAera
  console?.log(CommentToReturn)
  const [denyAccess, SetdenyAccess] = useState()
  const [Message, SetMessage] = useState("")
  const resetMessage = () => SetMessage("")
  
  //console?.log(Message)
  console?.log({ Data, loading, error })

var currentdate = new Date(); 
var datetime =   currentdate?.getDate() + "/"
              + (currentdate?.getMonth()+1)  + "/" 
              + currentdate?.getFullYear() + " @ "  
              + currentdate?.getHours() + "h"  
              + currentdate?.getMinutes() + "min" 
var date = (currentdate?.getDate()) + (currentdate?.getMonth()+1)  +  (currentdate?.getFullYear())


const a = data?.orders.edges.map(({ node })=> node)
const b = TrackContext?.number
const e = (b ==! undefined || b >= 0) ? a[b] : "" 
//const { id, pending, accepted, acceptedBy, acceptedAt, sold, soldBy, soldAt, canceled, canceledBy, canceledAt, canceledWhy } = e ;

useEffect(() => {
  if (e?.accepted) {user?.email != e?.acceptedBy ? SetdenyAccess(true) : SetdenyAccess(false)};
  if (e?.canceled) {user?.email != e?.canceledBy ? SetdenyAccess(true) : SetdenyAccess(false)};
  if (e?.sold) {user?.email != e?.soldBy ? SetdenyAccess(true) : SetdenyAccess(false)};
  if (e?.pending) { SetdenyAccess(false) };
  if (user?.email === "samiboudehri@hotmail.fr") { SetdenyAccess(false) };

}, [b])

  
  

  
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

    updateOrder({variables: {id: e?.id, accepted: true, acceptedBy: user?.email, acceptedAt: datetime, pending: false}})

  }

  const CancelOrder = async () => {

    updateOrder({variables: {id: e?.id, canceled: true, canceledBy: user?.email, canceledAt: datetime, canceledWhy: CommentToReturn}})

  }

  const SellOrder = async () => {

    updateOrder({variables: {id: e?.id, sold: true, soldBy: user?.email, soldAt: datetime }})

  }

return(

  <div className="modal fade" id="modal-tracking" tabIndex={-1} aria-labelledby="modal-tracking" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h6 className="font-weight-bolder text-center">
 {e?.product_names + " (" + e?.shop_commune + ")"}
  </h6>
<div>
<div className="row justify-content-center">
<img src={e?.product_imagelinks} className="img-fluid shadow border-radius-lg w-50" style={{"objectFit": "cover", "aspectRatio": "1/1"}}/>
</div>
<br/>
<SuiBox className="col-12 pb-2" textAlign="left">


      <SuiProgress 
      
      value={e?.sold ? 100 : e?.canceled ? 100 : e?.accepted ? 50 : e?.pending ? 25 : 0} 
      color={e?.sold ? "success" : e?.canceled ? "error" : e?.accepted ? "info" : e?.pending ? "warning" : "secondary"} 
      gh label={false} />
<div className="row justify-content-between pt-2">
<p className={e?.sold ? "col-4 text-start text-bold text-success" : e?.canceled ? "col-4 text-start text-bold text-danger" : e?.accepted ? "col-4 text-start text-bold text-info" : e?.pending ? "col-4 text-start text-bold text-warning" : ""}>Commandée</p>
<p className={e?.sold ? "col-4 text-center text-bold text-success" : e?.canceled ? "col-4 text-center text-bold text-danger" : e?.accepted ? "col-4 text-center text-bold text-info" : e?.pending ? "col-4 text-center text-bold text-secondary" : ""}>Acceptée</p>
<p className={e?.sold ? "col-4 text-end text-bold text-success" : e?.canceled ? "col-4 text-end text-bold text-danger" : e?.accepted ? "col-4 text-end text-bold text-secondary" : e?.pending ? "col-4 text-end text-bold text-secondary" : ""}>{e?.canceled ? "Annulée" : "Vendue"}</p>
</div>
      </SuiBox>
      
      </div>
      
  </div>
  <div className="card-body">
  
  <div className="row justify-content-center">
{denyAccess ?  <p>Vous n'avez pas la permission de voir cette commande</p> :

<>
  {e?.pending ? 
  <div className="col-6">
  <button type="button" className="btn bg-gradient-info" data-bs-toggle="modal" data-bs-target="#accept" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Accepter la commande</button>
  </div>
  : null}
  {(e?.accepted && !e?.sold) ? 
    <>
    <div className="col-6">
  <button type="button" className="btn bg-gradient-danger" data-bs-toggle="modal" data-bs-target="#cancel" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Annuler la commande</button>
  </div>
  <div className="col-6">
  <button type="button" className="btn bg-gradient-success" data-bs-toggle="modal" data-bs-target="#sell" id="btn-fontsize-product" onClick={resetMessage} data-animation="true">Marquer comme vendue</button>
  </div>
  </>
  : null}
<Accept loading={loading} e={e} AcceptOrder={AcceptOrder} />
<Sell loading={loading} e={e} SellOrder={SellOrder} />
<Cancel loading={loading} e={e} CancelOrder={CancelOrder} CanceledWhyHook={CanceledWhyHook} setCanceledWhyHook={setCanceledWhyHook} />
  

  </>}
</div> 
  





  </div>
  </div>

  </div>
  </div>
  </div>
  </div>

 

 
  )





}


