import Algerie from './Algerie'
import Home from '../ssg/test'

const path = typeof window !== "undefined" ? Algerie.window.location.pathname : ""
const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'
console.log(path)

export default ( path == actualpath) ?  Home : Algerie
