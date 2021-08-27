import { withSearchkit, SearchkitClient } from '@searchkit/client'
import dynamic from 'next/dynamic'
import withApollo from '../../../hocs/withApollo'
import router from 'next/router'


const Search = dynamic(() => import('../../../components/composants_pc.jsx'), { ssr: false })

function laptop () {
  return router.query.laptop
}

export default withApollo(withSearchkit(Search))




