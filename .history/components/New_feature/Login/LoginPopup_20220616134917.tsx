import firebase from '../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import useToggle from '../../useful/toggle'


export const LoginPopup = () =>

{
  
  const [PasswordLost, setPasswordLost] = useState(false);
  const { user, login, sendPasswordReset, confirmPasswordReset } = useAuth()
  //const [ShowLogin, setShowLogin] = useState('Hidden')
  const [data, setData] = useState({
    email: '',
    password: '',
    emailRecovery: '',
    code: '',
    newPassword: '',
    loginError : '',
  })
  var actionCodeSettings = {
    url: window?.location?.href,
    handleCodeInApp: true
  };
 
  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
    } catch (err) {
      console.log(err);
      setData({
        ...data,
        loginError: err.message,
      })
    }
  }
  console.log(data)

  const handlesendPasswordReset = async (e: any) => {
    e.preventDefault()
    try {
      await sendPasswordReset(data.emailRecovery, actionCodeSettings)
    } catch (err) {
      console.log(err)
    }
  }

  const handleconfirmPasswordReset = async (e: any) => {
    e.preventDefault()
    try {
      await confirmPasswordReset(data.code, data.newPassword)
    } catch (err) {
      console.log(err)
      
    }
  }

return(

  <div className="modal fade" id="modal-form-login" tabIndex={-1} aria-labelledby="modal-form-login" aria-hidden="true">
  
  
  <div className={PasswordLost ? "modal-dialog modal-dialog-centered modal" : "modal-dialog modal-dialog-centered modal-sm"} role="document">
  <div className="modal-content">
  <div className="modal-body p-0">
{!user ?

//without user

  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient">
 {PasswordLost ? "Récuperation du mot de passe" : "Connectez-vous"} 
  </h3>
  <p className="mb-0 text-small">
  {PasswordLost ? "Veuillez entrer votre adresse e-mail, vous recevrez un e-mail " 
  : "Veuillez entrer vos identifiants"} 
  </p>
  </div>
  <div className="card-body">
{
!PasswordLost?
//login
  <form role="form text-left" onSubmit={handleLogin}>
  <label>Email</label>
  <div className="input-group mb-3">
  <input 
  onChange={(e: any) =>
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
  onChange={(e: any) =>
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
  <p className="text-warning m-0">{data.loginError}</p>
  <div className="text-center">
    
   
    
  <button  type="submit" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
  Connexion
  </button>
  </div>
  </form>
:

//Password Recovery Procedure

  <>
<form role="form text-left" onSubmit={handlesendPasswordReset}>
<label>Email</label>
<div className="input-group mb-3">
<input 
onChange={(e: any) =>
  setData({
    ...data,
    emailRecovery: e.target.value,
  })
}
value={data.emailRecovery}

type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
</div>

<div className="text-center">
<button  type="submit" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
Envoyer le code
</button>
</div>
</form>
{/*
//code & nouveau mot de passe
<form role="form text-left" onSubmit={handleconfirmPasswordReset}>
<label>Code</label>
<div className="input-group mb-3">
<input
onChange={(e: any) =>
  setData({
    ...data,
    code: e.target.value,
  })
}
value={data.code}
type="code" className="form-control" placeholder="Code" aria-label="Code" aria-describedby="Code-addon"/>
</div>
<label>Nouveau mot de passe</label>
<div className="input-group mb-3">
<input
onChange={(e: any) =>
  setData({
    ...data,
    newPassword: e.target.value,
  })
}
value={data.newPassword}
 className="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="password-addon"/>
</div>
<div className="text-center">
<button  type="submit" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
Changer mot de passe
</button>
</div>
</form>
*/}
</>

}


  </div>
  <div className="card-footer text-center pt-0 px-lg-2 px-1">
  <p className="mb-1 text-sm mx-auto">
 
  {PasswordLost ? 
  <a style={{cursor: "pointer"}} onClick={()=> setPasswordLost(false)} className="mb-0 text-small" >Se connecter</a>
  :
    <a style={{cursor: "pointer"}} onClick={()=> setPasswordLost(true)} className="mb-0 text-small" >Mot de passe oublié</a>}


  <br/>
  <a style={{cursor: "pointer"}} onClick={()=> setPasswordLost(false)} className="mb-0 text-small" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#modal-form-signin">Créer un compte</a>
  </p>
  </div>
  </div>

  : 
  //With user
  <div className="card card-plain">
  <div className="card-header pb-0 text-left">
  <h3 className="font-weight-bolder text-info text-gradient text-center">
  Bienvenue !
  </h3>
  <p className="mb-0 text-small text-center">
  Vous êtes connecté
  </p>
  </div>
  <div className="card-body">
  <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
  Ok
  </button>
  
  </div>
  </div>
}


  </div>
  </div>
  </div>
  </div>

 

 
  )





}


