import firebase from '../../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState} from 'react'
import { useAuth } from '../context/AuthContext'

export const SignInPopup = () =>

{
  const { user, signup } = useAuth()
  //const [ShowLogin, setShowLogin] = useState('Hidden')
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    signupError: '',
    successMessage: '',
  })
  console.log(user)
 

  const Confirmation = (data.password == data.password_confirmation) && ((data.password.length && data.password_confirmation.length) >= 8)

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password_confirmation).then(
        setData({...data, successMessage: "Vous êtes connectés"}))
    } catch (err) {
      console.log(err)
      setData({
        ...data,
        signupError: err.message,
      })
    }

    console.log(data)
  }
return(


    
    
    <div className="modal fade" id="modal-form-signin" tabIndex={-1} aria-labelledby="modal-form" style={{display: "none"}} aria-hidden="true">
    {!user?
    <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
    <div className="modal-body p-0">
    
    
      
          <div className="card overflow-hidden">
            <div className="row">
              <div className="col-lg-7">
                <form onSubmit={handleSignup} className="p-3" id="signup-Form">
                  <div className="card-header px-4 pt-sm-5 pb-sm-3 pt-3 pb-2">
                    <h2>Bienvenue sur Comparatifdz !</h2>
                    <p className="lead"> Créer un compte c'est très simple :</p>
                  </div>
                  <div className="card-body pt-1">
                    <div className="row">
                      <div className="col-md-12 pe-2 mb-3">
                        <label>Adresse e-mail</label>
                        <input 
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            email: e.target.value,
                          })
                        }
                        value={data.email}
                        
                        
                        className="form-control" placeholder="Adresse e-mail" type="email" id="signup-email"/>
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <label>Mot de passe (8 caractères minimum)</label>
                        <input 
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            password: e.target.value,
                          })
                        }
                        value={data.password}
                        className={Confirmation ? "form-control bg-gradient-success" :"form-control"} type="password" placeholder="Mot de passe" />
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <label>Confirmer le mot de passe (8 caractères minimum)</label>
                        <input 
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            password_confirmation: e.target.value,
                          })
                        }
                        value={data.password_confirmation}
                        className={Confirmation ? "form-control bg-gradient-success" :"form-control"} type="password" placeholder="Mot de passe" />
                      </div>
                      <p className="text-warning m-0">{data.signupError}</p>
                      
                    </div>
                    <div className="row">
                      <div className="col-md-6 text-right ms-auto">
                        <button 
                        
                        type="submit" className={Confirmation ? "btn btn-round bg-gradient-info mb-0" : "btn btn-round bg-gradient-info mb-0 disabled"}>Créer un compte</button>

                        
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 position-relative bg-cover px-0" style={{backgroundImage: "url(" + "/img/curved-images/curved5.jpg" + ")"}}>
                <div className="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
                  <img src="/img/wave-1.svg" className="h-100 ms-n2" alt="vertical-wave"/>
                </div>
                <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div className="mask bg-gradient-info opacity-9"></div>
                  <div className="p-5 ps-sm-8 position-relative text-left my-auto z-index-2">
                    <h3 className="text-white">Contact Information</h3>
                    <p className="text-white opacity-8 mb-4">Notre équipe est la pour vous aider 24/7</p>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">0555 37 70 86</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-envelope text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">comparatif.algerie@gmail.com</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-map-marker-alt text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">Alger, Bir Mourad Rais</span>
                      </div>
                    </div>
                    <div className="mt-4">
                    <a href="https://www.facebook.com/Comparatifdz" target="_blank">
                      <button  type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook" data-bs-original-title="" title="">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </button>
                      </a>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter" data-bs-original-title="" title="">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble" data-bs-original-title="" title="">
                        <i className="fab fa-dribbble" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram" data-bs-original-title="" title="">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
   
  
   
   
   
  
  </div>
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
 


)





}


