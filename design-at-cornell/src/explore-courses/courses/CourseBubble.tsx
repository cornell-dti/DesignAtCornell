import React from 'react';
import {
  CourseContainer,
  TagsContainer,
  Tag
} from '../ExploreCoursesStyles';
import { Course } from '../ExploreCourses'

const CourseBubble = ({ courseCode, courseTitle, tags } : Course) => (
  <CourseContainer>
    <h6>{courseCode}</h6>
    <p>{courseTitle}</p>
    <TagsContainer>
      {tags.map(tag => (
        <Tag key={tag}>
          <p>{tag}</p>
        </Tag>
      ))}
    </TagsContainer>
  </CourseContainer>
)

export default CourseBubble;
