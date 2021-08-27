import { useSearchkit, PaginationLink } from '@searchkit/client'
import React from 'react'

export const Pagination = ({ data, loading }) => {
  const api = useSearchkit()

  const currentPage = data.hits.page.pageNumber

  return (
    <>
      <PaginationLink page={currentPage - 1}>Previous</PaginationLink>
      <PaginationLink page={currentPage + 1}>Next</PaginationLink>
    </>
  )
}