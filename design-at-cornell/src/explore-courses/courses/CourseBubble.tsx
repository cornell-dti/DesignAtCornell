import React from 'react';
import {
  CourseContainer,
  CourseNumber,
  TagsContainer,
  Tag
} from '../ExploreCoursesStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg'
import { Course } from '../../../../server/types';

const CourseBubble = ({ id, code, content }: Course) => (
  <CourseContainer
    style={{ borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
    onClick={() => window.location.href = content.roster}>
    <CourseNumber>
      <p>{id + ' ' + code}</p>
      <img src={bookmark} alt="save course" />
    </CourseNumber>
    <p>{content.title}</p>
    <TagsContainer>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{content.credits + ' Credits'}</p>
      </Tag>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{content.semester}</p>
      </Tag>
    </TagsContainer>
  </CourseContainer>
);

export default CourseBubble;
