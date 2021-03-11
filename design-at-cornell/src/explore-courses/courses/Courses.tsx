import React, { useState } from 'react';
import { PageContainer, CourseGrid } from '../ExploreCoursesStyles';
import Sort from './Sort';
import CourseBubble from './CourseBubble';

type Course = {
  courseCode: string;
  courseTitle: string;
  tags: string[];
};

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([
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
        <CourseBubble 
        courseCode={course.courseCode}
        courseTitle={course.courseTitle}
        tags={course.tags}
        />
      ))}
    </CourseGrid>
  );

  return (
    <PageContainer>
      <Sort />
      {courseBubbles}
    </PageContainer>
  );
};

export default Courses;
