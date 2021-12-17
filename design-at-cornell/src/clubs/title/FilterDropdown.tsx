import React, { useState } from 'react';
import {
  FilterButton,
  FilterDropdownContainer,
  FilterFormContainer,
} from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';
import { Form } from '../../components/FormStyles';

const FilterDropdown = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [numApplied, setNumApplied] = useState<number>(0);

  /**
   * Listen for checkbox updates and flip the value of the corresponding tag.
   * Set tag 'all' to true iff none of the other tags are selected.
   * Tag 'all' is not displayed to users as a filter option,
   * it's only used in the club filtering step.
   */
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
  setPage: (page: React.SetStateAction<number>) => void;
};

export default FilterDropdown;
