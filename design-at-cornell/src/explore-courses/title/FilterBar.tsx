import React, { useState } from 'react';
import { filterCategoryChangeHandler } from '../types/Handlers';
import { TitleProps } from '../types/PropertyTypes';
import { FilterBarContainer, FilterDropdownsList, SearchBar } from '../ExploreCoursesStyles';
import FilterCategory from './FilterCategory';

const FilterBar = ({ filterData, onChange, dropdownInfo }: TitleProps) => {
  const [openDropdown, setOpenDropdown] = useState('');
  const handleFilterCategoryChange = (category: string): filterCategoryChangeHandler => (
    checkboxLabel => {
      onChange(new Map(
        Array.from(filterData.entries()).map(([k, v]) => {
          if (k !== category) return [k, v];
          const copy = new Set(v);
          if (copy.has(checkboxLabel)) copy.delete(checkboxLabel);
          else copy.add(checkboxLabel);
          return [k, copy];
        })
      ));
    }
  );
  return (
    <FilterBarContainer>
      <FilterDropdownsList>
        {Array.from(dropdownInfo.entries()).map(([category, info]) => {
          const open = category === openDropdown;
          return (
            <FilterCategory
              key={category}
              category={category}
              open={open}
              onToggle={() => setOpenDropdown(open ? '' : category)}
              {...info}
              checkboxData={filterData.get(category) || new Set()}
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
