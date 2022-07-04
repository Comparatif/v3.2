import dynamic from 'next/dynamic'

import withSoftUI from '../../hocs/withSoftUI';

const Dashboard = dynamic(() => import('../../components/New_feature/Softui-dashboard/layouts/dashboard'), { ssr: false })
export default withSoftUI(Dashboard)
  

