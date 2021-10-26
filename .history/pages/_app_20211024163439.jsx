//import '@elastic/eui/dist/eui_theme_light.css'
//import '@elastic/eui/dist/eui_theme_dark.css'
//import '../styles/eui_theme_amsterdam_light.css'
//import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css'; // lib
//import '../styles/tailwind.css'
//import '@elastic/eui/dist/eui_theme_amsterdam_dark.css'
import Document, { Html, Head, Main, NextScript } from 'next/document'

//import '../styles/globals.css'
//import '../styles/css/bootstrap.css'
//import '../styles/css/bootstrap.min.css'
//import '../styles/fonts/font-awesome/css/font-awesome.css'
//import '../styles/css/style.css'
//import '../styles/css/nivo-lightbox/nivo-lightbox.css'
//import '../styles/css/nivo-lightbox/default.css'
//import 'bootstrap/dist/css/bootstrap.css'
import '../styles/soft-ui-design-system/assets/css/nucleo-icons.css'
//import '../styles/soft-ui-design-system/assets/css/soft-design-system.min.css'
import '../styles/soft-ui-design-system/assets/css/soft-design-system.css'
import '../styles/autocomplete.css'
import '../styles/custom-header.css'
import '../styles/tooltip.css'
import '../styles/glider.min.css'

import { useEffect } from 'react'

import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


export default  ({ Component, pageProps }) => {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (gtag && gtag.pageview) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>
  

  <Component {...pageProps}>
  
  <script type="text/javascript" src="/static/js/core/popper.min.js"></script>
          
  <script type="text/javascript" src="/static/js/core/bootstrap.min.js"></script>
 
  <script type="text/javascript" src="/static/messenger.js"></script>
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"/>
  <script type="text/javascript" src="/static/darkmode.js"></script>
  <script type="text/javascript" src="/static/scroll.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
        
        

        <script src="/static/js/plugins/perfect-scrollbar.min.js" type="text/javascript"></script>
        <script src="/static/js/plugins/parallax.min.js" type="text/javascript"></script>
        <script type="text/javascript" async="" defer="" src="https://buttons.github.io/buttons.js"></script>
        <script type="text/javascript" src="/static/js/soft-design-system.min.js"></script>
  </Component>
  
  
  </>
}

