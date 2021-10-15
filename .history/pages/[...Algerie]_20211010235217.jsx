import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'
import { Markup } from 'interweave';



const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'



export default function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    ( asPath == actualpath) ?return (
          <Markup content={Test}/> : Algerie
    )
  }