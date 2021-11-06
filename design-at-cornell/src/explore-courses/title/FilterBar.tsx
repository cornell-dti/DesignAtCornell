import React from 'react';
import { FilterBarContainer, SearchBar, SavedCoursesButton } from '../ExploreCoursesStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import bookmarked from '../../static/images/bookmarked.svg';
import FilterDropdown from './FilterDropdown';

const FilterBar = (props: Props) => {
  return (
    <FilterBarContainer>
      {props.filterList.map((f) => (
        <FilterDropdown {...f} />
      ))}
      <SearchBar placeholder="Name, Keywords, Topics, Etc" />
      <SavedCoursesButton>
        <img src={bookmarked} alt={'saved courses'} />
        <p>Saved Courses</p>
      </SavedCoursesButton>
    </FilterBarContainer>
  );
};

export type Props = { filterList: { category: string; tags: Filters; setTags: SetFilters }[] };

export default FilterBar;
