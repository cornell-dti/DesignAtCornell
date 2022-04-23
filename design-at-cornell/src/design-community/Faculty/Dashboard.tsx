import React from 'react';
import { VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles'
import { Instructor } from '../../../../server/types'
import FacultyBubble from './FacultyBubble';

const Dashboard = (faculty: Instructor[]) => {
  const facultyBubbles = (
    <Grid>
      {Object.values(faculty).map((faculty) => (
        <FacultyBubble key={faculty.instrAssignSeq} {...faculty} />
      ))}
    </Grid>
  );
  
  return (
    <VerticalFlex>
      <br></br>
      {facultyBubbles}
    </VerticalFlex>
  );
};
  
export default Dashboard;
