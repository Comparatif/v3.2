import { useSearchkit, PaginationLink } from '@searchkit/client';
import React from 'react';
import ReactPaginate from "react-paginate";


export const Pagination = ({ data }) => {
    const api = useSearchkit();
    const currentPage = data?.hits.page.pageNumber
    

    

    return (
      <div class="container">
      
      <br/>
      <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      pageCount={data?.hits.page.totalPages}
      pageRangeDisplayed= {3}
      marginPagesDisplayed = {0}
      onPageChange={({selected: selectedPage}) => {
        api.setPage({ size: data?.hits.page.size, from: selectedPage * data?.hits.page.size })
        api.search()
      }}
      containerClassName={"pagination pagination-info justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link mx-1"}
      activeClassName={currentPage === selectedPage ? "page-item active": "page-item"}
      previousLinkClassName={"btn bg-gradient-info mx-2"}
      nextLinkClassName={"btn bg-gradient-info mx-2"}
      initialPage= {currentPage}

      
      
      />
      
      {currentPage}
      </div>
      

    )
}







