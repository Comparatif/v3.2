
import React from 'react'
import Carousel from "../carousel/carousel"

export default class Header extends React.Component {


  render () {
  
      return(

<header class="bg-gradient-dark">
    <div class="page-header section-height-75">

      <span class="mask bg-gradient-info opacity-8"></span>
      
      <div class="position-absolute w-100 z-index-1 bottom-0">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto" style={{height: "40px"}}>
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="moving-waves">
            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40"></use>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1"></use>
          </g>
        </svg>
      </div>
    </div>
  </header>

      )}}