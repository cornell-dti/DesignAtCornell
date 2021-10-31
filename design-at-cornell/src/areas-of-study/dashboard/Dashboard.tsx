import React from 'react';
import { DashboardContainer, StudiesContainer, Divider } from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Major } from '../../../../server/types';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import ApplyTags from './ApplyTags';

const Dashboard = (props: Props) => {
  return (
    <DashboardContainer>
      <StudiesContainer>
        <Divider>
          <h1>Undergraduate Majors</h1>
          <hr />
        </Divider>
        <StudiesGrid {...props.majors} />
        <Divider>
          <h1>Undergraduate Minors</h1>
          <hr />
        </Divider>
        <StudiesGrid {...props.minors} />
        <Divider>
          <h1>Graduate Studies</h1>
          <hr />
        </Divider>
        <StudiesGrid {...props.gradStudies} />
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
