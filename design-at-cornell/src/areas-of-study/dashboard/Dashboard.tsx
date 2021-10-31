import React from 'react';
import { DashboardContainer, StudiesContainer, Divider } from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Major } from '../../../../server/types';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import ApplyTags from './ApplyTags';

const Dashboard = (props: Props) => {
  const studies = (category: string, studies: Major[]) => (
    <div>
      <Divider>
        <h1>{category}</h1>
        <hr />
      </Divider>
      <StudiesGrid
        {...{
          studies: studies,
          designAreaTags: props.designAreaTags,
          schoolTags: props.schoolTags,
        }}
      />
    </div>
  );

  return (
    <DashboardContainer>
      <StudiesContainer>
        {studies('Undergraduate Majors', props.majors)}
        {studies('Undergraduate Minors', props.minors)}
        {studies('Graduate Studies', props.gradStudies)}
      </StudiesContainer>
      <ApplyTags
        {...{
          designAreaTags: props.designAreaTags,
          schoolTags: props.schoolTags,
          setDesignAreaTags: props.setDesignTags,
          setSchoolTags: props.setSchoolTags,
        }}
      />
    </DashboardContainer>
  );
};

type Props = {
  majors: Major[];
  minors: Major[];
  gradStudies: Major[];
  designAreaTags: Filters;
  schoolTags: Filters;
  setDesignTags: SetFilters;
  setSchoolTags: SetFilters;
};

export default Dashboard;
