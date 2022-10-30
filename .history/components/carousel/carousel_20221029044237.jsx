import React from 'react'

export default class Carousell extends React.Component {


  render () {
  
      return(
            
          <section id="carousel-position">

              

          <div className="m-0"> 
              <div className="justify-content-center text-center">
           <div className="col-md-12 col-sm-12 col-12 p-0">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-indicators z-index-1">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner" >
        <div className="carousel-item active" data-bs-interval="3000" >
          <img src="/Carousel1.jpg" className="d-block w-100" alt="..." id="carousel"/>
          <div className="carousel-caption d-md-block position-absolute bottom-50  p-0">
            <h3  className="text-white carousel-fontsize-titre carousel-fontsize-shadow">Un comparatif pour l'informatique</h3>
            <p className="m-0 carousel-fontsize-paragraphe carousel-fontsize-shadow">Composants PC, PC fixes, consoles et autres...</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src="/Carousel2.jpg" className="d-block w-100"  alt="..." id="carousel" />
          <div className="carousel-caption d-md-block position-absolute bottom-50 p-0">
            <h3  className="text-white carousel-fontsize-titre carousel-fontsize-shadow">Un comparatif pour les mobiles</h3>
            <p className="m-0 carousel-fontsize-paragraphe carousel-fontsize-shadow">Smartphones, tablettes..</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src="/Carousel3.jpg" className="d-block w-100" alt="..." id="carousel" />
          <div className="carousel-caption d-md-block position-absolute bottom-50 p-0" >
            <h3  className="text-white carousel-fontsize-titre carousel-fontsize-shadow">Un comparatif pour les automobiles</h3>
            <p className="m-0 carousel-fontsize-paragraphe carousel-fontsize-shadow">2 roues, 4 roues, 10 roues..</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src="/place-your-logo-picture-or-ad-in-times-square.jpg" className="d-block w-100"  alt="..." id="carousel" />
          <div className="carousel-caption d-md-block position-absolute bottom-50 p-0">
            <h3  className="text-white carousel-fontsize-titre carousel-fontsize-shadow">Espaces publicitaires disponibles</h3>
            <a href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message"><button type="submit" className="btn bg-white text-dark m-0">Contactez-nous</button></a>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    </div>
    </div>
    </section>
  
  

  )
}}











