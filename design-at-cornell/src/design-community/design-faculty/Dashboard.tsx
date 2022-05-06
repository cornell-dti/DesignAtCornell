import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { FacultyGrid } from '../../components/DashboardGridStyles';
import { HeadingLine } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/src/types';
import FacultyBubble from './FacultyBubble';

const FacultyImages = ({ faculty }: { faculty: Faculty[] }) => {
  return (
    <FacultyGrid>
      {Object.values(faculty)
        .slice(0, 6)
        .map((faculty) => (
          <FacultyBubble faculty={faculty} key={faculty.name} />
        ))}
    </FacultyGrid>
  );
};

const Dashboard = (faculty: Faculty[]) => {
  return (
    <VerticalFlex>
      <br />
      <br />
      <HorizontalFlex>
        <HeadingLine>
          <hr />
          <h1 onClick={() => window.open('/faculty', '_self')}>Our Faculty</h1>
          <line />
          <h2 onClick={() => window.open('/faculty', '_self')}>View more faculty</h2>
          <hr />
        </HeadingLine>
      </HorizontalFlex>
      <br />
      <FacultyImages faculty={faculty} />
      <br />
      <br />
    </VerticalFlex>
  );
};

export default Dashboard;
