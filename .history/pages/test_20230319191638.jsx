import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'


const Search = dynamic(() => import('../components/New_feature/test'), { ssr: false })
//const Search = dynamic(() => import('../components/New_feature/ligne'), { ssr: false })

    
export default withApollo(Search)
  

//<SearchkitProvider client={client2}><Search2/> </SearchkitProvider>