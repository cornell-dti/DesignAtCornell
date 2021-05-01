import React from 'react';
import {
  CourseContainer,
  CourseNumber,
  TagsContainer,
  Tag
} from '../ExploreCoursesStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg'
import { CourseInfo } from '../../../../server/types';

const CourseBubble = ({ id, code, roster, title, credits, semester}: CourseInfo) => (
  <CourseContainer
    style={{ borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
    onClick={() => window.location.href = roster}>
    <CourseNumber>
      <p>{id + ' ' + code}</p>
      <img src={bookmark} alt="save course" />
    </CourseNumber>
    <p>{title}</p>
    <TagsContainer>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{credits + ' Credits'}</p>
      </Tag>
      <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
        <p>{semester}</p>
      </Tag>
    </TagsContainer>
  </CourseContainer>
)

export default CourseBubble;
