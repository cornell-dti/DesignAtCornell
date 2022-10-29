import React, { useState } from 'react';
import {
  MobileFilterButton,
  MobileFilterDropdownContainer,
  CenteredMobileLargeFilterFormContainer,
} from '../../components/FilterBarStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';
import exit from '../../static/images/exit.svg';
import { Form } from '../../components/FormStyles';

const TagsDropdown = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [numDesignAreasApplied, setNumDesignAreasApplied] = useState<number>(0);
  const [numSchoolsApplied, setNumSchoolsApplied] = useState<number>(0);

  const filterForm = (
    tags: Filters,
    setter: SetFilters,
    numApplied: number,
    setNumApplied: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <Form>
      {Object.entries(tags).map(([tag, _]) =>
        tag === 'all' ? null : (
          <div key={tag}>
            <input
              type="checkbox"
              id={tag}
              onChange={(event) => {
                const newNumApplied = numApplied + (event.target.checked ? 1 : -1);
                const newTags = { ...tags };
                newTags[tag] = event.target.checked;
                newTags['all'] = newNumApplied === 0;
                setNumApplied(newNumApplied);
                setter(newTags);
              }}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        )
      )}
    </Form>
  );

  return (
    <MobileFilterDropdownContainer>
      <MobileFilterButton onClick={() => setExpand(!expand)} expand={expand}>
        <p>Filters</p>
        <img src={downArrow} alt={'expand'} />
      </MobileFilterButton>
      <CenteredMobileLargeFilterFormContainer expand={expand}>
        <img onClick={() => setExpand(false)} src={exit} alt="close" />
        <h4>Design Areas</h4>
        {filterForm(
          props.designAreaTags,
          props.setDesignAreaTags,
          numDesignAreasApplied,
          setNumDesignAreasApplied
        )}
        <h4>Schools</h4>
        {filterForm(props.schoolTags, props.setSchoolTags, numSchoolsApplied, setNumSchoolsApplied)}
      </CenteredMobileLargeFilterFormContainer>
    </MobileFilterDropdownContainer>
  );
};

type Props = {
  designAreaTags: Filters;
  schoolTags: Filters;
  setDesignAreaTags: SetFilters;
  setSchoolTags: SetFilters;
};

export default TagsDropdown;
