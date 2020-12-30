import * as React from 'react';

interface Interface {
  perPage: number
  currentPage: number
  total: number
  onPageChangeClick: Function
}

const Pagination = (props: Interface) => {
  const {
    perPage,
    currentPage,
    total,
    onPageChangeClick
  } = props;
  
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const totalPages = Math.ceil(total / perPage);
  
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination table-pagination">
        <li className={ previousPage < 1 ? 'page-item disabled' : 'page-item' }>
          <a
            className="page-link"
            href="#"
            onClick={ (event) => onPageChangeClick(event, previousPage) }
          >Prev</a>
        </li>
        <li className={ nextPage > totalPages ? 'page-item disabled' : 'page-item' }>
          <a
            className="page-link"
            href="#"
            onClick={ (event) => onPageChangeClick(event, nextPage) }
          >Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;