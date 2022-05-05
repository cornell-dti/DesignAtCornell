import React from 'react';
import {
  SmallFacultyBubbleContainer,
  FacultyBubbleTitle,
  FacultyBubbleSubtitle,
  TagsContainer,
  Tag,
} from '../../../components/DashboardElementStyles';
import {
  FacultyBubbleLeftVerticalFlex,
  FacultyBubbleRightVerticalFlex,
  FacultyBubbleHorizontalFlex,
} from '../../../components/ContainerStyles';
import { Faculty } from '../../../../../server/src/types';
import { dashboardColors } from '../../../constants/colors';

const FacultyBubble = (faculty: Faculty) => (
  <SmallFacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <FacultyBubbleHorizontalFlex>
      <FacultyBubbleLeftVerticalFlex>
        <img src={faculty.image} alt="faculty profile" />
        <h1>{faculty.name}</h1>
        <p>{faculty.title}</p>
        <p>{faculty.department}</p>
        <br></br>
      </FacultyBubbleLeftVerticalFlex>
      <FacultyBubbleRightVerticalFlex>
        <FacultyBubbleTitle>About {faculty.name}</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          <p>{faculty.description}</p>
        </FacultyBubbleSubtitle>
        <FacultyBubbleTitle>Courses Taught:</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          {faculty.courses === undefined ? null : <p>{faculty.courses.join(', ')}</p>}
        </FacultyBubbleSubtitle>
        <br></br>
        <TagsContainer>
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
        </TagsContainer>
        <br></br>
      </FacultyBubbleRightVerticalFlex>
    </FacultyBubbleHorizontalFlex>
  </SmallFacultyBubbleContainer>
);

export default FacultyBubble;
