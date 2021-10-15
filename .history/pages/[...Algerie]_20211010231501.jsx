import Algerie from './Algerie'
import Test from '../components/ssg/test'

const path = typeof window !== "undefined" ? window.location.pathname : ""
const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'
console.log(path)

export default ( path == actualpath) ?  Test : Algerie
