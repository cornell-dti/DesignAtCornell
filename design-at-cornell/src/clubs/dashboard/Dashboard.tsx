import React from 'react';
import { PageContainer, OrganizationGrid } from '../ClubsStyles';
import Sort from './Sort';
import ClubBubble from './ClubBubble';
import { Club } from '../../../../server/types';

const Dashboard = (clubs: Club[]) => {
  const clubBubbles = (
    <OrganizationGrid>
      {Object.values(clubs).map((club) => (
        <ClubBubble key={club.title} {...club} />
      ))}
    </OrganizationGrid>
  );

  return (
    <PageContainer>
      <Sort />
      {clubBubbles}
    </PageContainer>
  );
};

export default Dashboard;
