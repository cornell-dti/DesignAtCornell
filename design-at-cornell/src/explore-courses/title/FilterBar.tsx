import React from 'react';
import { filterCategoryChangeHandler } from '../data-structures/Handlers';
import { TitleProps } from '../data-structures/PropertyTypes';
import StringSet from '../data-structures/StringSet';
import { FilterBarContainer } from '../ExploreCoursesStyles';
import FilterCategory from './FilterCategory';


const FilterBar = ({ filterData, onChange }: TitleProps) => {
  const handleFilterCategoryChange = (category: string): filterCategoryChangeHandler => (
    checkboxLabel => {
      onChange(
        Object.fromEntries(
          Object.entries(filterData).map(([k, v]) => {
            if (k !== category) return [k, v];
            const copy = StringSet.copyOf(v);
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
        checkboxData={filterData['Design Area']}
        onChange={handleFilterCategoryChange('Design Areas')}
      />
      <FilterCategory
        category='Majors/Minors'
        checkboxData={filterData['Majors/Minors']}
        onChange={handleFilterCategoryChange('Majors/Minors')}
      />
      <FilterCategory
        category='Semester'
        checkboxData={filterData['Semester']}
        onChange={handleFilterCategoryChange('Semester')}
      />
      <FilterCategory
        category='Level'
        checkboxData={filterData['Level']}
        onChange={handleFilterCategoryChange('Level')}
      />
      <FilterCategory
        category='Credits'
        checkboxData={filterData['Credits']}
        onChange={handleFilterCategoryChange('Credits')}
      />
    </FilterBarContainer>
  );
};

export default FilterBar;
