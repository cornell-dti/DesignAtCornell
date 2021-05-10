import React, { useState } from 'react';
import { filterCategoryCheckHandler } from '../types/Handlers';
import { TitleProps } from '../types/PropertyTypes';
import {
  FilterBarContainer,
  FilterDropdownsList,
  SearchBar,
  SavedCoursesButton,
} from '../ExploreCoursesStyles';
import bookmarked from '../../static/images/bookmarked.svg';
import FilterCategory from './FilterCategory';
import Category from '../types/Category';

const FilterBar = ({ filterData, onChange, dropdownInfo, searchHandler }: TitleProps) => {
  const [openDropdown, setOpenDropdown] = useState<Category | ''>('');
  const handleFilterCategoryChange = (category: Category): filterCategoryCheckHandler => (
    checkboxLabel
  ) => {
    onChange(
      new Map(
        Array.from(filterData.entries()).map(([k, v]) => {
          if (k !== category) return [k, v];
          const copy = new Set(v);
          if (copy.has(checkboxLabel)) copy.delete(checkboxLabel);
          else copy.add(checkboxLabel);
          return [k, copy];
        })
      )
    );
  };
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
        <SearchBar
          width="338px"
          placeholder="Name, Keywords, Topics, Etc"
          background='white'
          onChange={searchHandler}
        />
        <SavedCoursesButton>
          <img src={bookmarked} alt={'saved courses'} />
          <p>Saved Courses</p>
        </SavedCoursesButton>
      </FilterDropdownsList>
    </FilterBarContainer>
  );
};

export default FilterBar;
