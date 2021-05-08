import React from 'react';
import { 
  ApplyTagsContainer
} from '../AreasOfStudyStyles';
import { Filters } from './Dashboard';

export type ApplyTagsProps = {
  filters: Filters;
  onChange: (newFilters: Filters) => void;
};

const ApplyTags = ({ filters, onChange }: ApplyTagsProps) => {
  const designAreaTags = [
    'Art + Design', 
    'Digital Design', 
    'Industrial Design', 
    'Policy Design', 
    'Spatial Design'
  ];
  const schools = [
    'Architecture, Art, Planning', 
    'Agriculture and Life Sciences', 
    'Arts and Sciences', 
    'Engineering', 
    'Human Ecology', 
    'School of Hotel Administration', 
    'SC Johnson College of Business'
  ];

  const checkboxes = (category: keyof Filters, tags: string[]) => (
    <form>
      {tags.map(tag => (
        <div>
          <input 
            key={tag} 
            type="checkbox" 
            id={tag} 
            checked={filters[category].has(tag)} 
            onChange={() => {
              const copy = new Set(filters[category]);
              if (copy.has(tag)) copy.delete(tag);
              else copy.add(tag);
              onChange({
                ...filters,
                [category]: copy
              });
            }}
          />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </form>
 )

  return (
    <ApplyTagsContainer>
      <h5>Apply Tags</h5>
      <h6>Design Areas</h6>
      {checkboxes('designAreas', designAreaTags)}
      <h6>Schools</h6>
      {checkboxes('schools', schools)}
    </ApplyTagsContainer>
  );
}

export default ApplyTags;
