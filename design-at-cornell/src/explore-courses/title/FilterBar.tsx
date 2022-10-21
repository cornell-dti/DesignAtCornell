import React from 'react';
import { FilterBarContainer, SearchBar } from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import FilterDropdown from './FilterDropdown';

const FilterBar = (props: Props) => {
  return (
    <FilterBarContainer>
      <SearchBar
        placeholder="Search"
        onChange={(event) => {
          props.setSearch(event.target.value);
          props.setPage(1);
        }}
      />
      {props.filterList.map((f) => (
        <FilterDropdown key={f.category} {...{ ...f, setPage: props.setPage }} />
      ))}
    </FilterBarContainer>
  );
};

export type Props = {
  filterList: { category: string; tags: Filters; setTags: SetFilters }[];
  setPage: (page: React.SetStateAction<number>) => void;
  setSearch: (search: React.SetStateAction<string>) => void;
};

export default FilterBar;
