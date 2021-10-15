import { Markup } from 'interweave';
import { useRouter } from 'next/router'
import { Home } from '../ssg/test'

  const test = <Markup content={Home}/>
  export default test