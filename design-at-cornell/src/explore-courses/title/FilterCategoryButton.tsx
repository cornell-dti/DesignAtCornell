import React from 'react';
import { FilterButton, FiltersApplied } from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';
import { FilterCategoryButtonProps } from '../types/PropertyTypes';

const FilterCategoryButton = ({ label, open, applied, onClick }: FilterCategoryButtonProps) => (
  <FilterButton onClick={onClick} open={open} applied={applied > 0}>
    <p>{label}</p>
    {applied === 0 ? (
      <img src={downArrow} alt={'expand'} />
    ) : (
      <FiltersApplied>
        <p>{applied}</p>
      </FiltersApplied>
    )}
  </FilterButton>
);

export default FilterCategoryButton;
