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
  const filterForm = (
    <Form>
      {Object.entries(props.tags).map(([tag, _]) =>
        tag === 'all' ? null : (
          <div key={tag}>
            <input type="checkbox" id={tag} />
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
