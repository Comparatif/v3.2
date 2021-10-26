import { withSearchkit, SearchkitClient } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'


if (typeof window !== `undefined`) {console.log('123')}
const Search = dynamic(() => import('../components/index'), { ssr: false })



export default withApollo(withSearchkit(Search))