import Ligne from './ligne'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import { LoginPopup } from './Login/LoginPopup'
import { SignInPopup } from './Login/SignInPopup'
import useToggle from '../useful/toggle.jsx';
import firebase from './../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/router'

export const Table = () => {


//const element = Array(50).fill(<th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Produits</th>)
//const elements = Array(5).fill(<SearchkitProvider client={new SearchkitClient()}><Ligne/></SearchkitProvider>)

const { user, login, signup } = useAuth()
const [isAuthorized, setAuthorization] = useState(false);
const [SearchState, setSearchState] = useState(null);

//const hasAccess = user ? autorisation ?


useEffect(()=> {
  const fetchData = async () => {
     if(user)
// Est-ce que cet utilisateur a le droit de voir ce contenu
   fetch(`/api/autorisation?searchString=${user?.email}`, {
     headers : { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      }}).then((res) => res.json() )
   .then((data) => {
     setAuthorization(data[0].test)
     
     
   })

   // Si autorisation, télécharger le resumé de la data
 }

 fetchData().catch((err)=> console.log(err),setAuthorization(false))

 

}, [user],

()=> {
  const fetchData = async () => {
     if(isAuthorized)
// Est-ce que cet utilisateur a le droit de voir ce contenu
   fetch(`/api/autorisation?searchString=${user?.email}`, {
     headers : { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      }}).then((res) => res.json() )
   .then((data) => {
     setSearchState(data[0].test123)
     
   })

   // Si autorisation, télécharger le resumé de la data
 }

 fetchData().catch((err)=> console.log(err))

 

}, [isAuthorized]

) 

//const [isOn, toggleIsOn] = new useToggle();
const ligneCount = 5
const elements = [...Array(ligneCount).keys()].map((a) => 
<SearchkitProvider key={a+1} client={new SearchkitClient({itemsPerPage: 20})}><Ligne id={"id" + a+1} SearchState={SearchState}/></SearchkitProvider>)

return(
  <div className="card" id="results-position">
  {isAuthorized? 

  <div className="table-responsive">
    <table className="table align-items-center mb-0">
      
      <tbody>

      {elements}
      </tbody>
    </table>
  </div>


: 

user ? 

<div className="container mb-5">
<div className="justify-content-center text-center mb-5">

<a href="/downloads/Offres-Commerciales-Comparatifdz-FR.pdf" target="_blank"><button type="button" class="btn btn-block btn-info mb-1" data-animation="true">S'abonner maintenant</button></a>


    <div class="row">
  <div class="col-md-12 mx-auto">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>

      </div>
      <div class="carousel-inner border-radius-sm">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/1.png" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/2.png" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/3.png" alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/4.png" alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/5.png" alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/6.png" alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/7.png" alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/Offres-commerciales/fr/8.png" alt="Third slide" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
  </div>


</div>


:

<div className="container mb-5">
<div className="justify-content-center text-center mb-5">

<h1 className="mt-5 mb-3">Veuillez vous connecter</h1>
<br/><br/>
<button type="button" className="btn btn-block btn-info m-3 " data-bs-toggle="modal" data-bs-target="#modal-form-signin">
    Créer un compte
    </button>
<p className="m-3">Ou</p>


<button type="button" className="btn btn-block btn-info mt-3 mb-5" data-bs-toggle="modal" data-bs-target="#modal-form-login">
  Se connecter
  </button>

  
  </div>


</div>}


</div>
)}

