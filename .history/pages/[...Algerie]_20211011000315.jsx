import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'
import { Markup } from 'interweave';



const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'



export default  ( routerasPath == actualpath) ?  <Markup content={Test}/> : Algerie


function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    return (
        ( asPath == actualpath) ?  <Markup content={Test}/> : Algerie
    )
  }