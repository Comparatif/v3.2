import { makeVar, InMemoryCache } from '@apollo/client';
import { useSearchkit } from '@searchkit/client'


export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = () =>  {

const api = useSearchkit();
console.log(api.isFilterSelected({'identifier' : 'prix_croissant'}) ? "true" : "false")
makeVar('and')}


export const ChangeView = makeVar('Liste');



