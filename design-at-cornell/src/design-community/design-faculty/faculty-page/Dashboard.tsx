import React from 'react';
import { VerticalFlex } from '../../../components/ContainerStyles';
import { TitleBackground, TitleContainer } from '../../../components/TitleStyles';
import { colors } from '../../../constants/colors';
import { CommunityGrid } from '../../../components/DashboardGridStyles';
import { Faculty } from '../../../../../server/types';
import FacultyBubble from './Bubble';
const Dashboard = (faculty: Faculty[]) => {
  const facultyBubbles = (
    <CommunityGrid>
      {Object.values(faculty).map((faculty) => (
        <FacultyBubble key={faculty.name} {...faculty} />
      ))}
    </CommunityGrid>
  );

  return (
    <VerticalFlex>
      <TitleBackground color={colors.purple}>
        <TitleContainer>
          <h1>The Design Faculty</h1>
          <p>Explore your interests with like-minded faculty.</p>
        </TitleContainer>
      </TitleBackground>
      <br></br>
      <br></br>
      {facultyBubbles}
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;
