import React from 'react';
import { PageContainer, CourseGrid } from '../ExploreCoursesStyles';
import Sort from './Sort';
import CourseBubble from './CourseBubble';
import { Course } from '../../../../server/types';

const Courses = (courses: Course[]) => {
  const courseBubbles = (
    <CourseGrid>
      {Object.values(courses).map((course) => (
        <CourseBubble key={course.id + ' ' + course.code} {...course} />
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
