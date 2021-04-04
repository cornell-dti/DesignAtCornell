import React from 'react';
import { filterCategoryChangeHandler } from '../data-structures/Handlers';
import { TitleProps } from '../data-structures/PropertyTypes';
import Set from '../data-structures/Set';
import { FilterBarContainer, FilterDropdownsList } from '../ExploreCoursesStyles';
import FilterCategory from './FilterCategory';
import FilterDropdownCheckboxes from './FilterDropdownCheckboxes';

const FilterBar = ({ filterData, onChange }: TitleProps) => {
  const handleFilterCategoryChange = (category: string): filterCategoryChangeHandler => (
    checkboxLabel => {
      onChange(
        Object.fromEntries(
          Object.entries(filterData).map(([k, v]) => {
            if (k !== category) return [k, v];
            const copy = Set.copyOf(v);
            copy.toggle(checkboxLabel);
            return [k, copy];
          })
        )
      );
    }
  );
  const categories = [
    'Design Areas',
    'Majors/Minors',
    'Semester',
    'Level',
    'Credits'
  ];
  return (
    <FilterBarContainer>
      <FilterDropdownsList>
        {categories.map(category =>
          <FilterCategory
            key={category}
            category={category}
            checkboxLabels={FilterDropdownCheckboxes[category]}
            checkboxData={filterData[category]}
            onChange={handleFilterCategoryChange(category)}
          />
        )}
      </FilterDropdownsList>
    </FilterBarContainer>
  );
};

export default FilterBar;
