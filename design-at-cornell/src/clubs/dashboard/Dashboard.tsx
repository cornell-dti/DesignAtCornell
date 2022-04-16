import React from 'react';
import { VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles';
import ClubBubble from './ClubBubble';
import { Club } from '../../../../server/types';

const Dashboard = (clubs: Club[]) => {
  const clubBubbles = (
    <Grid>
      {Object.values(clubs).map((club) => (
        <ClubBubble key={club.title} {...club} />
      ))}
    </Grid>
  );

  return (
    <VerticalFlex>
      <br></br>
      {clubBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
