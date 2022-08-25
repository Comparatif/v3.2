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

import { useState } from "react";

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
import processedData from "layouts/dashboard/components/Projects/data";

//GraphQl
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



function Projects() {
  

  const { loading, data, error, fetchMore } = useQuery(QueryOrders, {
    variables: {
    first:5
  },
});
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

if (loading) {
  return <p>Loading....</p>
  
}
if (error) {
  return <p>Oops, something went wrong</p>
}

  const { columns, rows } = processedData({ loading, data, error });
  const {endCursor, hasNextPage } = data.orders.pageInfo;
  const start
  //console.log(data?.orders.pageInfo)

  

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
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
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
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
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
      <SuiBox width="8rem" textAlign="left">
    
        {
          hasNextPage ? 
          (
            <button class="blabla"
            onClick={() => {
              fetchMore({
                variables: { first: -5, after: startCursor },
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
        : (<p>You've reached the start ! {" "}</p>)
        }
        </SuiBox>
        <SuiBox width="8rem" textAlign="left">
    
        {
          hasNextPage ? 
          (
            <button class="blabla"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
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
        : (<p>You've reached the end ! {" "}</p>)
        }
        </SuiBox>
    </Card>
  );
}

export default Projects;
