import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'

//const { asPath } = useRouter()
//const api = useSearchkit();
const Index = dynamic(() => import('../components/index'), { ssr: true })




  
  
  export default withApollo(withSearchkit(withSearchkitRouting
    (Index,

  })),
  { getDataFromTree }
  
  
  )
  




