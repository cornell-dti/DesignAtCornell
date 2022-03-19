import React from 'react';
import { VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles';
import Sort from './Sort';
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
      <Sort />
      {clubBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
