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

import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SuiBox from "../../components/SuiBox";
import SuiTypography from "../../components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import MiniStatisticsCard from "../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "../../examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "../../assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "../../layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "../../layouts/dashboard/components/WorkWithTheRockets";
import Projects from "../../layouts/dashboard/components/Projects";
import {OrderTracking} from "../../layouts/dashboard/components/Projects/data/OrderTracking";
import OrderOverview from "../../layouts/dashboard/components/OrderOverview";

// Data
//import reportsBarChartData from "../../layouts/dashboard/data/reportsBarChartData";
//import gradientLineChartData from "../../layouts/dashboard/data/gradientLineChartData";

import useToggle from '../../../../useful/toggle'
//Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../../firebase/firebase/clientApp";


function Dashboard() {
  const [CA, setCA] = useState('Loading...')
  const [OrdersNumber, setOrdersNumber] = useState('Loading...')
  const [Sold, setSold] = useState('Loading...')
  const [Pending, setPending] = useState('Loading...')
  const [data, setData] = useState([])
  const [LastWeeksData, setLastWeeksData] = useState([])
  const [WeeksBeforeLastWeekData, setWeeksBeforeLastWeekData] = useState([])
  const [isCA, toggleCA] = useToggle();
  const [isOrderNumber, toggleOrderNumber] = useToggle();
  const [isSold, toggleSold] = useToggle();
  const [isPending, togglePending] = useToggle();
  const [isCanceled, toggleCanceled] = useToggle();
  const [menu, setMenu] = useState(null);
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
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
      <MenuItem onClick={()=> {closeMenu(), toggleCA()}} selected={isCA}>Chiffre d'affaire</MenuItem>
      <MenuItem onClick={()=> {closeMenu(), toggleOrderNumber()}} selected={!isOrderNumber}>Nombre de commandes</MenuItem>
      <MenuItem onClick={()=> {closeMenu(), toggleSold()}} selected={isSold}>Vendues</MenuItem>
      <MenuItem onClick={()=> {closeMenu(), togglePending()}} selected={isPending}>En Attente</MenuItem>
      <MenuItem onClick={()=> {closeMenu(), toggleCanceled()}} selected={isCanceled}>Annulées</MenuItem>
    </Menu>);

  const { size } = typography;
  
  



// Firestore
const db = firebase.firestore();

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());




  //Fetch data
useEffect(()=> {
  
  fetch(`/api/fetch-data`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}).then((res) => res.json() )
  .then((data) => {
    setCA(data.CA._sum.product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+ " DZD");
    setOrdersNumber(data.postCount);
    setSold(data.soldCount);
    setPending(data.pendingCount);
    
    setLastWeeksData(data.LastWeeksData)
    setWeeksBeforeLastWeekData(data.WeeksBeforeLastWeekData);

  }).catch((err)=> console.log(err))
}, [])
 
  
const h24 = (24 * 60 * 60 * 1000)

 const Last7DaysArray = '0,1,2,3,4,5,6'.split(',').map(function(n) {
  var d = new Date();
  d.setDate(d.getDate() - n);

  return (function(day, month, year) {
      return [day, month, year].join('/');

  })
  
  (d.getDate(), d.getMonth() +1, d.getFullYear());
}).join(",").split(",").reverse()

