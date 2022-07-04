import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

import { GA_TRACKING_ID } from '../lib/gtag'
export default class MyDocument extends Document {
  
  render() {
    
    return (
      <Html>
        <Head>
      

        
        <script type="text/javascript" src="/static/out.js"></script>
        <link href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"/>

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>

          
          
          

          

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          
    
          <NextScript />
          
            

  
  <script src="/static/js/core/popper.min.js"></script>
          
    <script  src="/static/js/core/bootstrap.min.js"></script>
    
    
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
    <script type="text/javascript" src="/static/messenger.js"></script>
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"/>
    <script type="text/javascript" src="/static/darkmode.js"></script>
    <script type="text/javascript" src="/static/scroll.js"></script>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
          
          

          <script src="/static/js/plugins/perfect-scrollbar.min.js" type="text/javascript"></script>
          <script src="/static/js/plugins/parallax.min.js" type="text/javascript"></script>
          <script type="text/javascript" async="" defer="" src="https://buttons.github.io/buttons.js"></script>
          <script type="text/javascript" src="/static/script1.js"></script>
          <script type="text/javascript" src="/static/out.js"></script>
           {/*<!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->*/}
     <script type="text/javascript" src="/static/js/core/argon-dashboard.min.js"></script>
          <script type="text/javascript" src="/static/js/soft-design-system.min.js"></script>
         
        
          
  
  

    
    
          
          


          
        </body>
        
      </Html>
    )
  }
}