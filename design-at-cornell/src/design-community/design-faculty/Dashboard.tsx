import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { CommunityGrid } from '../../components/DashboardGridStyles';
import { HeadingLine } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/types';
import FacultyBubble from './FacultyBubble';

const Dashboard = (faculty: Faculty[]) => {
  const facultyBubbles = (
    <CommunityGrid>
      {Object.values(faculty)
        .slice(0, 6)
        .map((faculty) => (
          <FacultyBubble key={faculty.name} {...faculty} />
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
          <h1 onClick={() => window.open('/faculty', '_self')}>Our Faculty</h1>
          <line />
          <h2 onClick={() => window.open('/faculty', '_self')}>View more faculty</h2>
          <hr />
        </HeadingLine>
      </HorizontalFlex>
      <br></br>
      {facultyBubbles}
      <br></br>
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;
