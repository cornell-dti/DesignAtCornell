import React from 'react';
import {
  MobileAreaOfStudyStyledPagination,
  MobileAreaOfStudyPageNavButton,
} from './PaginationStyles';
import rightArrow from '../static/images/right-arrow.svg';

const MobileAreaOfStudyPagination = ({ pages, paginate }: Props) => {
  return (
    <MobileAreaOfStudyStyledPagination>
      <ul>
        <MobileAreaOfStudyPageNavButton
          direction="left"
          onClick={() => paginate([pages[1], pages[2], pages[0]])}
        >
          <img src={rightArrow} alt="prev page" />
          {pages[1]}
        </MobileAreaOfStudyPageNavButton>
        <MobileAreaOfStudyPageNavButton
          direction="right"
          onClick={() => paginate([pages[2], pages[0], pages[1]])}
        >
          {pages[2]}
          <img src={rightArrow} alt="next page" />
        </MobileAreaOfStudyPageNavButton>
      </ul>
    </MobileAreaOfStudyStyledPagination>
  );
};

export default MobileAreaOfStudyPagination;

interface Props {
  pages: String[];
  paginate(pages: String[]): void;
}
