import React from 'react';
import { ApplyTagsContainer } from '../AreasOfStudyStyles';

const ApplyTags = () => {
  const designAreaTags = [
    'Art + Design',
    'Digital Design',
    'Industrial Design',
    'Policy Design',
    'Spatial Design',
  ];
  const schools = [
    'AAP',
    'Agriculture and Life Sciences',
    'Arts and Sciences',
    'Engineering',
    'Human Ecology',
    'ILR',
    'SC Johnson School of Business',
  ];

  const checkboxes = (tags: string[]) => (
    <form>
      {tags.map((tag) => (
        <div>
          <input key={tag} type="checkbox" id={tag} />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </form>
  );

  return (
    <ApplyTagsContainer>
      <h5>Apply Tags</h5>
      <h6>Design Areas</h6>
      {checkboxes(designAreaTags)}
      <h6>Schools</h6>
      {checkboxes(schools)}
    </ApplyTagsContainer>
  );
};

export default ApplyTags;
