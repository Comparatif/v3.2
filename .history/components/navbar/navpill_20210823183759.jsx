import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {
    
    const transformer = ChangeView() == 'Liste' ? {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "49%"} : {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(95%, 0px, 0px)", width: "49%"}
    const Liste = () => {ChangeView('Liste')}
    const Grille = () => {ChangeView('Grille')}
    return (
<div class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
   
   <a class={ChangeView() == 'Liste' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} onClick={Liste} >
   <span class="ps-3">Liste</span> 
 </a>
 <a class={ChangeView() == 'Grille' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} onClick={Grille}>
   <span class="ps-3">Grille</span> 
 </a>
      


     
    </ul>
</div>
    )
}