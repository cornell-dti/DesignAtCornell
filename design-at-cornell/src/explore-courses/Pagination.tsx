import React from 'react';
import { StyledPagination } from './ExploreCoursesStyles';

const Pagination = ({ currentPage, coursesPerPage, totalCourses, paginate }: Props ) => {
  const numPages = Math.ceil(totalCourses / coursesPerPage);
  const pageNumbers = [];

  if (numPages > 1) {
    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map(page => (
          <li key={page}>
            <button onClick={() => paginate(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
      {(currentPage < numPages)? 
        <button onClick={() => paginate(currentPage + 1)}>
          Next
        </button> : null        
      }
    </StyledPagination>
  );
};

export default Pagination

interface Props {
  currentPage: number
  coursesPerPage: number
  totalCourses: number
  paginate(page: number): void
}