import React , { useEffect, useState, useCallback } from 'react'
import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'

import AutoCompleteText_recherche from './autocomplete/AutoCompleteText_recherche';
import {NavBar} from './navbar/navbar';
import Footer from './footer/footer';
import liste from './autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'

import {Maj} from '../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from './UserContext.js'
import { useReactiveVar } from '@apollo/client'


import {
  Pagination

} from '../components/pagination/pagination'

import { HitsList } from './searchkit/Hits_composants_pc.jsx'




  
  
  
  
  export default withApollo(withSearchkit(withSearchkitRouting
    (Search)),
  { getDataFromTree }
  
  
  )
  

