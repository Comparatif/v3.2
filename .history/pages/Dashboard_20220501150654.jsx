import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'
import { gql, useQuery } from '@apollo/client'
//const { asPath } = useRouter()
//const api = useSearchkit();
import {Ligne} from '../components/New_feature/ligne'
import Dashboard from ''
const Dashboard = dynamic(() => import('../components/New_feature/Admin/Dashboard'), { ssr: false })
//const Search = dynamic(() => import('../components/New_feature/ligne'), { ssr: false })

    
export default Dashboard
  

//<SearchkitProvider client={client2}><Search2/> </SearchkitProvider>