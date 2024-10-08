// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";
import { orderStatus, TrackingContext, Sub } from '../../../../../../../UserContext.js'
import { useAuth } from '../../../../../../../New_feature/context/AuthContext'
import firebase from '../../../../../../../firebase/firebase/clientApp'
import { useState, useEffect, useContext } from "react";
//import {list} from "../../../../../../../../prisma/db.ts"


export default function data() {
  const [Data, setData] = useState()
  const {TrackContext, SetTrackContext} = useContext(TrackingContext)



  useEffect(()=> {
  
    fetch(`/api/fetch-table?pagination=${"0-20"}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}).then((res) => res.json() )
    .then((data) => {
      SetTrackContext({
        ...TrackContext,
        data: data.displayOrders
      })
    }).catch((err)=> console.log(err))
    
  }, [])

  



 

  /*
  useEffect(()=> {
  
    fetch(`/api/listener`,
     {
      headers : { 
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
       }})
    .then((res) => res )
    .then((data) => {
      setData(data)
    }).catch((err)=> console.log(err))
    
  }, [])

*/
/*
  const evtSource = new EventSource("/api/listener", { withCredentials: true })
  evtSource.onmessage = function(event) {
    event ? setData(event) : null
    
  }
  console.log(Data)*/
  

  

  
    const filteredData = TrackContext?.data?.map((e)=> Object.assign({Boutiques: e.vendeurs, Prix: e.product_price},{}))
    const filterTest = TrackContext?.data?.map((e)=> {
    
    const englishDate = e.createdAt.split('T')[0]
  const day = englishDate.split('-')[2]
  const monthWithZero = e.createdAt.split('T')[0].split('-')[1]
  const month = monthWithZero == "10" ? monthWithZero : monthWithZero.replace("0","")
  const year = e.createdAt.split('T')[0].split('-')[0]
  const frenchDate = day + "/" + month + "/" + year
  const heure = e.createdAt.split('T')[1].split('.')[0]
    
    return(
    Object.assign({
    Produits: [e.product_imagelinks, 
      
      <a target="_blank" rel="noreferrer" style={{cursor: "pointer"}} href={e.product_links}>{e.product_names + " (" + e.shop_commune + ")"}</a>],
      Date: (
        <SuiBox display="flex" py={1}>
          {frenchDate}
        </SuiBox>
      ),
      Heure: (
        <SuiBox display="flex" py={1}>
          {heure}
        </SuiBox>
      ),
    
      
    Wilaya: (
      <SuiBox display="flex" py={1}>
        {e.city}
      </SuiBox>
    ),
    Commune: (
      <SuiBox display="flex" py={1}>
        {e.user_commune}
      </SuiBox>
    ),
    
    Prenom: (
      <SuiBox display="flex" py={1}>
        {e.firstName}
      </SuiBox>
    ),
    Nom: (
      <SuiBox display="flex" py={1}>
        {e.lastName}
      </SuiBox>
    ),
    Boutiques: (
      <SuiBox display="flex" py={1}>
        <img src={e.vendeurs_image} style={{"width":"5em", "borderRadius": "10px"}} />
      </SuiBox>
    ),
    Telephone: (
      <SuiBox display="flex" py={1}>
        {e.phoneNumber}
      </SuiBox>
    ),
    Prix: (
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {e.product_price + " DA"}
      </SuiTypography>
    ),
    Suivi: (
      <SuiBox width="8rem" textAlign="left">

      <SuiProgress 
      
      value={e.sold ? 100 : e.canceled ? 100 : e.accepted ? 50 : e.pending ? 25 : 0} 
      color={e.sold ? "success" : e.canceled ? "error" : e.accepted ? "info" : e.pending ? "warning" : "secondary"} 
      variant="gradient" label={false} />

      </SuiBox>
    )
  },{}))})

  return {
    columns: [
      { name: "Produits", align: "left" },
      { name: "Date", align: "center" },
      { name: "Heure", align: "center" },
      { name: "Wilaya", align: "center" },
      { name: "Commune", align: "center" },
      { name: "Prenom", align: "center" },
      { name: "Nom", align: "center" },
      { name: "Telephone", align: "center" },
      { name: "Boutiques", align: "center" },
      { name: "Prix", align: "center" },
      { name: "Suivi", align: "center" },
    ],
    
    rows:filterTest
    
    
      
   
  };
}
