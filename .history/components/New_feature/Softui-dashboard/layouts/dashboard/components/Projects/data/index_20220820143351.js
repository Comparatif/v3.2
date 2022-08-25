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
query ($first: Int, $after: String) {
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

  const { endCursor, hasNextPage } = data.orders.pageInfo;
  

  const filteredData = data?.orders.edges.map(({ node })=> Object.assign({Boutiques: node.vendeurs, Prix: node.product_price},{}))
  const filterTest = data?.orders.edges.map(({ node })=> {
    
  const englishDate = node.createdAt.split('T')[0]
  const day = englishDate.split('-')[2]
  const monthWithZero = node.createdAt.split('T')[0].split('-')[1]
  const month = monthWithZero == "10" ? monthWithZero : monthWithZero.replace("0","")
  const year = node.createdAt.split('T')[0].split('-')[0]
  const frenchDate = day + "/" + month + "/" + year
  const heure = node.createdAt.split('T')[1].split('.')[0]
    
    return(
    Object.assign({
    Produits: [node.product_imagelinks, 
      
      <a target="_blank" style={{cursor: "pointer"}} href={node.product_links}>{node.product_names + " (" + node.shop_commune + ")"}</a>],
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
        {node.city}
      </SuiBox>
    ),
    Commune: (
      <SuiBox display="flex" py={1}>
        {node.user_commune}
      </SuiBox>
    ),
    
    Prenom: (
      <SuiBox display="flex" py={1}>
        {node.firstName}
      </SuiBox>
    ),
    Nom: (
      <SuiBox display="flex" py={1}>
        {node.lastName}
      </SuiBox>
    ),
    Boutiques: (
      <SuiBox display="flex" py={1}>
        <img src={node.vendeurs_image} style={{"width":"5em", "borderRadius": "10px"}} />
      </SuiBox>
    ),
    Telephone: (
      <SuiBox display="flex" py={1}>
        {node.phoneNumber}
      </SuiBox>
    ),
    Prix: (
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {node.product_price + " DA"}
      </SuiTypography>
    ),
    Suivi: (
      <SuiBox width="8rem" textAlign="left">

      <SuiProgress 
      
      value={node.sold ? 100 : node.canceled ? 100 : node.accepted ? 50 : node.pending ? 25 : 0} 
      color={node.sold ? "success" : node.canceled ? "error" : node.accepted ? "info" : node.pending ? "warning" : "secondary"} 
      variant="gradient" label={false} />

      </SuiBox>
    )
  },
  
  {
{
  hasNextPage ? 
  (<button
class="blabla"



>


</button>)

: ()

}


  })
  
  )})

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
