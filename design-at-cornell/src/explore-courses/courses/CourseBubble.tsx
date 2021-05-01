import React from 'react';
import {
  CourseContainer,
  CourseNumber,
  TagsContainer,
  Tag
} from '../ExploreCoursesStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg'
import { course_content } from '../../../../server/types';

const CourseBubble = (course : course_content) => (
  <CourseContainer
    style={{borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
    onClick={() => window.location.href=course.courseRoster}>
    <CourseNumber>
      <p>{course.id + ' ' + course.code}</p>
      <img src={bookmark} alt="save course" />
    </CourseNumber>
    <p>{course.title}</p>
    <TagsContainer>
      <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{course.credits + ' Credits'}</p>
      </Tag>
      <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{course.semester}</p>
      </Tag>
    </TagsContainer>
  </CourseContainer>
)

export default CourseBubble;
