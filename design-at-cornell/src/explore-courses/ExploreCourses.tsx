import React, { useState } from 'react';
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

type Course = {
  courseCode: string;
  courseTitle: string;
  tags: string[];
};

const ExploreCourses = () => {
  const [courses] = useState<Course[]>([
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "ART 2301", courseTitle: "Print Media: Introduction to Print Media", tags: ["Fine Arts", "3 Credits"]},
  ]);

  const courseBubbles = (
    <CourseGrid>
      {courses.map(course => (
        <CourseBubble style={{borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
          <CourseNumber>
            <p>{course.courseCode}</p>
            <img src={require('../static/images/bookmark.svg')} alt="save course" />
          </CourseNumber>
          <p>{course.courseTitle}</p>
          <TagsContainer>
            {course.tags.map(tag => (
              <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
                <p>{tag}</p>
              </Tag>
            ))}
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
    {courseBubbles}
  </PageContainer>
  );
};

export default ExploreCourses;