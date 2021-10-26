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
//import '../styles/soft-ui-design-system/assets/css/nucleo-icons.css'
//import '../styles/soft-ui-design-system/assets/css/soft-design-system.min.css'
//import '../styles/soft-ui-design-system/assets/css/soft-design-system.css'
//import '../styles/autocomplete.css'
//import '../styles/custom-header.css'
//import '../styles/tooltip.css'
//import '../styles/glider.min.css'

import { useEffect } from 'react'

import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


export default  ({ Component, pageProps }) => {

  const router = useRouter()
  /*useEffect(() => {
    typeof document !== undefined ? require('/static/js/core/bootstrap.min.js' && '/static/js/core/popper.min.js') : null
}, [])*/
  
useEffect(() => {

  typeof window !== undefined ?
  import("/static/js/core/bootstrap.min.js") &&
  import('../styles/soft-ui-design-system/assets/css/nucleo-icons.css') &&

  import('../styles/soft-ui-design-system/assets/css/soft-design-system.css') &&
  import('../styles/autocomplete.css') &&
  import('../styles/custom-header.css') &&
  import('../styles/tooltip.css') &&
  import('../styles/glider.min.css') &&
  
  import("/static/js/core/popper.min.js") && 
  import("/static/js/soft-design-system.min.js")
  : null

})
{useEffect(() => {
  <>
            typeof window !== undefined ?
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
          
         
          <link href="./assets/css/nucleo-icons.css" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
          
        
          <link type="text/css" href="./assets/css/soft-design-system-pro.min.css" rel="stylesheet"/>
  
          
          <script type="text/javascript" src="/static/out.js"></script>
          <link href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"/>
  
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
  </>
          })}














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
  

  <Component {...pageProps} />
  
  </>
}

