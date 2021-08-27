import { useSearchkit } from '@searchkit/client';
import React from 'react';
import ReactPaginate from "react-paginate";


export const Pagination = ({ data }) => {
    const api = useSearchkit();
    

    

    return (
      <div class="container">
      
      <br/>
      <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      pageCount={data?.hits.page.totalPages}
      activePage={data?.hits.page.pageNumber}
      pageRangeDisplayed= {3}
      marginPagesDisplayed = {0}
      onPageChange={() => {
        api.setPage({ size: data.hits.page.size, from: data?.hits.page.pageNumber * data.hits.page.size })
        api.search()
      }}
      containerClassName={"pagination pagination-info justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link mx-1"}
      activeClassName={"page-item active"}
      previousLinkClassName={"btn bg-gradient-info mx-2"}
      nextLinkClassName={"btn bg-gradient-info mx-2"}

      
      
      />
      </div>

    )
}



<PaginationUIComponent
      pageCount={data?.hits.page.totalPages}
      activePage={data?.hits.page.pageNumber}
      onPageClick={(activePage) => {
        api.setPage({ size: data.hits.page.size, from: activePage * data.hits.page.size })
        api.search()
      }}
    />