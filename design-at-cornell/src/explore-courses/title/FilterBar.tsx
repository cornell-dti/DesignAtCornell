import React from 'react';
import { FilterBarContainer, SearchBar, SavedCoursesButton } from '../ExploreCoursesStyles';
import bookmarked from '../../static/images/bookmarked.svg';

const FilterBar = () => {
  return (
    <FilterBarContainer>
      <SearchBar placeholder="Name, Keywords, Topics, Etc" />
      <SavedCoursesButton>
        <img src={bookmarked} alt={'saved courses'} />
        <p>Saved Courses</p>
      </SavedCoursesButton>
    </FilterBarContainer>
  );
};

export default FilterBar;
