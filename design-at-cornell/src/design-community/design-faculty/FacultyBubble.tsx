import React from 'react';
import {
    FacultyBubbleContainer,
  } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const FacultyBubble = (faculty: Faculty) => (
    <FacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <VerticalFlex>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="faculty image"/>
        <p>Professor's Full Name</p>
        <p>Job Title</p>
        <p>Department</p>
    </VerticalFlex>
  </FacultyBubbleContainer>
);

export default FacultyBubble;
