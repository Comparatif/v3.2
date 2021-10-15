import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'




const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'
console.log(path)


export default function ActiveLink() {
    const router = useRouter()
  
  
    return (
        ( router.pathname == actualpath) ?  Test : Algerie
    )
  }