import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {

    const reglage1 = () => {cartItemsVar('and'); api.setSortBy('prix_croissant'); api.search();}
  const reglage2 = () => {cartItemsVar('or'); api.setSortBy('relevance'); api.search();}
    return (
<div class="nav-wrapper position-relative end-0">
   <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <li class="nav-item" >
         <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" onClick={() => ChangeView("Liste")} role="tab" aria-controls="profile" aria-selected="true">
         Liste
         </a>
      </li>
      <li class="nav-item" >
         <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" onClick={()=> ChangeView("Grille")} role="tab" aria-controls="dashboard" aria-selected="false">
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