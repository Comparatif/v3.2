import AutoCompleteText_recherche from '../autocomplete/AutoCompleteText_recherche';
import {NavBar} from '../navbar/navbar';
import Footer from '../footer/footer';
import liste from '../autocomplete/liste.js'
import React, { useEffect , useContext, useState} from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, SearchkitClient, useSearchkitQueryValue, SearchkitProvider } from '@searchkit/client'
import router from 'next/router'
import {Maj} from '../../components/searchkit/stuff.jsx'
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import { useReactiveVar } from '@apollo/client'
import {Table} from './table.jsx'
import {test} from './page'
import {
  Pagination

} from '../../components/pagination/pagination'

import { HitsList } from '../searchkit/Hits_test.jsx'

  const client = new SearchkitClient()

  export default () => (
    <SearchkitProvider client={client}>
      <SearchComponents />
    </SearchkitProvider>
  )
  