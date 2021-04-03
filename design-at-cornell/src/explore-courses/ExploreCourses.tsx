import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { courseColors } from '../constants/colors';
import Title from './title/Title';
import {
  PageContainer,
  Divider, 
  Sort,
  CourseGrid,
  CourseBubble,
  CourseNumber,
  TagsContainer,
  Tag
} from './ExploreCoursesStyles';

export type course_content = {
  "title": string,
  "description": string,
  "syllabus": string,
  "site": string,
  "course_roster": string,
  "credits": number,
  "major": string,
  "design_areas": string[],
  "semester": string[],
}

export type Course = {
  "id": string, 
  "code": number,
  "content": course_content
}

const ExploreCourses = () => {
  const [courses, setCourses] = useState<course_content[]>([]);
  const [curPage, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses)
  }, []);

  const courseBubbles = (
    <CourseGrid>
      {courses.map(course => (
        <CourseBubble 
          style={{borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
          onClick={() => window.location.href=course.course_roster}>
          <CourseNumber>
            <p>ARCH 1101</p>
            <img src={require('../static/images/bookmark.svg')} alt="save course" />
          </CourseNumber>
          <p>{course.title}</p>
          <TagsContainer>
            {/* {course.tags.map(tag => (
              <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
                <p>{tag}</p>
              </Tag>
            ))} */}
            <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
              <p>{course.credits + ' Credits'}</p>
            </Tag>
            <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
              <p>{course.semester}</p>
            </Tag>
          </TagsContainer>
        </CourseBubble>
      ))}
    </CourseGrid>
  );

  const divider = (
    <Divider>
      <Sort>
        <h6>Sort By &nbsp;</h6>
        <p>recommended</p>
        <img src={require('../static/images/down-arrow.png')} alt="sort" />
      </Sort>
    </Divider>
  )

  return (
    <PageContainer>
    <Title />
    {divider}
    {courses.length > 0 && courseBubbles}
  </PageContainer>
  );
};

export default ExploreCourses;