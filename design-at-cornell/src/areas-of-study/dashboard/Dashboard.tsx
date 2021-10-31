import React from 'react';
import { DashboardContainer, StudiesContainer, Divider } from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Studies } from '../AreasOfStudy';
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
        <StudiesGrid {...props.studies.majors} />
        <Divider>
          <h1>Undergraduate Minors</h1>
          <hr />
        </Divider>
        <StudiesGrid {...props.studies.minors} />
        <Divider>
          <h1>Graduate Studies</h1>
          <hr />
        </Divider>
        <StudiesGrid {...props.studies.grad_studies} />
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
  studies: Studies;
  designAreaTags: Filters;
  schoolTags: Filters;
  setDesignTags: SetFilters;
  setSchoolTags: SetFilters;
};

export default Dashboard;
