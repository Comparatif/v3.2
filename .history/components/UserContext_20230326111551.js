import {createContext} from 'react'
import { makeVar, InMemoryCache, useQuery } from '@apollo/client';
import { isNullOrUndefined } from 'util';


export const UserContext = createContext()
export const TrackingContext = createContext({number: null, data:[]})
export const TrackingNumberContext = createContext(null)
export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = makeVar(null)
export const OffCanvas = makeVar(null)
export const orderStatus = makeVar({
    boutique: '',
    product_name: '',
    
})
export const Sub = makeVar(null)


export const ChangeView = makeVar('Liste');
export const PdfContext = createContext()
export const ExcelTable = createContext({number: null, data:[]})



