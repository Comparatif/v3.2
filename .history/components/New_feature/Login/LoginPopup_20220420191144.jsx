import firebase from '../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'



export const LoginPopup = ({isOn, user, login, data, setData}) =>

{
 

  

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
    } catch (err) {
      console.log(err)
    }
  }
return(



  isOn == "on" ?
  
  <div className="modal fade" id="modal-form-login" tabIndex={-1} aria-labelledby="modal-form-login" aria-hidden="true">
  
  
  <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient">
  Bienvenue !
  </h3>
  <p className="mb-0 text-small">
  Veuillez entrer vos identifiants
  </p>
  </div>
  <div className="card-body">
  <form role="form text-left" onSubmit={handleLogin}>
  <label>Email</label>
  <div className="input-group mb-3">
  <input 
  onChange={(e) =>
    setData({
      ...data,
      email: e.target.value,
    })
  }
  value={data.email}
  
  type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
  </div>
  <label>Mot de passe</label>
  <div className="input-group mb-3">
  <input
  onChange={(e) =>
    setData({
      ...data,
      password: e.target.value,
    })
  }
  value={data.password}
  type="password" className="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="password-addon"/>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="rememberMe" />
   <label className="form-check-label" >Se rappeler de moi</label>
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
  Connexion
  </button>
  </div>
  </form>
  </div>
  <div className="card-footer text-center pt-0 px-lg-2 px-1">
  <p className="mb-1 text-sm mx-auto">
 
  <a  className="mb-0 text-small" >Mot de passe oublié</a>
  <br/>
  <a style={{cursor: "pointer"}} className="mb-0 text-small" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#modal-form-signin">Créer un compte</a>
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>

  {useEffect(() =>
    {
      
      var myModal = document.getElementById("modal-form-login")
    return (new bootstrap.Modal(myModal).show() )
  }
  
  )}
  {useEffect(()=> 
    {
      var elem = document.getElementsByClassName("tooltip fade show bs-tooltip-bottom")[0]
      elem?.parentNode.removeChild(elem)
      var elem = document.getElementsByClassName("tooltip fade show bs-tooltip-bottom")[0]
      elem?.parentNode.removeChild(elem)
    
    })}

  </div>
  
  : ""
 
  )





}


