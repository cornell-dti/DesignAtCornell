import React, { useState } from 'react';
import {
  MobileFilterDropdownContainer,
  MobileCoursesFilterButton,
  ScrolledMobileLargeFilterFormContainer,
} from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';
import { Form } from '../../components/FormStyles';
import { department_name } from '../../constants/departments';
import exit from '../../static/images/exit.svg';

const MobileFilterDropdown = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [appliedDesignOptions, setDesignOptions] = useState<number>(0);
  const [appliedDepartmentOptions, setDepartmentOptions] = useState<number>(0);
  const [appliedSemesterOptions, setSemesterOptions] = useState<number>(0);
  const [appliedLevelOptions, setLevelOptions] = useState<number>(0);
  const [appliedCreditOptions, setCreditOptions] = useState<number>(0);

  const filterForm = (
    tags: Filters,
    setter: SetFilters,
    appliedOptions: number,
    setAppliedOptions: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <Form>
      {Object.entries(tags).map(([tag, _]) =>
        tag === 'all' ? null : (
          <div key={tag}>
            <input
              type="checkbox"
              id={tag}
              onChange={(event) => {
                const newNumApplied = appliedOptions + (event.target.checked ? 1 : -1);
                const newTags = { ...tags };
                newTags[tag] = event.target.checked;
                newTags['all'] = newNumApplied === 0;
                setAppliedOptions(newNumApplied);
                setter(newTags);
                props.setPage(1);
              }}
            />
            <label htmlFor={tag}>{tag === 'Majors/Minors' ? department_name[tag] : tag}</label>
          </div>
        )
      )}
    </Form>
  );

  return (
    <MobileFilterDropdownContainer>
      <MobileCoursesFilterButton onClick={() => setExpand(!expand)} expand={expand}>
        <p>Filters</p>
        <img src={downArrow} alt={'expand'} />
      </MobileCoursesFilterButton>
      <ScrolledMobileLargeFilterFormContainer expand={expand}>
        <img onClick={() => setExpand(false)} src={exit} alt="close" />
        <h4>Design Areas</h4>
        {filterForm(
          props.designAreaTags,
          props.setDesignTags,
          appliedDesignOptions,
          setDesignOptions
        )}
        <h4>Majors & Minors</h4>
        {filterForm(
          props.departmentTags,
          props.setDepartmentTags,
          appliedDepartmentOptions,
          setDepartmentOptions
        )}
        <h4>Semesters</h4>
        {filterForm(
          props.semesterTags,
          props.setSemesterTags,
          appliedSemesterOptions,
          setSemesterOptions
        )}
        <h4>Levels</h4>
        {filterForm(props.levelTags, props.setLevelTags, appliedLevelOptions, setLevelOptions)}
        <h4>Credits</h4>
        {filterForm(props.creditTags, props.setCreditTags, appliedCreditOptions, setCreditOptions)}
      </ScrolledMobileLargeFilterFormContainer>
    </MobileFilterDropdownContainer>
  );
};

export type Props = {
  designAreaTags: Filters;
  departmentTags: Filters;
  semesterTags: Filters;
  levelTags: Filters;
  creditTags: Filters;
  setDesignTags: SetFilters;
  setDepartmentTags: SetFilters;
  setSemesterTags: SetFilters;
  setLevelTags: SetFilters;
  setCreditTags: SetFilters;
  setPage: (page: React.SetStateAction<number>) => void;
  setSearch: (search: React.SetStateAction<string>) => void;
};

export default MobileFilterDropdown;
