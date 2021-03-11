import React from 'react';
import {
  CourseContainer,
  TagsContainer,
  Tag
} from '../ExploreCoursesStyles';

type Course = {
  courseCode: string;
  courseTitle: string;
  tags: string[];
};

const CourseBubble = ({ courseCode, courseTitle, tags } : Course) => (
  <CourseContainer>
    <h6>{courseCode}</h6>
    <p>{courseTitle}</p>
    <TagsContainer>
      {tags.map(tag => (
        <Tag>
          <p>{tag}</p>
        </Tag>
      ))}
    </TagsContainer>
  </CourseContainer>
)

export default CourseBubble;
