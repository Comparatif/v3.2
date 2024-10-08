import React , { useEffect, useState, useCallback, useMemo } from 'react'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../../hocs/withApollo'
import { isArray } from 'lodash';
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../../components/UserContext.js'
import { getDataFromTree } from "@apollo/client/react/ssr"
import { useRouter } from 'next/router'
import isbot from 'isbot'
import { gql, useQuery } from '@apollo/client'

import { SoftUIControllerProvider } from "context";


//import Dashboard from '../components/New_feature/Admin/Dashboard'
import Dashboard from '../../components/New_feature/Softui-dashboard/layouts/dashboard'
// @mui material components


import withSoftUI from '../../hocs/withSoftUI';




export default withSoftUI(Dashboard)
  

