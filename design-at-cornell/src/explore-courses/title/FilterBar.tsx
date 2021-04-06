import React, { useState } from 'react';
import { filterCategoryChangeHandler } from '../data-structures/Handlers';
import { TitleProps } from '../data-structures/PropertyTypes';
import Set from '../data-structures/Set';
import { FilterBarContainer, FilterDropdownsList, SearchBar } from '../ExploreCoursesStyles';
import FilterCategory from './FilterCategory';

const FilterBar = ({ filterData, onChange, dropdownInfo }: TitleProps) => {
  const [openDropdown, setOpenDropdown] = useState('');
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
      <FilterDropdownsList>
        {Object.entries(dropdownInfo).map(([category, info]) => {
          const open = category === openDropdown;
          return (
            <FilterCategory
              key={category}
              category={category}
              open={open}
              onToggle={() => setOpenDropdown(open ? '' : category)}
              {...info}
              checkboxData={filterData[category]}
              onChange={handleFilterCategoryChange(category)}
            />
          );
        })}
        <SearchBar
          width="338px"
          placeholder="Name, Keywords, Topics, Etc"
          background='white'
        />
      </FilterDropdownsList>
    </FilterBarContainer>
  );
};

export default FilterBar;
