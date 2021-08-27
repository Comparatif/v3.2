import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {
    
    const transformer = ChangeView() === 'Liste' ? {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "49%"} : {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(95%, 0px, 0px)", width: "49%"}
    const Liste = () => {ChangeView('Liste')}
    const Grille = () => {ChangeView('Grille')}
    return (
<div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
   <a>
      <li class="nav-item" >
         <button type ="button" class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" onClick={Liste} role="tab" aria-controls="profile" aria-selected="true">
         Liste
         </button>
      </li>

      </a>

      <a>
      <li class="nav-item" >
         <button type ="button" class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" onClick={Grille} role="tab" aria-controls="dashboard" aria-selected="false">
         Grille
         </button>
      </li>
      </a>

      
      <div class="moving-tab position-absolute nav-link" style={transformer}>
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">-</a>
      </div>
    </ul>
</div>
    )
}