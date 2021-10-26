import { withSearchkit, SearchkitClient } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'


console.log(window.location.search)
const Search = dynamic(() => import('../components/index'), { ssr: false })



export default withApollo(withSearchkit(Search))