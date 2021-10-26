import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'
import router from 'next/router'
import { gql, useQuery, useReactiveVar } from '@apollo/client'


const Search = dynamic(() => import('../components/forGoogle'), { ssr: true })

//const { asPath } = useRouter()
//const api = useSearchkit();

// Nodejs HTTP
//if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined')
//{console.log(isbot(navigator.userAgent) ? "true" : "false")}



  
  
  export default withApollo(withSearchkit(Search),{ getDataFromTree }
  
  
  )
  export async function getServerSideProps(context) {
    return {
      props: console.log(context)}, // will be passed to the page component as props
    }
  }