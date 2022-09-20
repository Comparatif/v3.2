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

import { useState, useEffect, useMemo } from "react";
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
import {OrderTracking} from "./components/Projects/data/OrderTracking/OrderTracking";
import OrderOverview from "../../layouts/dashboard/components/OrderOverview";
import { orderStatus, TrackingContext } from '../../../../UserContext.js'
// Data
//import reportsBarChartData from "../../layouts/dashboard/data/reportsBarChartData";
//import gradientLineChartData from "../../layouts/dashboard/data/gradientLineChartData";

import useToggle from '../../../../useful/toggle'
//Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../../firebase/firebase/clientApp";

//GraphQL

import {gql, useQuery} from "@apollo/client";

const QueryOrders = gql`
query Query(
  $after: String, 
  $before: String, 
  $first: Int, 
  $last: Int,
  $acceptedBy: String
  ) {
  orders(
    after: $after, 
    before: $before, 
    first: $first, 
    last: $last
    ) {
    pageInfo {
      startCursor
      endCursor
      hasPrevPage
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


function Dashboard() {
  const { loading, data, error, fetchMore } = useQuery(QueryOrders, {
    variables: {
      "first": 10,
      "after": null,
      "before": null,
      "last": 2
      
    },
});
const [TrackContext, SetTrackContext] = useState([])
const providerValue = useMemo(()=> ({ TrackContext, SetTrackContext }), [TrackContext, SetTrackContext]);
  const [CA, setCA] = useState('Loading...')
  const [OrdersNumber, setOrdersNumber] = useState('Loading...')
  const [Sold, setSold] = useState('Loading...')
  const [Pending, setPending] = useState('Loading...')
  
  const [LastWeeksData, setLastWeeksData] = useState([])
  const [WeeksBeforeLastWeekData, setWeeksBeforeLastWeekData] = useState([])
  const [isCA, toggleCA] = useToggle();
  const [isOrderNumber, toggleOrderNumber] = useToggle();
  const [isSold, toggleSold] = useToggle();
  const [isPending, togglePending] = useToggle();
  const [isCanceled, toggleCanceled] = useToggle();
  const [menu, setMenu] = useState(null);
  const [isAuthorized, setAuthorization] = useState(false)
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
const [user, loadingUser, errorUser] = useAuthState(firebase.auth());
//const hasAccess = user ? autorisation ?


   useEffect(async ()=> {
// Est-ce que cet utilisateur a le droit de voir ce contenu
    fetch(`/api/autorisation?searchString=${user?.email}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}).then((res) => res.json() )
    .then((data) => {
      setAuthorization(data[0].dashboard)
      
    }).catch((err)=> console.log(err),setAuthorization(false))

    // Si autorisation, télécharger le resumé de la data

  
 
}, [user]) 


useEffect(async ()=> {
if (isAuthorized)
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


}, [isAuthorized])
 
  
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

  if (loading) {
    return <p>Loading....</p>
    
  }
  if (error) {
    return <p>Oops, something went wrong</p>
  }

  return (
   
    <DashboardLayout>
      <DashboardNavbar />
      
      <SuiBox py={3}>
      {isAuthorized ? 
        <>
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
          <TrackingContext.Provider value={providerValue}>
          <Projects data={data} loading={loading} error={error} fetchMore={fetchMore}/>
            <OrderTracking TrackContext={TrackContext} data={data} />
            </TrackingContext.Provider>
            
          </Grid>
        </Grid></>

        : 
        
        user ? 
        <div class="container mb-5">
        <div class="justify-content-center text-center mb-5">
        <h1 class="mt-5 mb-3">Ce contenu est reservé aux partenaires</h1>
        <br/><br/>
        <a href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message">
        <button type="button" className="btn btn-block btn-info m-3 ">
            Devenir partenaire
            </button>
            </a>
          </div>
        </div>
        
        :
        <div class="container mb-5">
        <div class="justify-content-center text-center mb-5">
        <h1 class="mt-5 mb-3">Ce contenu est reservé aux partenaires</h1>
        <br/><br/>
        <button type="button" className="btn btn-block btn-info m-3 " data-bs-toggle="modal" data-bs-target="#modal-form-signin">
            Créer un compte
            </button>
        <p class="m-3">Ou</p>
        <button type="button" className="btn btn-block btn-info mt-3 mb-5" data-bs-toggle="modal" data-bs-target="#modal-form-login">
          Se connecter
          </button>
          </div>
        </div>
      
      
      
      }
      </SuiBox>
      <Footer />
    </DashboardLayout>
    
    
  );
}

export default Dashboard;
