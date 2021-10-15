import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'
import { Markup } from 'interweave';



const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'



export default function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    if (typeof ) console.log(window.location.pathname)
    return (
        ( asPath == actualpath ) ?  <Markup content={Test}/> : <Algerie/>
    )
  }


