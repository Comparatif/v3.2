import { makeVar, InMemoryCache } from '@apollo/client';
import { useSearchkit } from '@searchkit/client'


export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = makeVar('and')

function rths() {
    const prix_croissant = "prix_croissant"
    const api = useSearchkit();
    console.log(api.isFilterSelected('relevance') ? "true" : "false")}
export const ChangeView = makeVar('Liste');



