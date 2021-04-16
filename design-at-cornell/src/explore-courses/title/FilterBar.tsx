import React from 'react';
import {
  FilterBarContainer,
  FilterButton,
} from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';

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
  </FilterBarContainer>
)

export default FilterBar