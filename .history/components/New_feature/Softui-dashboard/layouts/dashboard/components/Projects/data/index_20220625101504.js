// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiAvatar from "components/SuiAvatar";

import { useState, useEffect } from "react";

export default function data() {
  const [Data, setData] = useState([])
  const filteredData = [{Boutiques: Data[0]?.vendeurs, Prix: Data[0]?.product_price}]
  
  useEffect(()=> {
  
    fetch(`/api/fetch-table?pagination=${"0-2"}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}).then((res) => res.json() )
    .then((data) => {

      setData(data.displayOrders)

  
    }).catch((err)=> console.log(err))
  }, [])
console.log(Data)

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Boutiques", align: "left" },
      { name: "members", align: "left" },
      { name: "Prix", align: "center" },
      { name: "completion", align: "center" },
    ],
    
    rows:filteredData
    
      
   
  };
}
