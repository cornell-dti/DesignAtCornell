import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
} from '../../components/DashboardElementStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg';
import { Course } from '../../../../server/types';

const CourseBubble = (course: Course) => (
  <ElementContainer
    style={{ borderColor: courseColors[Math.floor(course.code % courseColors.length)] }}
    onClick={() => (window.location.href = course.content.courseRoster)}
  >
    <Subtitle>
      <p>{course.id + ' ' + course.code}</p>
      <img src={bookmark} alt="save course" />
    </Subtitle>
    <p>{course.content.title}</p>
    <TagsContainer>
      <Tag style={{ background: courseColors[0] }}>
        <p>{course.content.credits + ' Credits'}</p>
      </Tag>
      <Tag style={{ background: courseColors[1] }}>
        <p>{course.content.semester.join(', ')}</p>
      </Tag>
    </TagsContainer>
  </ElementContainer>
);

export default CourseBubble;
