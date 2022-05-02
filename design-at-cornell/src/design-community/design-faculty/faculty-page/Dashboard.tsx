import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../../components/ContainerStyles';
import { CommunityGrid } from '../../../components/DashboardGridStyles';
import { HeadingLine } from '../../../components/DashboardElementStyles';
import { Instructor } from '../../../../../server/types';
import FacultyBubble from './Bubble';
const Dashboard = (faculty: Instructor[]) => {
  const facultyBubbles = (
    <CommunityGrid>
      {Object.values(faculty)
        .map((faculty) => (
          <FacultyBubble key={faculty.instrAssignSeq} {...faculty} />
        ))}
    </CommunityGrid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine>
          <hr />
          <h3>Faculty</h3>
          <line />
        </HeadingLine>
      </HorizontalFlex>
      <br></br>
      <br></br>
      {facultyBubbles}
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;
