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





function Projects({loading, data, error, fetchMore}) {
  

  
  const [menu, setMenu] = useState(null);
  const [filters, setFilters] = useState({
    acceptedBy: "",
    pending: "",
    canceledBy: "",
    soldBy: ""
  })

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);



  const { columns, rows } = processedData({ loading, data, error });
  const {startCursor, endCursor, hasPrevPage, hasNextPage } = data.orders.pageInfo;
  

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
      <MenuItem onClick={closeMenu}>En attente</MenuItem>
      <MenuItem onClick={closeMenu}>Acceptées</MenuItem>
      <MenuItem onClick={closeMenu}>Annulées</MenuItem>
      <MenuItem onClick={closeMenu}></MenuItem>
      
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
      <br/>
      <div class="pagination pagination-info justify-content-center">
    
        {
          hasPrevPage ? 
          (
            <button class="btn bg-gradient-info mx-2 px-2"
            onClick={() => {
              fetchMore({
                variables: { "last": 10, "before": startCursor},
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
        : <button class="btn bg-gradient-info mx-2 px-2" disabled={true}>Back</button>
        }
       
        
    
        {
          hasNextPage ? 
          (
            <button class="btn bg-gradient-info mx-2 px-2"
            onClick={() => {
              fetchMore({
                variables: {"first": 10, "after": endCursor },
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
        : <button class="btn bg-gradient-info mx-2 px-2" disabled={true}>Next</button>
        }
        </div>
        
    </Card>
  );
}

export default Projects;
