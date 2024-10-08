/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import ProcessedData from "layouts/dashboard/components/Projects/data";





function Projects({loading, data, error, fetchMore, user}) {
  
  const [menu, setMenu] = useState(null);
  const [filterState, setFilterState] = useState("Acceptées")
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  
 
const CheckIcon = (<Icon
sx={{
  fontWeight: "bold",
  color: ({ palette: { info } }) => info.main,
  mt: -0.5,
}}
>
done
</Icon>)

  const { columns, rows } = ProcessedData({ loading, data, error });
  const {startCursor, endCursor, hasPrevPage, hasNextPage } = data.orders.pageInfo;
  let pending
  let acceptedBy
  let canceledBy
  let soldBy

  useEffect(()=> {
    
  
    if(filterState=="En Attente") {
      pending = true, acceptedBy= null, canceledBy= null, soldBy= null
    };
    
    if(filterState=="Acceptées") {
      pending = false, acceptedBy= user?.email, canceledBy= null, soldBy= null
    };
  
    if(filterState=="Annulées") {
      pending = false, acceptedBy= user?.email, canceledBy= user?.email, soldBy= null
    };
  
    if(filterState=="Vendues") {
      pending = false, acceptedBy= user?.email, canceledBy= null, soldBy= user?.email
    };
    fetchMore({
      variables: { "acceptedBy": acceptedBy, "pending": pending, "soldBy": soldBy, "canceledBy": canceledBy},
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.orders.edges = [
          ...fetchMoreResult.orders.edges
  
        ];
        return fetchMoreResult;
      },
    });
  
  },[filterState])

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={() => setFilterState("En Attente")} >En attente {filterState == "En Attente" ? CheckIcon : ""}</MenuItem>
      <MenuItem onClick={() => setFilterState("Acceptées")} >Acceptées {filterState == "Acceptées" ? CheckIcon : ""}</MenuItem>
      <MenuItem onClick={() => setFilterState("Annulées")} >Annulées {filterState == "Annulées" ? CheckIcon : ""}</MenuItem>
      <MenuItem onClick={() => setFilterState("Vendues")} >Vendues {filterState == "Vendues" ? CheckIcon : ""}</MenuItem>
      
    </Menu>
  );

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" gutterBottom>
            Projects
          </SuiTypography>
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            {CheckIcon}
            <SuiTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>{data?.orders.edges.length}</strong> {data?.orders.edges.length < 2 ? filterState.replace("s",""): filterState}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SuiBox>
        {renderMenu}
      </SuiBox>
      <SuiBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SuiBox>
      <br/>
      <div className="pagination pagination-info justify-content-center">
    
        {
          hasPrevPage ? 
          (
            <button className="btn bg-gradient-info mx-2 px-2"
            onClick={() => {
              fetchMore({
                variables: { "last": 10, "before": startCursor, "pending" : pending, "acceptedBy": acceptedBy, "canceledBy": canceledBy, "soldBy": soldBy },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.orders.edges = [
                    ...fetchMoreResult.orders.edges

                  ];
                  return fetchMoreResult;
                },
              });
            }}
        >
        Back
        </button>)
        : <button className="btn bg-gradient-info mx-2 px-2" disabled={true}>Back</button>
        }
       
        
    
        {
          hasNextPage ? 
          (
            <button className="btn bg-gradient-info mx-2 px-2"
            onClick={() => {
              fetchMore({
                variables: {"first": 10, "after": endCursor, "pending" : pending, "acceptedBy": acceptedBy, "canceledBy": canceledBy, "soldBy": soldBy },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.orders.edges = [
                    ...fetchMoreResult.orders.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
        >
        Next
        </button>)
        : <button className="btn bg-gradient-info mx-2 px-2" disabled={true}>Next</button>
        }
        </div>
        
    </Card>
  );
}

export default Projects;
