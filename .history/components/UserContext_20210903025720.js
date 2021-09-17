import { makeVar, InMemoryCache } from '@apollo/client';
import { useSearchkit } from '@searchkit/client'
import { useSearchkitVariables } from '@searchkit/client'
import { gql, useQuery } from '@apollo/client'
import { useSearchkit, useSearchkitVariables, useSearchkitQueryValue } from '@searchkit/client'


export const SearchkitIndex = makeVar('Composants_pc')
export const cartItemsVar = makeVar('and')


export const ChangeView = makeVar('Liste');



