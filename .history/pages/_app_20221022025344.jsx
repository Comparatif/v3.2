//import '@elastic/eui/dist/eui_theme_light.css'
//import '@elastic/eui/dist/eui_theme_dark.css'
//import '../styles/eui_theme_amsterdam_light.css'
//import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css'; // lib
//import '../styles/tailwind.css'
//import '@elastic/eui/dist/eui_theme_amsterdam_dark.css'


//import '../styles/globals.css'
//import '../styles/css/bootstrap.css'
//import '../styles/css/bootstrap.min.css'
//import '../styles/fonts/font-awesome/css/font-awesome.css'
//import '../styles/css/style.css'
//import '../styles/css/nivo-lightbox/nivo-lightbox.css'
//import '../styles/css/nivo-lightbox/default.css'
//import 'bootstrap/dist/css/bootstrap.css'
import '../styles/soft-ui-design-system/assets/css/nucleo-icons.css'

//import '../styles/soft-ui-design-system/assets/css/soft-design-system.css'
//import '../styles/argon-dashboard-master/assets/css/argon-dashboard.css'
import '../styles/autocomplete.css'
import '../styles/autocomplete-ligne.css'
import '../styles/custom-header.css'
import '../styles/tooltip.css'
import '../styles/glider.min.css'
import '../styles/ligne.css'
import { AuthContextProvider } from '../components/New_feature/context/AuthContext.tsx'
//import { UserContext } from '../components/UserContext'
import dynamic from 'next/dynamic'

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { useAuth } from '../components/New_feature/context/AuthContext'
import { LoginPopup } from '../components/New_feature/Login/LoginPopup'
import { SignUpPopup } from '../components/New_feature/Login/SignInPopup'
import React, { useEffect , useContext, useState, useRef, useCallback, useMemo} from 'react'
import { enableRightClick } from '../lib/Options'
import { SoftUIControllerProvider } from "context";
import withSoftUIcontrollerProvider from '../hocs/withSoftUIcontrollerProvider'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../lib/gtag'
// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

//Prisma

import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

const App = ({ Component, pageProps }) => {
  
  const router = useRouter()
  const pathname = useRouter().pathname
  const isRouteToAccount = pathname.includes("/Account")
  const SoftUIStyle = dynamic(() => import('../styles/soft-ui-design-system/assets/css/soft-design-system.min.css'))


  useEffect(() => {
    const handleRouteChange = (url) => {
      if (gtag && gtag.pageview) gtag.pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      
    }
  }, [router.events],
  isRouteToAccount ? import('../styles/soft-ui-design-system/assets/css/soft-design-system.min.css') : import('../styles/soft-ui-design-system/assets/css/soft-design-system.min.css') 
  )

  enableRightClick ? "" : useEffect(()=> document.addEventListener('contextmenu', event => event.preventDefault()))


  return (
    <AuthContextProvider>
    {
      isRouteToAccount?
      <>
      <ApolloProvider client = {apolloClient}>
      <SoftUIControllerProvider>
      <SignUpPopup /> 
      <LoginPopup />  
      <Component {...pageProps} />
      </SoftUIControllerProvider>
      </ApolloProvider>

        </>

  :

  <>


  <SignUpPopup /> 
  <LoginPopup />
  <Component {...pageProps} />


  </>
  
}

</AuthContextProvider>
  
  
  
  

      )
}


export default App


