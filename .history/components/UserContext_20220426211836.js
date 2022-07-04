import {Create}
import { makeVar, InMemoryCache, useQuery } from '@apollo/client';



export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = makeVar(null)
export const OffCanvas = makeVar(null)
export const orderStatus = makeVar({
    boutique: '',
    product_name: '',
})


export const ChangeView = makeVar('Liste');



