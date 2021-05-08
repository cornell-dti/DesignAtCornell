import React from 'react';
import FilterCategoryButton from './FilterCategoryButton';
import { FilterCategoryProps } from '../types/PropertyTypes';
import { FilterCategoryContainer } from '../ExploreCoursesStyles';
import FilterDropdown from './FilterDropdown';
import FilterDropdownScroll from './FilterDropdownScroll';

const FilterCategory = (props: FilterCategoryProps) => {
  const open = props.open;
  const category = props.category;
  const dropdownType = props.scroll ? FilterDropdownScroll : FilterDropdown;
  return (
    <FilterCategoryContainer>
      <FilterCategoryButton
        label={category}
        open={open}
        applied={props.checkboxData.size}
        onClick={props.onToggle}
      />
      {open && dropdownType({ ...props })}
    </FilterCategoryContainer>
  );
};

export default FilterCategory;
