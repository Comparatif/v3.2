import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'



const path = typeof window !== "undefined" ? window.location.pathname : ""
const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'
console.log(path)


export default function ActiveLink() {
    const router = useRouter()
    const style = {
      marginRight: 10,
      color: router.pathname === href ? 'red' : 'black',
    }
  
    const handleClick = e => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
        ( path == actualpath) ?  Test : Algerie
    )
  }