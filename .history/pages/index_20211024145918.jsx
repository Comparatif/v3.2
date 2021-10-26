import { withSearchkit, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'



const Search = dynamic(() => import('../components/index'), { ssr: true })



export default withApollo(withSearchkit(Search))