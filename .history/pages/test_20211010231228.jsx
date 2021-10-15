import { Markup } from 'interweave';
import { useRouter } from 'next/router'
import { Test } from '../ssg/test'

const Home = () => {

    return (
      <Markup content={`${Test}`}/>   
      
    )
  }
  
  export default Home;