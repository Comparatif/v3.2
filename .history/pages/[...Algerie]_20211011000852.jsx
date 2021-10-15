import Algerie from './Algerie'
import Test from '../components/ssg/test'
import { useRouter, withRouter } from 'next/router'
import { Markup } from 'interweave';

function Page({ router }) {
    return router.asPath
  }

const actualpath = '/Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'

console.log(withRouter(Page))

export default  ActiveLink == actualpath ?  <Markup content={Test}/> : Algerie


function ActiveLink() {
    const { asPath } = useRouter()
    console.log(asPath)
    return (
        asPath 
    )
  }