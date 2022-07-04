// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { useState, useEffect } from "react";

export default function data() {
  const [Data, setData] = useState([])

  useEffect(()=> {
  
    fetch(`/api/fetch-table?pagination=${"0-10"}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}).then((res) => res.json() )
    .then((data) => {

      setData(data.displayOrders)

  
    }).catch((err)=> console.log(err))
  }, [])
console.log(Data)

  
    const filteredData = Data.map((e)=> Object.assign({Boutiques: e.vendeurs, Prix: e.product_price},{}))
    const filterTest = Data.map((e)=> Object.assign({
    Produits: [e.product_imagelinks, 
      
      <a>{e.product_names + " (" + e.shop_commune + ")"}</a>],
    Nom: (
      <SuiBox display="flex" py={1}>
        {e.lastName}
      </SuiBox>
    ),
    Prenom: (
      <SuiBox display="flex" py={1}>
        {e.firstName}
      </SuiBox>
    ),
    Boutiques: (
      <SuiBox display="flex" py={1}>
        <img src={e.vendeurs_image} style={{"width":"5em", "borderRadius": "10px"}} />
      </SuiBox>
    ),
    Acheteur: (
      <SuiBox display="flex" py={1}>
        {e.phoneNumber}
      </SuiBox>
    ),
    Prix: (
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {e.product_price + " DA"}
      </SuiTypography>
    ),
    completion: (
      <SuiBox width="8rem" textAlign="left">
        <SuiProgress value={60} color="info" variant="gradient" label={false} />
      </SuiBox>
    )
  },{}))

  return {
    columns: [
      { name: "Produits", align: "left" },
      { name: "Nom", align: "center" },
      { name: "Prenom", align: "center" },
      { name: "Acheteur", align: "center" },
      { name: "Boutiques", align: "center" },
      { name: "Prix", align: "center" },
      { name: "completion", align: "center" },
    ],
    
    rows:filterTest
    
    
      
   
  };
}
