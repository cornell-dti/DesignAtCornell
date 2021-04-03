import React from 'react';
import { filterCategoryChangeHandler } from '../data-structures/Handlers';
import { TitleProps } from '../data-structures/PropertyTypes';
import Set from '../data-structures/Set';
import { FilterBarContainer } from '../ExploreCoursesStyles';
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
  return (
    <FilterBarContainer>
      <FilterCategory
        category='Design Areas'
        checkboxLabels={FilterDropdownCheckboxes['Design Areas']}
        checkboxData={filterData['Design Areas']}
        onChange={handleFilterCategoryChange('Design Areas')}
      />
      <FilterCategory
        category='Majors/Minors'
        checkboxLabels={FilterDropdownCheckboxes['Majors/Minors']}
        checkboxData={filterData['Majors/Minors']}
        onChange={handleFilterCategoryChange('Majors/Minors')}
      />
      <FilterCategory
        category='Semester'
        checkboxLabels={FilterDropdownCheckboxes['Semester']}
        checkboxData={filterData['Semester']}
        onChange={handleFilterCategoryChange('Semester')}
      />
      <FilterCategory
        category='Level'
        checkboxLabels={FilterDropdownCheckboxes['Level']}
        checkboxData={filterData['Level']}
        onChange={handleFilterCategoryChange('Level')}
      />
      <FilterCategory
        category='Credits'
        checkboxLabels={FilterDropdownCheckboxes['Credits']}
        checkboxData={filterData['Credits']}
        onChange={handleFilterCategoryChange('Credits')}
      />
    </FilterBarContainer>
  );
};

export default FilterBar;
