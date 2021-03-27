import React from 'react';
import { 
  DashboardContainer, 
  StudiesContainer, 
  Divider
} from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Studies } from '../AreasOfStudy';
import ApplyTags from './ApplyTags';

const Dashboard = (studies: Studies) => {
  return (
    <DashboardContainer>
      <StudiesContainer>
        <Divider>
          <h1>Undergraduate Majors</h1>
          <hr />
        </Divider>
        <StudiesGrid {...studies.majors} />
        <Divider>
          <h1>Undergraduate Minors</h1>
          <hr />
        </Divider>
        <StudiesGrid {...studies.minors} />
        <Divider>
          <h1>Graduate Studies</h1>
          <hr />
        </Divider>
        <StudiesGrid {...studies.grad_studies} />
      </StudiesContainer>
      <ApplyTags />
    </DashboardContainer>
  );
}

export default Dashboard;
