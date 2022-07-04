import React from 'react'
import { useRouter } from 'next/router'
import { SoftUIControllerProvider } from "context";


const withSoftUIcontrollerProvider = (Truc)=> {
  
    const WithStateComponent = () => {
      const router = useRouter()
      const pathname = useRouter().pathname
      const isRouteToAccount = pathname.includes("/Account")

    return(
     
      <SoftUIControllerProvider>
      <Truc />
      </SoftUIControllerProvider>
      :

      
      <Truc />
      
      
      )  
    }
    
    
      return WithStateComponent}

export default withSoftUIcontrollerProvider

