
import Dashboard from '../../components/New_feature/Softui-dashboard/layouts/dashboard'

import withSoftUI from '../../hocs/withSoftUI';

const Search = dynamic(() => import('../components/New_feature/test'), { ssr: false })
export default withSoftUI(Dashboard)
  

