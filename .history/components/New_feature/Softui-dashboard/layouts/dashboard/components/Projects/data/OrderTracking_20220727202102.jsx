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
import { useAuth } from '../../../../../../../New_feature/context/AuthContext'
import firebase from '../../../../../../../firebase/firebase/clientApp'
import Link from 'next/link'




const db = firebase.firestore();

export const OrderTracking = () =>

{
  

var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
var date = (currentdate.getDate()) + (currentdate.getMonth()+1)  +  (currentdate.getFullYear())



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
  
  
  
  

    const tryPrisma = async () => {
      // Update Database backup
      //e.preventdefault()
      //e.stopImmediatePropagation()
      
      
      const  DatabaseSeed = Object.assign(Object.assign(data, hit?.fields), {orderId : orderId, shopEmail: shopEmail, shop_commune: shop_commune, product_price:Number(product_prices)})
      delete DatabaseSeed.email
      delete DatabaseSeed.__typename
      delete DatabaseSeed.commune
      delete DatabaseSeed.product_prices
      DatabaseSeed.livraison?.includes('UPS') ? delete DatabaseSeed.livraison : null
      DatabaseSeed.categories = DatabaseSeed.categories?.toString()
      DatabaseSeed.paiement = DatabaseSeed.paiement?.toString()
      //console.log(DatabaseSeed)
      console.log(product_prices)
      OrderConfirmation ? 
      (setOrderTrigger(false),
      
      user?
      (
        setData({
          ...data,
          userEmail: user.email,
        }),
      create(DatabaseSeed),
      SetOrderContext({...OrderContext, isOrderTaken: true, isOrderModified: false}))


      : 
      fetch(`/api/verify-existance?searchString=${orderId}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }}).then((res) => res.json() )
      .then((data) => {
        console.log("db: " + data.orderId)
        console.log("local: " + orderId)
        data.orderId == orderId?
        SetOrderContext({...OrderContext, isOrderTaken: false, isOrderAlreadyTaken: true, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names})
        :
        ""
      }).catch((err)=> {create(DatabaseSeed),SetOrderContext({...OrderContext, isOrderTaken: true, isOrderAlreadyTaken: false, isOrderModified: false, hit: hit, boutique:vendeurs, product_name: product_names}); console.log(err)})

      
      
      
      
      
      )

      : setOrderTrigger(true)

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
  <p className="mb-0 text-small">
  Veuillez entrer vos informations s'il vous plait. <br/>
  Nous vous contacterons dans les plus brefs délais afin de confirmer votre commande.
  </p>
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


