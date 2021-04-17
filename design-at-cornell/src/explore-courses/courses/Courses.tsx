import React from 'react';
import { PageContainer, CourseGrid } from '../ExploreCoursesStyles';
import Sort from './Sort';
import CourseBubble from './CourseBubble';
import { Course } from '../ExploreCourses';

const Courses = (courses: Course[]) => {
  const courseBubbles = (
    <CourseGrid>
      {Object.values(courses).map((course) => (
        <CourseBubble
          key={course.courseCode}
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
