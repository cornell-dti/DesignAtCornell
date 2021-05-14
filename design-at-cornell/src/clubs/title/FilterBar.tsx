import React, { useState } from 'react';
import { filterCategoryCheckHandler } from '../types/Handlers';
import { TitleProps } from '../types/PropertyTypes';
import { FilterBarContainer, FilterDropdownsList, SearchBarContainer, SearchBar } from '../ClubsStyles';
import FilterCategory from './FilterCategory';
import ClubsCategory from '../types/ClubsCategory';

const FilterBar = ({ filterData, onChange, dropdownInfo }: TitleProps) => {
  const [openDropdown, setOpenDropdown] = useState<ClubsCategory | ''>('');
  const handleFilterCategoryChange = (category: ClubsCategory): filterCategoryCheckHandler => (
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
              onCheck={handleFilterCategoryChange(category)}
              onClear={() => {
                const copy = new Map(filterData);
                copy.set(category, new Set());
                onChange(copy);
              }}
            />
          );
        })}
      </FilterDropdownsList>
      <SearchBarContainer>
        <SearchBar
          placeholder="Name, Keywords, Topics, Etc"
          background='white'
        />
      </SearchBarContainer>
    </FilterBarContainer>
  );
};

export default FilterBar;
