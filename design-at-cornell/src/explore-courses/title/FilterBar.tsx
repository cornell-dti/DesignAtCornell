import React from 'react';
import {
  FilterBarContainer,
  FilterButton,
  SavedCoursesButton
} from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';
import bookmarked from '../../static/images/bookmarked.svg';

const FilterBar = () => (
  <FilterBarContainer>
    <FilterButton>
      <p>Design Areas</p>
      <img src={downArrow} alt={"expand"} />
    </FilterButton>
    <FilterButton>
      <p>Major/Minors</p>
      <img src={downArrow} alt={"expand"} />
    </FilterButton>
    <FilterButton>
      <p>Semester</p>
      <img src={downArrow} alt={"expand"} />
    </FilterButton>
    <FilterButton>
      <p>Level</p>
      <img src={downArrow} alt={"expand"} />
    </FilterButton>
    <FilterButton>
      <p>Credits</p>
      <img src={downArrow} alt={"expand"} />
    </FilterButton>
    <input type="text" placeholder="Name, Keywords, Topics, Etc" />
    <SavedCoursesButton>
      <img src={bookmarked} alt={"saved courses"} />
      <p>Saved Courses</p>
    </SavedCoursesButton>
  </FilterBarContainer>
)

export default FilterBar