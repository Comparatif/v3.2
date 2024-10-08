import React, {useContext, useState, useEffect, useRef} from 'react';
import { UserContext, Tri, cartItemsVar, SearchkitIndex} from "../UserContext.js"
import { useSearchkit } from '@searchkit/client';






export const NavBar = ({data}) => {
  const api = useSearchkit();
  const [Value, SetValue] = useState('Composants_pc')
  const composants = () => {SetValue('Composants_pc'); SearchkitIndex('Composants_pc'); api.search();}
  const laptop = () => {SetValue('Laptop'); SearchkitIndex('Laptop'); api.search();}



  const CheckIfSorted = data?.results?.hits.sortedBy //après 3h a chercher..


  const reglage1 = () => {api.setSortBy('prix_croissant'); cartItemsVar('and') ; api.search();}
  const reglage2 = () => {api.setSortBy('relevance'); cartItemsVar('or'); api.search();}

  

  
  
  
 
    return(
        <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none navbar-transparent position-fixed">
        <div class="container" >
          <a class="navbar-brand  text-white " href="https://comparatifdz.com" rel="tooltip" title="Comparateur de prix" data-placement="bottom" target="_blank" rel="noreferrer">
          Comparatif-dz 
          </a>
          <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
            <ul class="navbar-nav navbar-nav-hover w-100">
              <li class="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
                <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                  Informatique
                  <img src="/img/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1 d-lg-block d-none"/>
                  <img src="/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block"/>
                </a> 
                <div class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                  <div class="d-none d-lg-block">
                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
                      <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                          <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>shop </title>
                            <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Rounded-Icons" transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                  <g id="shop-" transform="translate(0.000000, 148.000000)">
                                    <path d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" id="Path" opacity="0.598981585"></path>
                                    <path d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" id="Path"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      Catégories
                    </h6>
                    
                    <a  class={Value == 'Composants_pc' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"}  >
                    <div class="row ps-3">
                      <span class="col-9" onClick={composants}>Composants PC</span><img src="/img/custom/info.svg" class={Value == 'Composants_pc' ?  "custom-image col-3" : "col-3"} title="" data-bs-original-title="Active la recherche pour les Composants PC"  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="right"/>
                      </div>
                    </a>
                    

                    
                    <a  class={Value == 'Laptop' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} >
                    <div class="row ps-3">
                      <span class="col-9" onClick={laptop}>Laptop & PC fixes</span><img src="/img/custom/info.svg" class={Value == 'Laptop' ?  "custom-image col-3" : "col-3"} title="" data-bs-original-title="Active la recherche pour les Laptop & PC fixes"  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="right" />
                      </div>
                    </a>
                    
                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0 mt-3">
                      <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
                          <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>office</title>
                            <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Rounded-Icons" transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                  <g id="office" transform="translate(153.000000, 2.000000)">
                                    <path d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" id="Path" opacity="0.6"></path>
                                    <path d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" id="Shape"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      Type de recherche
                    </h6>
                    <a class={CheckIfSorted == "prix_croissant" ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"}  >
                    <div class="row ps-3">
                      <span class="col-9 " onClick={reglage1}>Prix croissant</span> <img src="/img/custom/info.svg" class={CheckIfSorted == "prix_croissant" ?  "custom-image col-3" : "col-3"} title="" data-bs-original-title="Affiche les prix les moins élevés (Pour garantir la qualité du comparateur, certains résultats peuvent ne pas apparaître)." data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="right" data-container="body" data-animation="true" />
                    </div>
                      </a>
                      
                    <a class={CheckIfSorted == "relevance" ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} >
                    <div class="row ps-3">
                      <span class="col-9" onClick={reglage2}>Pertinence</span> <img src="/img/custom/info.svg" class={CheckIfSorted == "relevance" ?  "custom-image col-3" : "col-3"}  title="Affiche les résultats les plus pértinents (Pour garantir la qualité du comparateur, les prix ne seront pas classés par ordre croissant)."  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="right" data-container="body" data-animation="true" />
                      </div>
                      </a>
                      
                    
                  </div>
                  <div class="d-lg-none">
                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
                      <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                          <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>shop </title>
                            <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Rounded-Icons" transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                  <g id="shop-" transform="translate(0.000000, 148.000000)">
                                    <path d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" id="Path" opacity="0.598981585"></path>
                                    <path d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" id="Path"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      Catégories
                    </h6>
                    <a  class={Value == 'Composants_pc' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"}  >
                    <div class="row ps-3">
                      <span class="col-9" onClick={composants}>Composants PC</span><img src="/img/custom/info.svg" class={Value == 'Composants_pc' ?  "custom-image col-3" : "col-3"} style={{maxHeight: "22px"}} title="" data-bs-original-title="Active la recherche pour les Composants PC"  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="bottom"/>
                      </div>
                      </a>
                    

                    
                    <a  class={Value == 'Laptop' ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} >
                    <div class="row ps-3">
                    <span class="col-9" onClick={laptop}>Laptop & PC fixes</span><img src="/img/custom/info.svg" class={Value == 'Laptop' ?  "custom-image col-3" : "col-3"} style={{maxHeight: "22px"}} title="" data-bs-original-title="Active la recherche pour les Laptop & PC fixes"  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="bottom" />
                    </div>
                    </a>
                  
                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0 mt-3">
                      <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
                          <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>office</title>
                            <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Rounded-Icons" transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                  <g id="office" transform="translate(153.000000, 2.000000)">
                                    <path d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" id="Path" opacity="0.6"></path>
                                    <path d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" id="Shape"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      Compte
                    </h6>
                    <a class={CheckIfSorted == "prix_croissant" ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} >
                    <div class="row ps-3">
                    
                    <span class="col-9" onClick={reglage1}>Prix croissant</span><img  src="/img/custom/info.svg" class={CheckIfSorted == "prix_croissant" ?  "custom-image col-3" : "col-3"} style={{maxHeight: "22px"}} title="" data-bs-original-title="Affiche les prix les moins chers (Pour garantir la qualité du comparateur, certains résultats peuvent ne pas apparaître)."  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="bottom" data-container="body" data-animation="true"/>
                    </div>
                    </a>

                    
                    <a class={CheckIfSorted == "relevance" ?  "dropdown-item border-radius-md bg-gradient-info text-white" : "dropdown-item border-radius-md"} >
                    <div class="row ps-3"> 
                    <span class="col-9" onClick={reglage2}>Pertinence</span><img  src="/img/custom/info.svg" class={CheckIfSorted == "relevance" ?  "custom-image col-3" : "col-3"} style={{maxHeight: "22px"}} title="" data-bs-original-title="Affiche les résultats les plus pértinents (Pour garantir la qualité du comparateur, les prix ne seront pas classés par ordre croissant)."  data-bs-trigger="hover" data-bs-toggle="tooltip" data-bs-placement="bottom" data-container="body" data-animation="true"/>
                    </div>
                    </a>
                    
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center " id="dropdownMenuBlocks"  aria-expanded="false">
                  Smartphones
                  <img src="/img/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1 d-lg-block d-none"/>
                  <img src="/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block"/>
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center " id="dropdownMenuDocs" aria-expanded="false">
                  Automobiles
                  <img src="/img/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1 d-lg-block d-none"/>
                  <img src="/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block"/>
                </a>
                
              </li>
              <li class="nav-item ms-lg-auto">
              
              </li>
              <li class="nav-item my-auto ms-3 ms-lg-0">
                <a href="mailto:comparatif.algerie@gmail.com?subject = Feedback = Message" class="btn btn-sm  bg-white  btn-round mb-0 me-1 mt-2 mt-md-0">Contactez-nous</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>)

      
}












