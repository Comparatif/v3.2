import { withSearchkit, SearchkitClient } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../hocs/withApollo'

const isBrowser = typeof window !== `undefined`
const search = isBrowser && window.location.search ? '' : ''


const Acceuil = dynamic(() => import('../components/index'), { ssr: false })
const Search = dynamic(() => import('../components/composants_pc'), { ssr: false })



export default isBrowser && window.location.search ? 



'' 








: withApollo(withSearchkit(Acceuil))


