import React, { useContext } from 'react';
import { VerticalFlex } from '../../../components/ContainerStyles';
import { TitleBackground, TitleContainer } from '../../../components/TitleStyles';
import { colors } from '../../../constants/colors';
import { Grid } from '../../../components/DashboardGridStyles';
import { Faculty } from '../../../../../server/src/types';
import FacultyBubble from './Bubble';
import MobileFacultyBubble from './MobileBubble';

import { GlobalContext } from '../../../context/GlobalContext';

const Dashboard = (faculty: Faculty[]) => {
  const { isMobileView } = useContext(GlobalContext);
  const facultyBubbles = (
    <Grid>
      {Object.values(faculty).map((faculty) => (
        <FacultyBubble key={faculty.name} {...faculty} />
      ))}
    </Grid>
  );

  const mobileFacultyBubbles = (
    <Grid>
      {Object.values(faculty).map((faculty) => (
        <MobileFacultyBubble key={faculty.name} {...faculty} />
      ))}
    </Grid>
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
      {isMobileView ? mobileFacultyBubbles : facultyBubbles}
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;
