import React from 'react'

import { cartItemsVar } from '../UserContext';





export default class Footer2 extends React.Component {


  render () {
    
    
      return(
        <>
        
        <footer className="footer py-5 bg-gradient-dark position-relative overflow-hidden">
    <img src="/img/shapes/waves-white.svg" alt="pattern-lines" className="position-absolute start-0 top-0 w-100 opacity-6"/>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 me-auto mb-lg-0 mb-4 text-lg-left text-center">
          <h6 className="text-white font-weight-bolder mb-lg-4 mb-3">Comparatifdz</h6>
          <ul className="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0">
          <li className="nav-item dropdown dropdown-hover">
          <a  className="nav-link d-flex justify-content-between cursor-pointer align-items-center text-white opacity-8" data-bs-toggle="dropdown" aria-expanded="false">
            Entreprise
            <img src="/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block"/>
          </a>
<div className="dropdown-menu dropdown-menu-animation dropdown-md p-1 border-radius-lg mt-0" aria-labelledby="dropdownMenuPages">
<div className="d-block">
<a className="dropdown-item border-radius-md"><span className="ps-1">A propos</span></a>
<a className="dropdown-item border-radius-md"><span className="ps-1">Abonnement premium</span></a>
<a className="dropdown-item border-radius-md"><span className="ps-1">Blog</span></a>
</div>
</div>
 </li>

 <li className="nav-item dropdown dropdown-hover">
 <a  className="nav-link d-flex justify-content-between cursor-pointer align-items-center text-white opacity-8" data-bs-toggle="dropdown" aria-expanded="false">
 Ressources
   <img src="/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block"/>
 </a>
<div className="dropdown-menu dropdown-menu-animation dropdown-md p-1 border-radius-lg mt-0" aria-labelledby="dropdownMenuPages">
<div className="d-block">
<a className="dropdown-item border-radius-md"><span className="ps-1">Programmes d'affiliation</span></a>
</div>
</div>
</li>
<li className="nav-item dropdown dropdown-hover">
          <a  className="nav-link d-flex justify-content-between cursor-pointer align-items-center text-white opacity-8" data-bs-toggle="dropdown" aria-expanded="false">
          Aide & Support
            <img src="/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block"/>
          </a>
<div className="dropdown-menu dropdown-menu-animation dropdown-md p-1 border-radius-lg mt-0" aria-labelledby="dropdownMenuPages">
<div className="d-block">
<a className="dropdown-item border-radius-md" href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message"><span className="ps-1">Contactez-Nous</span></a>
<a className="dropdown-item border-radius-md"><span className="ps-1">Fonctionnement du site</span></a>
<a className="dropdown-item border-radius-md"><span className="ps-1">Sponsors & Partenariats</span></a>
</div>
</div>
 </li>
 <li className="nav-item dropdown dropdown-hover">
          <a  className="nav-link d-flex justify-content-between cursor-pointer align-items-center text-white opacity-8" data-bs-toggle="dropdown" aria-expanded="false">
          Legal
            <img src="/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block"/>
          </a>
<div className="dropdown-menu dropdown-menu-animation dropdown-md p-1 border-radius-lg mt-0" aria-labelledby="dropdownMenuPages">
<div className="d-block">
<a className="dropdown-item border-radius-md"><span className="ps-1">Conditions d'utilisation</span></a>
<a className="dropdown-item border-radius-md"><span className="ps-1">Politique de confidentialité</span></a>
</div>
</div>
 </li>
          </ul>
          <p className="text-sm text-white opacity-8 mb-0">
            Design by Comparatifdz
          </p>
        </div>
        
        <div className="col-lg-5 ms-auto text-lg-right text-center">
          <p className="mb-5 text-lg text-white font-weight-bold">
          {cartItemsVar()}
          </p>
          <a href="https://www.facebook.com/Comparatifdz" target="_blank" rel="noreferrer" className="text-white me-xl-4 me-4 opacity-5">
            <span className="fab fa-facebook" aria-hidden="true"></span>
          </a>
          <a href="javascript:;" target="_blank" rel="noreferrer" className="text-white me-xl-4 me-4 opacity-5">
            <span className="fab fa-twitter" aria-hidden="true"></span>
          </a>
          <a href="javascript:;" target="_blank" rel="noreferrer" className="text-white me-xl-4 me-4 opacity-5">
            <span className="fab fa-instagram" aria-hidden="true"></span>
          </a>
          
        </div>
      </div>
    </div>
  </footer>
  
  

  </>)
}}











