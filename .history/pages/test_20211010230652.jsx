import { Markup } from 'interweave';
import { useRouter } from 'next/router'
import { Home } from '../ssg/test'

  const test =() => {return <Markup content={Home}/>}

  export default test