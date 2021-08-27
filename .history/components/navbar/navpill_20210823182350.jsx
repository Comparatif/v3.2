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
         <a type ="button" class="nav-link mb-0 px-0 py-1" onClick={Liste} data-bs-toggle="tab"  role="tab" aria-controls="profile" aria-selected="true">
         Liste
         </a>
      </li>

      

      
      <li class="nav-item" >
         <button type ="button" class="nav-link mb-0 px-0 py-1" onClick={Grille} data-bs-toggle="tab"  role="tab" aria-controls="dashboard" aria-selected="false">
         Grille
         </button>
      </li>
      


      <div class="moving-tab position-absolute nav-link" style={transformer}>
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">-</a>
      </div>
    </ul>
</div>
    )
}