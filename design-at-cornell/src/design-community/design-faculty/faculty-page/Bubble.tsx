import React from 'react';
import {
  SmallFacultyBubbleContainer,
  FacultyBubbleTitle,
  FacultyBubbleSubtitle,
  FacultyBubbleTagsContainer,
  Tag,
} from '../../../components/DashboardElementStyles';
import {
  HorizontalFlex,
  VerticalFlex,
  FacultyBubbleVerticalFlex,
} from '../../../components/ContainerStyles';
import { Faculty } from '../../../../../server/src/types';
import { dashboardColors } from '../../../constants/colors';

const FacultyBubble = (faculty: Faculty) => (
  <SmallFacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <HorizontalFlex>
      <FacultyBubbleVerticalFlex>
        <img src={faculty.image} alt="faculty profile" />
        <h1>{faculty.name}</h1>
        <p>{faculty.title}</p>
        <p>{faculty.department}</p>
        <br></br>
      </FacultyBubbleVerticalFlex>
      <VerticalFlex>
        <FacultyBubbleTitle>About {faculty.name}</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          <p>{faculty.description}</p>
        </FacultyBubbleSubtitle>
        <FacultyBubbleTitle>Courses Taught:</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          {faculty.courses === undefined ? null : (
            <p>{faculty.courses.join(', ')}</p>
          )}
        </FacultyBubbleSubtitle>
        <br></br>
        <FacultyBubbleTagsContainer>
          {faculty.tags[0] === undefined ? null : (
            <Tag
              style={{
                background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
              }}
            >
              {faculty.tags[0]}
            </Tag>
          )}
          {faculty.tags[1] === undefined ? null : (
            <Tag
              style={{
                background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
              }}
            >
              {faculty.tags[1]}
            </Tag>
            
          )}
        </FacultyBubbleTagsContainer>
        <br></br>
      </VerticalFlex>
    </HorizontalFlex>
  </SmallFacultyBubbleContainer>
);

export default FacultyBubble;
