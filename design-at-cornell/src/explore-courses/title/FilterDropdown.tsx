import React from 'react';
import { FilterDropdownProps } from '../types/PropertyTypes';
import { ClearCategoryFilters, FilterDropdownContainer } from '../ExploreCoursesStyles';
import FilterCheckbox from './FilterCheckbox';

const FilterDropdown = ({
  checkboxLabels,
  checkboxData,
  expand,
  onCheck,
  onClear,
}: FilterDropdownProps) => {
  const checkboxes = checkboxLabels.map((label) => (
    <FilterCheckbox
      key={label}
      label={label}
      checked={checkboxData.has(label)}
      onClick={() => onCheck(label)}
    />
  ));
  const clearFilters = (
    <ClearCategoryFilters onClick={onClear}>Clear All Filters</ClearCategoryFilters>
  );
  return (
    <FilterDropdownContainer expand={expand}>
      {checkboxes}
      {checkboxData.size > 0 && clearFilters}
    </FilterDropdownContainer>
  );
};

export default FilterDropdown;