const WeekBeforeThisWeek = '7,8,9,10,11,12,13'.split(',').map(function(n) {
  var d = new Date();
  d.setDate(d.getDate() - n);

  return (function(day, month, year) {
      return [day, month, year].join('/');

  })
  
  (d.getDate(), d.getMonth() +1, d.getFullYear());
}).join(",").split(",").reverse()



  const filterData =({date,ligne}) => {
    const englishDate = ligne.createdAt.split('T')[0]
    const day = englishDate.split('-')[2]
    const monthWithZero = ligne.createdAt.split('T')[0].split('-')[1]
    const month = monthWithZero == "10" ? monthWithZero : monthWithZero.replace("0","")
    const year = ligne.createdAt.split('T')[0].split('-')[0]
    const frenchDate = day + "/" + month + "/" + year
      return(frenchDate===date)}

  const reducer = (a, b) => a + b ;
  const CA7D = Last7DaysArray.map((date)=>LastWeeksData?.filter((ligne)=> filterData({date,ligne}))
  .map((c) => Number(c?.product_price))
  .reduce(reducer,0))

  const CAlastWeek = WeekBeforeThisWeek.map((date)=>WeeksBeforeLastWeekData?.filter((ligne) => filterData({date,ligne}))
  .map((c) => Number(c?.product_price))
  .reduce(reducer,0))

  const ChangeFromLastWeek = ((CA7D.reduce(reducer,0) - CAlastWeek.reduce(reducer,0)) / CAlastWeek.reduce(reducer,0))*100

  const Sold7D = Last7DaysArray.map((date)=>LastWeeksData?.filter((ligne) => filterData({date,ligne}) && (ligne.sold === true)).length)

  const Pending7D = Last7DaysArray.map((date)=>LastWeeksData?.filter((ligne) => filterData({date,ligne}) && (ligne.sold === false)).length)

  const Canceled7D = Last7DaysArray.map((date)=>LastWeeksData?.filter((ligne) => filterData({date,ligne}) && (ligne.canceled === true)).length)

  const OrdersNumber7D = Last7DaysArray.map((date)=>LastWeeksData?.filter((ligne) => filterData({date,ligne})).length)

  const SumPending7D = Pending7D.reduce(reducer,0)
  const SumOrdersNumber7D = OrdersNumber7D.reduce(reducer,0)
  const SumSold7D = Sold7D.reduce(reducer,0)
  const SumCanceled7D = Canceled7D.reduce(reducer,0)

const reportsBarChartData = {
  chart: {
    labels: Last7DaysArray,
    datasets: { label: "Chiffre d'affaire", data: CA7D },
  },
  items: [
    {
      icon: { color: "warning", component: "library_books" },
      label: "En Attente",
      progress: { content: `${SumPending7D + "/" + SumOrdersNumber7D}`, percentage: (SumPending7D/SumOrdersNumber7D)*100 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Commandes",
      progress: { content: SumOrdersNumber7D },
    },
    {
      icon: { color: "success", component: "payment" },
      label: "Ventes",
      progress: { content: `${SumSold7D + "/" + SumOrdersNumber7D}`, percentage: (SumSold7D/SumOrdersNumber7D)*100 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "Annulées",
      progress: { content: `${SumCanceled7D + "/" + SumOrdersNumber7D}`, percentage: (SumCanceled7D/SumOrdersNumber7D)*100 },
    },
  ],
};

  const gradientLineChartData = {
    labels: Last7DaysArray,
    datasets: [
      isCA ?
      {
        label: "Chiffre d'Affaire",
        color: "info",
        data: CA7D,
      }:"",

      !isOrderNumber ?
      {
        label: "Commandes",
        color: "info",
        data: OrdersNumber7D,
      }:"",

      isCanceled ? {
        label: "Annulées",
        color: "error",
        data: Canceled7D,
      }:"",

      isPending ? {
        label: "En attente",
        color: "warning",
        data: Pending7D,
      }:"",

      isSold ? {
        label: "Vendues",
        color: "success",
        data: Sold7D,
      }:"",
    ],
  };

  const { chart, items } = reportsBarChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Chiffre d'affaires total" }}
                count={CA}
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total commandes" }}
                count={OrdersNumber}
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Commandes finalisées" }}
                count={Sold}
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "success", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Commandes en attente" }}
                count={Pending}
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "warning",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Résumé des 7 derniers jours"
                description={
                  <>
                    <strong> {(ChangeFromLastWeek <0 ? "" : "+ ") + ChangeFromLastWeek.toFixed(2) + "% CA "}</strong> par rapport a la semaine dernière
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Résumé des ventes"
                description={
                  <SuiBox display="flex" alignItems="center" justifyContent="space-between">
                    <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">{ChangeFromLastWeek <0 ? "arrow_downward" : "arrow_upward"}</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                       {(ChangeFromLastWeek <0 ? "- " : "+ ") + ChangeFromLastWeek.toFixed(2) + "% CA "}
                      <SuiTypography variant="button" color="text" fontWeight="regular">
                        par rapport a la semaine dernière
                      </SuiTypography>
                    </SuiTypography>
                    </SuiBox>
                    <SuiBox color="text" px={2}>
                  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
                    more_vert
                    </Icon>
                    </SuiBox>
                    {renderMenu}
                    
                  </SuiBox>
                  
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={24} md={12} lg={16}>
          <UserContext.Provider value={providerValue}>
          <Projects />
            <OrderTracking/>
            
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
