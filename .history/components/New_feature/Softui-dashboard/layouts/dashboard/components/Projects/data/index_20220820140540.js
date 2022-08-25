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

import {gql, useQuery} from "@apollo/client";

const QueryOrders = gql`
query Orders($first: Int, $after: String) {
  orders(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        orderId
        createdAt
        updatedAt
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
        userEmail
        emailVerified
        firstName
        lastName
        phoneNumber
        countryName
        city
        user_commune
        vendeurs
        villes1
        adresses
        telephone1
        telephone2
        fix1
        shopEmail
        facebook
        instagram
        horaires
        localisation
        shop_website
        shop_commune
        livraison
        paiement
        vendeurs_image
        product_names
        product_imagelinks
        marques
        categories
        product_links
        product_price
        stocks
        product_country
        product_commune
        type
      }
    }
  }
}

`;

export default function data() {
  const { loading, data, error, fetchMore } = useQuery(QueryOrders, {variables: {
    first:2,
  },
});

  //const { endCursor, hasNextPage } = data.orders.pageInfo;
  console.log( data )

  const filteredData = data?.orders.edges..map((e)=> Object.assign({Boutiques: e.vendeurs, Prix: e.product_price},{}))
  const filterTest = data?.orders.map((e)=> {
    
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
      
      <a target="_blank" style={{cursor: "pointer"}} href={e.product_links}>{e.product_names + " (" + e.shop_commune + ")"}</a>],
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
