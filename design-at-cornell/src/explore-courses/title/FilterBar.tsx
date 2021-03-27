import React from 'react';
import { FilterBarContainer } from '../ExploreCoursesStyles';
import FilterOption from './FilterOption';

const FilterBar = () => (
  <FilterBarContainer>
    <FilterOption label='Design Areas' />
    <FilterOption label='Majors/Minors' />
    <FilterOption label='Semester' />
    <FilterOption label='Level' />
    <FilterOption label='Credits' />
  </FilterBarContainer>
)

export default FilterBar