import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

import { GA_TRACKING_ID } from '../lib/gtag'
export default class MyDocument extends Document {
  
  render() {
    
    return (
      <Html>
        <Head>
      

        
        <script type="text/javascript" src="/static/out.js"></script>
        <script type="text/javascript" src="/static/hotjar.js"> </script>
        <link href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
          <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""
    />
          
        </Head>
        <body>
          <Main />
          
    
          <NextScript />
          
            

  
  <script src="/static/js/core/popper.min.js"></script>
          
    <script  src="/static/js/core/bootstrap.min.js"></script>
    
    
    <div id="fb-root"></div>
    <div id="fb-customer-chat" className="fb-customerchat">
    </div>
    <script type="text/javascript" src="/static/messenger.js"></script>
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"/>
    <script type="text/javascript" src="/static/darkmode.js"></script>
    <script type="text/javascript" src="/static/scroll.js"></script>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
          
          

          <script src="/static/js/plugins/perfect-scrollbar.min.js" type="text/javascript"></script>
          <script src="/static/js/plugins/parallax.min.js" type="text/javascript"></script>
          <script type="text/javascript" async="" defer="" src="https://buttons.github.io/buttons.js"></script>
          <script type="text/javascript" src="/static/js/plugins/smooth-scrollbar.min.js"></script>
          
          
           {/*<!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
          <script type="text/javascript" src="/static/js/core/argon-dashboard.min.js"></script>*/}
          
     
         
        
          
  
  

    
    
          
          


          
        </body>
        
      </Html>
    )
  }
}