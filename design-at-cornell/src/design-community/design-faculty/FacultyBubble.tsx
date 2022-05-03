import React from 'react';
import { FacultyBubbleContainer } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/src/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const FacultyBubble = (faculty: Faculty) => (
  <FacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <VerticalFlex>
      <img src={faculty.image} alt="faculty profile" />
      <p>{faculty.name}</p>
      <p>{faculty.title}</p>
      <p>{faculty.department}</p>
    </VerticalFlex>
  </FacultyBubbleContainer>
);

export default FacultyBubble;
