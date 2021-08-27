import React, {useContext, useState} from 'react';
import { ChangeView } from '../UserContext.js'










export const NavPill = () => {
    
    const transformer = ChangeView() == 'Liste' ? {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "49%"} : {padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(95%, 0px, 0px)", width: "49%"}
    const Liste = () => {ChangeView('Liste')}
    const Grille = () => {ChangeView('Grille')}
    return (
      <div class="nav-wrapper position-relative end-0">
  <ul class="nav nav-pills nav-fill flex-column p-1" role="tablist">
    <li class="nav-item">
      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-vertical" role="tab" aria-controls="preview" aria-selected="true">
        My Profile
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-vertical" role="tab" aria-controls="code" aria-selected="false">
        Dashboard
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#payments-tabs-vertical" role="tab" aria-controls="code" aria-selected="false">
        Payments
      </a>
    </li>
  </ul>
</div>
    )
}