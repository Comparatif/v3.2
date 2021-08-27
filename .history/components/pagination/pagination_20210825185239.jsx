import { useSearchkit } from '@searchkit/client';
import React from 'react';
import ReactPaginate from "react-paginate";


export const Pagination = ({ data }) => {
    const api = useSearchkit();
    

    

    return (
      <div
      pageCount={data?.hits.page.totalPages}
      activePage={data?.hits.page.pageNumber}
      onPageClick={(activePage) => {
        api.setPage({ size: data.hits.page.size, from: activePage * data.hits.page.size })
        api.search()
      }}
    />

    )
}







