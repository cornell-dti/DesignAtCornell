import React from 'react';
import {
    ArticleBubbleContainer,
    Title,
    ArticleBubbleSubtitle,
  } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const FacultyBubble = (faculty: Faculty) => (
    <ArticleBubbleContainer onClick={() => window.open(faculty.website)}>
    <VerticalFlex>
      <img src={faculty.image}/>
      <Title>
        <p>{faculty.name}</p>
      </Title>
      <ArticleBubbleSubtitle>
        <p>{faculty.title}</p>
      </ArticleBubbleSubtitle>
      <ArticleBubbleSubtitle>
        <p>{faculty.department}</p>
      </ArticleBubbleSubtitle>
    </VerticalFlex>
  </ArticleBubbleContainer>
);

export default FacultyBubble;
