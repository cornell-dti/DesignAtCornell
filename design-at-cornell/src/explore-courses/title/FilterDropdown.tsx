import React, { useState } from 'react';
import {
  FilterButton,
  FilterDropdownContainer,
  FilterFormContainer,
} from '../ExploreCoursesStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';
import { Form } from '../../components/FormStyles';

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
              }}
            />
            <label htmlFor={tag}>{tag}</label>
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
      <FilterFormContainer expand={expand}>{filterForm}</FilterFormContainer>
    </FilterDropdownContainer>
  );
};

type Props = {
  category: string;
  tags: Filters;
  setTags: SetFilters;
};

export default FilterDropdown;
