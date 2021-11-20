import React, { useState } from 'react';
import {
  FilterButton,
  FilterDropdownContainer,
  FilterFormContainer,
  LargeFilterFormContainer,
} from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';
import { Form } from '../../components/FormStyles';
import { department_name } from '../../constants/departments';

const FilterDropdown = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [numApplied, setNumApplied] = useState<number>(0);

  const filterForm = (
    <Form>
      {Object.entries(props.tags).map(([tag, _]) =>
        tag === 'all' ? null : (
          <div key={tag}>
            <input
              type="checkbox"
              id={tag}
              onChange={(event) => {
                const newNumApplied = numApplied + (event.target.checked ? 1 : -1);
                const newTags = { ...props.tags };
                newTags[tag] = event.target.checked;
                newTags['all'] = newNumApplied === 0;
                setNumApplied(newNumApplied);
                props.setTags(newTags);
                props.setPage(1);
              }}
            />
            <label htmlFor={tag}>
              {props.category === 'Majors/Minors' ? department_name[tag] : tag}
            </label>
          </div>
        )
      )}
    </Form>
  );

  return (
    <FilterDropdownContainer>
      <FilterButton onClick={() => setExpand(!expand)} expand={expand}>
        <p>{props.category}</p>
        <img src={downArrow} alt={'expand'} />
      </FilterButton>
      {props.category === 'Majors/Minors' ? (
        <LargeFilterFormContainer expand={expand}>{filterForm}</LargeFilterFormContainer>
      ) : (
        <FilterFormContainer expand={expand}>{filterForm}</FilterFormContainer>
      )}
    </FilterDropdownContainer>
  );
};

type Props = {
  category: string;
  tags: Filters;
  setTags: SetFilters;
  setPage: (page: React.SetStateAction<number>) => void;
};

export default FilterDropdown;
