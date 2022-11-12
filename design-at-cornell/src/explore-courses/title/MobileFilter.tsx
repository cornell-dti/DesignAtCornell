import React from 'react';
import { MobileFilterBarContainer, MobileSearchBar } from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import MobileFilterDropdown from './MobileFilterDropdown';

const FilterBar = (props: Props) => {
  return (
    <MobileFilterBarContainer>
      <MobileSearchBar
        placeholder="Search"
        onChange={(event) => {
          props.setSearch(event.target.value);
          props.setPage(1);
        }}
      />
      <MobileFilterDropdown
        {... {
          designAreaTags: props.designAreaTags,
          departmentTags: props.departmentTags,
          semesterTags: props.semesterTags,
          levelTags: props.levelTags,
          creditTags: props.creditTags,
          setDesignTags: props.setDesignTags,
          setDepartmentTags: props.setDepartmentTags,
          setSemesterTags: props.setSemesterTags,
          setLevelTags: props.setLevelTags,
          setCreditTags: props.setCreditTags,
          setPage: props.setPage,
          setSearch: props.setSearch
        }}
      />
    </MobileFilterBarContainer>
  );
};

export type Props = {
  filterList: { category: string; tags: Filters; setTags: SetFilters }[];
  designAreaTags: Filters,
  departmentTags: Filters,
  semesterTags: Filters,
  levelTags: Filters,
  creditTags: Filters,
  setDesignTags: SetFilters,
  setDepartmentTags: SetFilters,
  setSemesterTags: SetFilters,
  setLevelTags: SetFilters,
  setCreditTags: SetFilters,
  setPage: (page: React.SetStateAction<number>) => void;
  setSearch: (search: React.SetStateAction<string>) => void;
};


export default FilterBar;
