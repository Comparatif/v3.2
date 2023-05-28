import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



export class Stats extends React.Component {


    render () {

    
        return(

<>
<section className="pt-2 pb-6 bg-gray-100" id="count-stats">
    <div className="container">
      <div className="row mb-7">
        
      </div>
      <div className="row justify-content-center text-center" >
        <div className="col-md-3">
        <CountUp  start={0} end={4.400} duration={1.5} redraw={false} decimal="," decimals={3}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <h1 className="text-gradient text-info" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          <h5>Utilisateurs</h5>
          <p>Réguliers sur notre plateforme</p>
        </div>
        <div className="col-md-3">

          <CountUp  start={0} end={11.000} duration={1.5} redraw={false} decimal="," decimals={3}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <h1 className="text-gradient text-info" ref={countUpRef} /> 
            </VisibilitySensor>

        )}
    </CountUp>
          <h5>Offres</h5>
          <p>Constamment mises a jour et proposées dans notre section informatique</p>
        </div>
        <div className="col-md-3">
        <CountUp  start={0} end={42} duration={1.5} redraw={false} decimal=",">
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <h1 className="text-gradient text-info" ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          <h5>Marchands</h5>
          <p>Selectionnés pour vous trouver le meilleur prix</p>
        </div>
      </div>
    </div>
  </section>
 
  
  </>
  
  
        )
        

      }
      
    }
    
  module.exports = { Stats }