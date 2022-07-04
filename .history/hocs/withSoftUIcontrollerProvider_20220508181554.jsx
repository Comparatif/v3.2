import React from 'react'
import { useRouter } from 'next/router'
import { SoftUIControllerProvider } from "context";


const withSoftUIcontrollerProvider = (Truc)=> {
  
    const WithStateComponent = () => {


    return(
     
      <SoftUIControllerProvider>
      <Truc />
      </SoftUIControllerProvider>
      
      
      
      )  
    }
    
    
      return WithStateComponent}

export default withSoftUIcontrollerProvider

