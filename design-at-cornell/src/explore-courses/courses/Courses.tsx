import React from 'react';
import { PageContainer, CourseGrid } from '../ExploreCoursesStyles';
import Sort from './Sort';
import CourseBubble from './CourseBubble';
import { course_content } from '../../../../server/types';

const Courses = (courses: course_content[]) => {
  const courseBubbles = (
    <CourseGrid>
      {Object.values(courses).map(course => (
        <CourseBubble 
          key={course.id + ' ' + course.code}
          {...course}
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
