import React from 'react';
import { FilterBarContainer, SearchBar } from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import { RectangularButton } from '../../components/ButtonStyles';
import bookmarked from '../../static/images/bookmarked.svg';
import FilterDropdown from './FilterDropdown';

const FilterBar = (props: Props) => {
  return (
    <FilterBarContainer>
      {props.filterList.map((f) => (
        <FilterDropdown key={f.category} {...{ ...f, setPage: props.setPage }} />
      ))}
      <SearchBar
        placeholder="Name, Keywords, Topics, Etc"
        onChange={(event) => {
          props.setSearch(event.target.value);
          props.setPage(1);
        }}
      />
      <RectangularButton>
        <img src={bookmarked} alt={'saved courses'} />
        <p>Saved Courses</p>
      </RectangularButton>
    </FilterBarContainer>
  );
};

export type Props = {
  filterList: { category: string; tags: Filters; setTags: SetFilters }[];
  setPage: (page: React.SetStateAction<number>) => void;
  setSearch: (search: React.SetStateAction<string>) => void;
};

export default FilterBar;
