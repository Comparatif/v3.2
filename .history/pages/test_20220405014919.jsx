import { SearchkitClient, SearchkitProvider } from '@searchkit/client'

  const client = new SearchkitClient()

  export default () => (
    <SearchkitProvider client={client}>
      <SearchComponents />
    </SearchkitProvider>
  )
  