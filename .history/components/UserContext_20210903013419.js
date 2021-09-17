import { makeVar, InMemoryCache } from '@apollo/client';
import { SearchkitClient } from '@searchkit/client'
const client = new SearchkitClient()

console.log(client.isFilterSelected('prix_croissant') ? "true" : "false")

export const SearchkitIndex = makeVar('Composants_pc');
export const cartItemsVar = makeVar('and');
export const ChangeView = makeVar('Liste');



