import React, { useContext } from 'react';
import { Pagination as SemanticPagination, StrictPaginationProps } from 'semantic-ui-react';
import { SemanticStyledPagination } from './PaginationStyles';
import { GlobalContext } from '../context/GlobalContext';

const Pagination = ({ currentPage, cardsPerPage, totalCards, paginate }: Props) => {
  const { isMobileView } = useContext(GlobalContext);

  const numPages = Math.ceil(totalCards / cardsPerPage);

  const updatePage: StrictPaginationProps['onPageChange'] = (e, { activePage }) => {
    paginate(activePage as number);
  };

  return (
    <SemanticStyledPagination>
      <SemanticPagination
        pointing
        secondary
        size={isMobileView ? 'tiny' : 'large'}
        firstItem={null}
        lastItem={null}
        activePage={currentPage}
        onPageChange={updatePage}
        totalPages={numPages}
      />
    </SemanticStyledPagination>
  );
};

export default Pagination;

interface Props {
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  paginate(page: number): void;
}
