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

//const [isOn, toggleIsOn] = new useToggle();
const ligneCount = 5
const elements = [...Array(ligneCount).keys()].map((a) => 
<SearchkitProvider key={a+1} client={new SearchkitClient()}><Ligne id={"id" + a+1}/></SearchkitProvider>)

return(
  <div className="card" id="results-position">
  {user? 

  <div className="table-responsive">
    <table className="table align-items-center mb-0">
      
      <tbody>

      {elements}
      </tbody>
    </table>
  </div>


: <div className="container mb-5">
<div className="justify-content-center text-center mb-5">

<h1 className="mt-5 mb-3">Ce contenu est reservé aux abonnés</h1>
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

