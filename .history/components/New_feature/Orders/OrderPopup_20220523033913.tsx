import firebase from '../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import useToggle from '../../useful/toggle'
import {Wilaya, Commune} from './Wilaya'
import { orderStatus, UserContext } from '../../UserContext'
import Link from 'next/link'




const db = firebase.firestore();

export const OrderPopup = () =>

{
  

var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + "h"  
              + currentdate.getMinutes() + "min" 
var date = (currentdate.getDate()) + (currentdate.getMonth()+1)  +  (currentdate.getFullYear())

    const {OrderContext, SetOrderContext} = useContext(UserContext)
    const hit = OrderContext?.hit
    const vendeurs = hit?.fields.vendeurs
    const product_names = hit?.fields.product_names
    const product_imagelinks = hit?.fields.product_imagelinks
    const marques = hit?.fields.marques
    const categories = hit?.fields.categories
    const product_links = hit?.fields.product_links
    const product_prices = hit?.fields.product_prices
    const vendeurs_image = hit?.fields.vendeurs_image
    const villes1 = hit?.fields.villes1
    const adresses = hit?.fields.adresses
    const telephone1 = hit?.fields.telephone1
    const telephone2 = hit?.fields.telephone2
    const fix1 = hit?.fields.fix1
    const shopEmail = hit?.fields.email
    const facebook = hit?.fields.facebook
    const instagram = hit?.fields.instagram
    const horaires = hit?.fields.horaires
    const localisation = hit?.fields.localisation
    const stocks = hit?.fields.stocks
    const shop_website = hit?.fields.shop_website
    const product_country = hit?.fields.product_country
    const user_commune = hit?.fields.user_commune
    const livraison = hit?.fields.livraison
    const paiement = hit?.fields.paiement
    const type = hit?.fields.type
    const description1 = hit?.fields.description1
    const brand_name = hit?.fields.brand_name
    const description2 = hit?.fields.description2
    const prod_description = hit?.fields.prod_description
    const prod_specs_big_title = hit?.fields.prod_specs_big_title
    const total = hit?.fields.total


    //const boutique= OrderContext?.boutique
    //const product_name= OrderContext?.product_name //trouver une solution pour acceder a boutique et product_name
    const product_names_id = product_names?.replaceAll(' ', '_').replaceAll("/", "_")
    const vendeurs_id= vendeurs?.replaceAll(' ', '_').replaceAll("/", "_")
    
   console.log(OrderContext)
  const [isOrderTrigger, setOrderTrigger] = useState(null);
  const { user } = useAuth()
  const id = product_names_id + "_" + vendeurs_id + "_" + user.uid
  
  const [data, setData] = useState({
    userEmail: '',
    phoneNumber: '',
    lastName: '',
    firstName: '',
    countryName : 'Algeria',
    city: '',
    user_commune: '',
  })
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
  
  
  ;

  //const Order = db.collection("Orders").doc(product_name + "_" + boutique + "_" + user.uid)

  
  const isLastnameCompliant = data.lastName.length > 3
  const isFirstnameCompliant = data.firstName.length > 3
  const isPhoneCompliant = data.phoneNumber.length == 10
  const isCityCompliant = data.city !== ""
  const isCommuneCompliant = data.user_commune !== ""
  const OrderConfirmation = isLastnameCompliant && isFirstnameCompliant && isPhoneCompliant && isCityCompliant && isCommuneCompliant

  /*const doesOrderExist = async () => {

     const Order = await db.collection("Orders").doc(product_name + "_" + boutique + "_" + user.uid)
      
     try {Order.get()
        .then((doc) => {
        if (doc.exists) {
          console.log("j'existe")
      } else {
        "comme si je n'existais pas.."
      }
    })} catch (err) {
      console.log(err);}
  }*/

  

  const addOrder = async (e: any) => {
  e.preventDefault()
    const Order = await db.collection("Orders").doc(id)
    const UpdateMetrics = await db.collection("Summary").doc("Total")
    
    try {Order.get()
      .then((doc) => {
      if (doc.exists) {
        Order.update({

          Infos_boutique: hit?.fields,userID: user.uid, userEmail: data.userEmail, phoneNumber: data.phoneNumber, lastName: data.lastName, firstName: data.firstName, countryName: data.countryName, city: data.city, user_commune: data.user_commune, datetime, sold: false
      });
      SetOrderContext({...OrderContext, isOrderModified: true, isOrderTaken: true})

    } else {
      Order.set({Infos_boutique: hit?.fields, userID: user.uid, userEmail: data.userEmail, phoneNumber: data.phoneNumber, lastName: data.lastName, firstName: data.firstName, countryName: data.countryName, city: data.city, user_commune: data.user_commune, datetime, sold:false});
      UpdateMetrics.update({
        CA: firebase.firestore.FieldValue.increment(Number(product_prices)),
        Orders_Count: firebase.firestore.FieldValue.increment(1),
        Orders_Pending: firebase.firestore.FieldValue.increment(1)})
      SetOrderContext({...OrderContext, isOrderTaken: true, isOrderModified: false})
    }
  })} catch (err) {
    console.log(err);}
  }
    // Update Database backup
    
    const DatabaseSeed= Object.assign(Object.assign(data, hit?.fields), {id : id, shopEmail: shopEmail})
      delete DatabaseSeed.email
      delete DatabaseSeed.__typename
      DatabaseSeed.categories = DatabaseSeed.categories?.toString()
      DatabaseSeed.paiement = DatabaseSeed.paiement?.toString()
      console.log(DatabaseSeed)
    console.log(data)
    
    
    
    const tryPrisma = async () => {
      
      create(DatabaseSeed)

      }
    





//console.log("isOrderModified: " +  data.isOrderModified)
//console.log("isOrderTaken: " +  data.isOrderTaken)
//console.log(Order ? "exist" : "doesn't exist")




return(

  <div className="modal fade" id="modal-form-order" tabIndex={-1} aria-labelledby="modal-form-order" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">

{!OrderContext?.isOrderTaken ? 
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient">
 Effectuer une commande
  </h3>
  <p className="mb-0 text-small">
  Veuillez entrer vos informations s'il vous plait. <br/>
  Nous vous contacterons dans les plus brefs délais afin de confirmer votre commande.
  </p>
  </div>
  <div className="card-body">
  <form role="form text-left" onSubmit={tryPrisma} method="post">
  <div className="row">
  <div className="col-4">
  <label>Prénom</label>
  <div className="input-group mb-3">
  <input 
  onChange={(e: any) =>
    setData({
      ...data,
      firstName: e.target.value,
    })
  }
  value={data.firstName}
  
  type="firstName" className={isFirstnameCompliant ? "form-control is-valid" : isOrderTrigger && !isFirstnameCompliant ? "form-control is-invalid" : "form-control"} placeholder="Prénom" aria-label="Prénom" aria-describedby="Prénom"/>
  </div>
  </div>

<div className="col-4">
  <label>Nom</label>
  <div className="input-group mb-3">
  <input 
  onChange={(e: any) =>
    setData({
      ...data,
      lastName: e.target.value,
    })
  }
  value={data.lastName}
  
  type="lastName" className={isLastnameCompliant ? "form-control is-valid" : isOrderTrigger && !isLastnameCompliant ? "form-control is-invalid" : "form-control"} placeholder="Nom" aria-label="Nom" aria-describedby="Nom"/>
  </div>
  </div>
  <div className="col-4">
  <label>Téléphone</label>
  <div className="input-group mb-3">
  <input
  onChange={(e: any) =>
    setData({
      ...data,
      phoneNumber: e.target.value,
    })
  }
  value={data.phoneNumber}
  type="tel" className={isPhoneCompliant ? "form-control is-valid" : isOrderTrigger && !isPhoneCompliant ? "form-control is-invalid" : "form-control"} placeholder="Téléphone" aria-label="Téléphone" aria-describedby="Téléphone"/>
  </div>
  </div>

  </div>
  <label>Email</label>
  <div className="input-group mb-3">
  <input 
  onChange={(e: any) =>
    setData({
      ...data,
      userEmail: e.target.value,
    })
  }
  value={data.userEmail}
  
  type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
  </div>
  
  <div className="row">
  <div className="col-6">
  <label>Wilaya</label>
  <select onChange={(e:any)=> setData({
      ...data,
      city: e.target.value,
    })}
    className={isCityCompliant ? "form-control is-valid" : isOrderTrigger && !isCityCompliant ? "form-control is-invalid" : "form-control"} name="choices-button-city" id="choices-button-city" placeholder="Wilaya">
  <option value="" className="text-bold" >--Choisir une wilaya--</option>
  {Wilaya.map((wilaya)=> <option value={wilaya} selected={wilaya == data.city ? true : false} >{wilaya}</option>)}

</select>
</div>
<br/>
<div className="col-6">
<label>Commune</label>
<select onChange={(e:any)=> setData({
      ...data,
      user_commune: e.target.value,
    })}
    className={isCommuneCompliant ? "form-control is-valid" : isOrderTrigger && !isCommuneCompliant ? "form-control is-invalid" : "form-control"} name="choices-button-commune" id="choices-button-commune" placeholder="Commune" >
  <option value="" className="text-bold"  >--Choisir une commune--</option>
  {Commune[Wilaya.indexOf(data.city)]?.map((valeur)=> <option value={valeur} selected={valeur == data.user_commune ? true : false}>{valeur}</option>)}
</select>
</div>
</div>

  <div className="text-center">
  <button  type={OrderConfirmation ? "submit" : "button"} onClick={()=> OrderConfirmation ? setOrderTrigger(false) : setOrderTrigger(true)} className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
  Commander
  </button>
  </div>
  </form>
  </div>
  </div>
:
<div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient text-center">
  Commande prise en compte
  </h3>
  <p className="mb-0 text-small text-center">
  Nous vous contacterons dans les plus brefs délais <br/>
  Vous pouvez suivre l'état de votre commande <Link href='' >ici</Link>
  </p>
  </div>
  <div className="card-body">
  <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
  Ok
  </button>
  
  </div>
  </div>
}

  </div>
  </div>
  </div>
  </div>

 

 
  )





}


