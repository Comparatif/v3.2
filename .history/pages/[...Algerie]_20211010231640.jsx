import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'

const router = useRouter()

router.pathname
const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'
console.log(path)

export default ( path == actualpath) ?  Test : Algerie
