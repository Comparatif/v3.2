import { makeVar, InMemoryCache } from '@apollo/client';
import { SearchkitClient } from '@searchkit/client'
const client = new SearchkitClient()

client.isFilterSelected('relevance') ? "true"

export const SearchkitIndex = makeVar('Composants_pc');
export const cartItemsVar = makeVar('and');
export const ChangeView = makeVar('Liste');



