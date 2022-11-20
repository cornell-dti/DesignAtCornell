import React from 'react';
import { VerticalFlex } from '../../components/ContainerStyles';
import { MobileCourseGrid } from '../../components/DashboardGridStyles';
import CourseBubble from './CourseBubble';
import { Course } from '../../../../server/src/types';

const Courses = (courses: Course[]) => {
  const courseBubbles = (
    <MobileCourseGrid>
      {Object.values(courses).map((course) => (
        <CourseBubble key={course.id + ' ' + course.code} {...course} />
      ))}
    </MobileCourseGrid>
  );

  return (
    <VerticalFlex>
      <br></br>
      {courseBubbles}
    </VerticalFlex>
  );
};

export default Courses;
