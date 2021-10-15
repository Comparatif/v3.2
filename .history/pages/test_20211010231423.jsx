import { Markup } from 'interweave';
import { useRouter } from 'next/router'
import { Test } from '../components/ssg/test'

const Home = () => {

    return (
      <Markup content={Test}/>   
      
    )
  }
  
  export default Home;