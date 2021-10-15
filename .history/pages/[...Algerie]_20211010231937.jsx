import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter } from 'next/router'




const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'


export default ( useRouter().pathname == actualpath) ?  Test : Algerie
