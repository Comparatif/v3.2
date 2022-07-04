
import Dashboard from '../../components/New_feature/Softui-dashboard/layouts/dashboard'

import withSoftUI from '../../hocs/withSoftUI';

const Dashboard = dynamic(() => import('../../components/New_feature/Softui-dashboard/layouts/dashboard'), { ssr: false })
export default withSoftUI(Dashboard)
  

