import React from 'react'
import { useRouter } from 'next/router'
import { SoftUIControllerProvider } from "context";


const withSoftUIcontrollerProvider = (Machin) => {
  
    const WithStateComponent = () => {
    return(
     
      <SoftUIControllerProvider>
      <Machin />
      </SoftUIControllerProvider>
      
      
      
      )  
    }
    
    
      return WithStateComponent}

export default withSoftUIcontrollerProvider

