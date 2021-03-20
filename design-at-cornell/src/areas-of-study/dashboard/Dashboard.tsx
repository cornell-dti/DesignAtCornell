import React from 'react';
import { 
  DashboardContainer, 
  StudiesContainer, 
  Divider
} from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { AreaOfStudy } from '../AreasOfStudy';
import ApplyTags from './ApplyTags';

const Dashboard = (studies: AreaOfStudy[]) => {
  return (
    <DashboardContainer>
      <StudiesContainer>
        <Divider>
          <h1>Undergraduate Majors</h1>
          <div />
        </Divider>
        <StudiesGrid {...studies} />
      </StudiesContainer>
      <ApplyTags />
    </DashboardContainer>
  );
}

export default Dashboard;
