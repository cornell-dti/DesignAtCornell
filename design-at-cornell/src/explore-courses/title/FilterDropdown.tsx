import React, { useState } from 'react';
import { FilterButton } from '../ExploreCoursesStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import downArrow from '../../static/images/down-arrow.png';

const FilterDropdown = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <FilterButton onClick={() => setExpand(!expand)} expand={expand}>
      <p>{props.category}</p>
      <img src={downArrow} alt={'expand'} />
    </FilterButton>
  );
};

type Props = {
  category: string;
  tags: Filters;
  setTags: SetFilters;
};

export default FilterDropdown;
