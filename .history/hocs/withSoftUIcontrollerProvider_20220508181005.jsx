import React from 'react'

import { SoftUIControllerProvider } from "context";


const withSoftUIcontrollerProvider = (Truc)=> {
  const router = useRouter()
  const pathname = useRouter().pathname
  const isRouteToAccount = pathname.includes("/Account")
    const WithStateComponent = () => {

    return(<SoftUIControllerProvider><Truc /></SoftUIControllerProvider>)}
    
    
      return WithStateComponent}

export default withSoftUIcontrollerProvider

