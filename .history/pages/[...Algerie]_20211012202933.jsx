import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'
import { Markup } from 'interweave';



const pathInDb = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'



export default function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    
    return (
        ( asPath == pathInDb ) ?  <Markup content={Test}/> : <Algerie/>
    )
  }


  export default function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    
    return (
        ( asPath == pathInDb ) ?  <Markup content={Test}/> : <Algerie/>
    )
  }