import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'




const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'



export default function ActiveLink() {
    const { asPath } = useRouter()
    console.log(router.pathname)
    return (
        ( asPath.pathname == actualpath) ?  Test : Algerie
    )
  }