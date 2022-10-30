import React from 'react'

export default class Carousel_tuto extends React.Component {


  render () {
  
      return(
            
          

              

          <div className="m-0"> 
              <div className="row justify-content-center text-center">
           <div className="col-md-12 col-sm-12 col-12 p-0">
          <div id="carousel_tuto" className="carousel carousel-dark slide" data-bs-ride="carousel" >

      <div className="carousel-inner" >
        <div className="carousel-item active" data-bs-interval="2000" >
          <img src="/tuto1.png" className="d-block w-100" alt="..." id="suivez_le_guide"/>
          
        </div>
        <div className="carousel-item" data-bs-interval="2000" >
          <img src="/tuto2.jpg" className="d-block w-100"  alt="..."  id="suivez_le_guide"/>
          
        </div>
        <div className="carousel-item" data-bs-interval="2000" >
          <img src="/tuto3.jpg" className="d-block w-100"  alt="..."  id="suivez_le_guide"/>
          
        </div>


      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel_tuto" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel_tuto" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    </div>
    </div>
    
  
  

  )
}}











