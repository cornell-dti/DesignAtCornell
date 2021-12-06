import React from 'react';
import { StyledPagination, PageButton, PageNavButton } from './PaginationStyles';
import rightArrow from '../static/images/right-arrow.svg';

const Pagination = ({ currentPage, cardsPerPage, totalCards, paginate }: Props) => {
  const numPages = Math.ceil(totalCards / cardsPerPage);
  const pageNumbers = [];

  if (numPages > 1) {
    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <StyledPagination>
      {currentPage > 1 ? (
        <PageNavButton direction="left" onClick={() => paginate(currentPage - 1)}>
          <img src={rightArrow} alt="previous page" />
          Previous
        </PageNavButton>
      ) : (
        <div />
      )}
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <PageButton selected={page === currentPage} onClick={() => paginate(page)}>
              {page}
            </PageButton>
          </li>
        ))}
      </ul>
      {currentPage < numPages ? (
        <PageNavButton direction="right" onClick={() => paginate(currentPage + 1)}>
          Next
          <img src={rightArrow} alt="next page" />
        </PageNavButton>
      ) : (
        <div />
      )}
    </StyledPagination>
  );
};

export default Pagination;

interface Props {
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  paginate(page: number): void;
}