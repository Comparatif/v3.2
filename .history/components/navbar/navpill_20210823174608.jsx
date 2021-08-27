import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'



const transformer = ChangeView() === "Liste" ? "translate3d(0px, 0px, 0px)" : "translate3d(95%, 0px, 0px)"
const Liste





export const NavPill = () => {
    return (
<div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <li class="nav-item" onClick={}>
         <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
         Liste
         </a>
      </li>
      <li class="nav-item">
         <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab" aria-controls="dashboard" aria-selected="false">
         Grille
         </a>
      </li>
      <div class="moving-tab position-absolute nav-link" style={{padding: "0px", transition: "all 0.5s ease 0s", transform: transformer, width: "49%"}}>
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">-</a>
      </div>
    </ul>
</div>
    )
}