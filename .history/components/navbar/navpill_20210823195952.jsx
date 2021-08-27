import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {
    
    const transformer = ChangeView() === 'Liste' ? {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "49%"} : {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(95%, 0px, 0px)", width: "49%"}
    const Liste = () => {ChangeView('Liste')}
    const Grille = () => {ChangeView('Grille')}
    return (
<div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
   
      <li class="nav-item" >
         <a  class="nav-link mb-0 px-0 py-1" onClick={Liste} data-bs-toggle="tab"  role="tab" aria-controls="profile" aria-selected="true">
         Liste
         </a>
      </li>

      

      
      <li class="nav-item" >
         <a  class="nav-link mb-0 px-0 py-1" onClick={Grille} data-bs-toggle="tab"  role="tab" aria-controls="dashboard" aria-selected="false">
         Grille
         </a>
      </li>
      


      <div class="moving-tab position-absolute nav-link" style={transformer}>
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">-</a>
      </div>
    </ul>
</div>
    )
}


<div class="card-group">
  <div key={hit.id} class="card">
    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
      <a href="javascript:;" class="d-block">
        <img src="./assets/img/kit/pro/anastasia.jpg" class="img-fluid border-radius-lg"/>
      </a>
    </div>

    <div class="card-body pt-2">
      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
      <a href="javascript:;" class="card-title h5 d-block text-darker">
        Shared Coworking
      </a>
      <p class="card-description mb-4">
        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
      </p>
      <div class="author align-items-center">
        <img src="./assets/img/kit/pro/team-2.jpg" alt="..." class="avatar shadow"/>
        <div class="name ps-3">
          <span>Mathew Glock</span>
          <div class="stats">
            <small>Posted on 28 February</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
      <a href="javascript:;" class="d-block">
        <img src="./assets/img/kit/pro/anastasia.jpg" class="img-fluid border-radius-lg"/>
      </a>
    </div>

    <div class="card-body pt-2">
      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
      <a href="javascript:;" class="card-title h5 d-block text-darker">
        Shared Coworking
      </a>
      <p class="card-description mb-4">
        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
      </p>
      <div class="author align-items-center">
        <img src="./assets/img/kit/pro/team-2.jpg" alt="..." class="avatar shadow"/>
        <div class="name ps-3">
          <span>Mathew Glock</span>
          <div class="stats">
            <small>Posted on 28 February</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
      <a href="javascript:;" class="d-block">
        <img src="./assets/img/kit/pro/anastasia.jpg" class="img-fluid border-radius-lg"/>
      </a>
    </div>

    <div class="card-body pt-2">
      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
      <a href="javascript:;" class="card-title h5 d-block text-darker">
        Shared Coworking
      </a>
      <p class="card-description mb-4">
        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
      </p>
      <div class="author align-items-center">
        <img src="./assets/img/kit/pro/team-2.jpg" alt="..." class="avatar shadow"/>
        <div class="name ps-3">
          <span>Mathew Glock</span>
          <div class="stats">
            <small>Posted on 28 February</small>
          </div>
        </div>
      </div>
    </div>
  </div>



  </div>