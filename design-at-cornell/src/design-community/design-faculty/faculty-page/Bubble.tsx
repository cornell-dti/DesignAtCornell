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
import { Faculty } from '../../../../../server/types';
import { dashboardColors } from '../../../constants/colors';

const FacultyBubble = (faculty: Faculty) => (
  <SmallFacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <HorizontalFlex>
      <FacultyBubbleVerticalFlex>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="faculty image"
        />
        <h1>Professor's Name</h1>
        <p>Job Title</p>
        <p>Department</p>
        <br></br>
      </FacultyBubbleVerticalFlex>
      <VerticalFlex>
        <FacultyBubbleTitle>About Name:</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          <p>
            Short Description Here. Short Description Here. Short Description Here. Short
            Description Here.
          </p>
        </FacultyBubbleSubtitle>
        <FacultyBubbleTitle>Courses Taught:</FacultyBubbleTitle>
        <FacultyBubbleSubtitle>
          <p>
            Course Code: Course Name, Course Code: Course Name, Course Code: Course Name, Course
            Code: Course Name
          </p>
        </FacultyBubbleSubtitle>
        <br></br>
        <FacultyBubbleTagsContainer>
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            product design
          </Tag>
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            digital design
          </Tag>
          {/* {faculty.tags.filter((area) => area !== '').length === 0 ? null : (
            <Tag
                style={{
                background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
                }}
            >
                {faculty.tags.join(', ')}
            </Tag>
            )} */}
        </FacultyBubbleTagsContainer>
        <br></br>
      </VerticalFlex>
    </HorizontalFlex>
  </SmallFacultyBubbleContainer>
);

export default FacultyBubble;
