import React from 'react';
import { CourseContainer, CourseNumber, TagsContainer, Tag } from '../ExploreCoursesStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg';
import { Course } from '../../../../server/types';

const CourseBubble = (course: Course) => (
  <CourseContainer
    style={{ borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
    onClick={() => (window.location.href = course.content.courseRoster)}
  >
    <CourseNumber>
      <p>{course.id + ' ' + course.code}</p>
      <img src={bookmark} alt="save course" />
    </CourseNumber>
    <p>{course.content.title}</p>
    <TagsContainer>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{course.content.credits + ' Credits'}</p>
      </Tag>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{course.content.semester}</p>
      </Tag>
    </TagsContainer>
  </CourseContainer>
);

export default CourseBubble;
