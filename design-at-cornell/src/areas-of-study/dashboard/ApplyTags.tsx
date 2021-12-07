import React from 'react';
import { ApplyTagsContainer } from '../AreasOfStudyStyles';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import { Form } from '../../components/FormStyles';

const ApplyTags = (props: Props) => {
  const checkboxes = (tags: Filters, setter: SetFilters) => (
    <Form>
      {Object.entries(tags).map(([tag, _]) => (
        <div key={tag}>
          <input
            type="checkbox"
            id={tag}
            onChange={(event) => {
              const newTags = { ...tags };
              newTags[tag] = event.target.checked;
              setter(newTags);
            }}
          />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </Form>
  );

  return (
    <ApplyTagsContainer>
      <h5>Apply Tags</h5>
      <h6>Design Areas</h6>
      {checkboxes(props.designAreaTags, props.setDesignAreaTags)}
      <h6>Schools</h6>
      {checkboxes(props.schoolTags, props.setSchoolTags)}
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
