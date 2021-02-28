import React, { useState } from 'react';
import Title from './title/Title';
import {
  PageContainer,
  Sort,
  CourseGrid,
  CourseBubble,
  TagsContainer,
  Tag
} from './ExploreCoursesStyles';

type Course = {
  courseId: string;
  courseTitle: string;
  tags: string[];
};

const ExploreCourses = () => {
  const [courses, setCourses] = useState<Course[]>([
    {courseId: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseId: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseId: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseId: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseId: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseId: "ART 2301", courseTitle: "Print Media: Introduction to Print Media", tags: ["Fine Arts", "3 Credits"]},
  ]);

  const courseBubbles = (
    <CourseGrid>
      {courses.map(course => (
        <CourseBubble>
          <h6>{course.courseId}</h6>
          <p>{course.courseTitle}</p>
          <TagsContainer>
            {course.tags.map(tag => (
              <Tag>
                <p>{tag}</p>
              </Tag>
            ))}
          </TagsContainer>
        </CourseBubble>
      ))}
    </CourseGrid>
  );

  return (
    <PageContainer>
    <Title />
    <Sort>
      <p>Sort By</p>
    </Sort>
    {courseBubbles}
  </PageContainer>
  );
};

export default ExploreCourses;