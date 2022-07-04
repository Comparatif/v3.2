import React, { useEffect , useContext, useState, useRef, useCallback, useMemo} from 'react'

import { SoftUIControllerProvider } from "context";


const withSoftUIcontrollerProvider = (Truc)=> {
  
    const WithStateComponent = () => {

    return(<SoftUIControllerProvider><Truc /></SoftUIControllerProvider>)}
    
    
      return WithStateComponent}

export default withSoftUIcontrollerProvider

