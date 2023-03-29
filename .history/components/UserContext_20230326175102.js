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
export const PdfContext = createContext();


const ExcelTable = createContext({
    getData: () => {}
  });

  const getData = (data) => {
    const list1 = data?.results?.hits?.items.slice(0,1).map((hit)=> hit.fields.product_names).concat(data?.results.hits.items.map((hit) => hit.fields.vendeurs))
    const list2 = ["Prix"].concat(data?.results.hits.items.map((hit) => hit.fields.product_prices))
    setExcelData(...excelData, [list1, list2])
  };

export const useExcelTable = (id) => useContext(ExcelTable).getData(id);
  




