import React from 'react'

export default class Carousel_tuto extends React.Component {


  render () {
  
      return(
            
          

              

          <div class="m-0"> 
              <div class="row justify-content-center text-center">
           <div class="col-md-12 col-sm-12 col-12 p-0">
          <div id="carousel_tuto" class="carousel carousel-dark slide" data-bs-ride="carousel" >

      <div class="carousel-inner" >
        <div class="carousel-item active" data-bs-interval="2000" >
          <img src="/tuto1.png" class="d-block w-100" alt="..." id="suivez_le_guide"/>
          
        </div>
        <div class="carousel-item" data-bs-interval="2000" >
          <img src="/tuto2.jpg" class="d-block w-100"  alt="..."  id="suivez_le_guide"/>
          
        </div>
        <div class="carousel-item" data-bs-interval="2000" >
          <img src="/tuto3.jpg" class="d-block w-100"  alt="..."  id="suivez_le_guide"/>
          
        </div>


      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel_tuto" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel_tuto" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    </div>
    </div>
    
  
  

  )
}}











