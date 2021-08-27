import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {
    
    const transformer = ChangeView() === 'Liste' ? {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "49%"} : {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(95%, 0px, 0px)", width: "49%"}
    const Liste = () => {ChangeView('Liste')}
    const Grille = () => {ChangeView('Grille')}
    return (
<div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
   
   <a class={ChangeView() == 'and' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} onClick={Liste} >
   <span class="ps-3">Prix croissant</span> <img src="/img/custom/info.svg"/>
 </a>
 <a class={ChangeView() == 'or' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} onClick={Grille}>
   <span class="ps-3">Pertinence</span> 
 </a>
      


      <div class="moving-tab position-absolute nav-link" style={transformer}>
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">-</a>
      </div>
    </ul>
</div>
    )
}