import React, { useState } from 'react';
import { ApplyTagsContainer } from '../AreasOfStudyStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import { Form } from '../../components/FormStyles';

const ApplyTags = (props: Props) => {
  const [numDesignAreasApplied, setNumDesignAreasApplied] = useState<number>(0);
  const [numSchoolsApplied, setNumSchoolsApplied] = useState<number>(0);

  const checkboxes = (
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
    <ApplyTagsContainer>
      <h5>Apply Tags</h5>
      <h6>Design Areas</h6>
      {checkboxes(
        props.designAreaTags,
        props.setDesignAreaTags,
        numDesignAreasApplied,
        setNumDesignAreasApplied
      )}
      <h6>Schools</h6>
      {checkboxes(props.schoolTags, props.setSchoolTags, numSchoolsApplied, setNumSchoolsApplied)}
    </ApplyTagsContainer>
  );
};

type Props = {
  designAreaTags: Filters;
  schoolTags: Filters;
  setDesignAreaTags: SetFilters;
  setSchoolTags: SetFilters;
};

export default ApplyTags;
