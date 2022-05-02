import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles';
import { HeadingLine } from '../../components/DashboardElementStyles';
import { Instructor } from '../../../../server/types';
import FacultyBubble from './FacultyBubble';

const Dashboard = (faculty: Instructor[]) => {
  const facultyBubbles = (
    <Grid style={{ justifyContent: `space-between` }}>
      {Object.values(faculty)
        .slice(0, 6)
        .map((faculty) => (
          <FacultyBubble key={faculty.instrAssignSeq} {...faculty} />
        ))}
    </Grid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine>
          <hr />
          <h1 onClick={() => window.open('/faculty', '_self')}>Our Faculty</h1>
          <line />
          <h2 onClick={() => window.open('/faculty', '_self')}>View more faculty</h2>
          <hr />
        </HeadingLine>
      </HorizontalFlex>
      <br></br>
      {facultyBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
