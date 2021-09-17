import { makeVar, InMemoryCache, useQuery } from '@apollo/client';
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'

const variables = useSearchkitVariables()
  const { previousData, data = previousData, loading } = useQuery(query, { variables })
export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = makeVar('and')


export const ChangeView = makeVar('Liste');



