import React from 'react';
import { PageContainer, CourseGrid } from '../ExploreCoursesStyles';
import Sort from './Sort';
import CourseBubble from './CourseBubble';
import { CoursesProps } from '../types/PropertyTypes'
import Category, { getSelections } from '../types/Category';

const Courses = ({ courses, filterData }: CoursesProps) => {

  const selectedDesignAreas = getSelections(filterData, Category['Design Areas']);
  const selectedMajors = getSelections(filterData, Category['Majors/Minors']);
  const selectedSemesters = getSelections(filterData, Category['Semester']);
  const selectedCredits = getSelections(filterData, Category['Credits']);
  const selectedLevels = getSelections(filterData, Category['Level']);

  const courseBubbles = (
    <CourseGrid>
      {courses
        .filter(({ code, content }) => {
          const {
             designAreas, major, semester, credits
          } = content;
          if (selectedDesignAreas.size > 0 && !designAreas.some(area => selectedDesignAreas.has(area))) return false;
          if (selectedMajors.size > 0 && !selectedMajors.has(major)) return false;
          if (selectedSemesters.size > 0 && !semester.some(str => selectedSemesters.has(str))) return false;
          const levelString = (code - code % 1000).toString();
          if (selectedLevels.size > 0 && !selectedLevels.has(levelString)) return false;
          const creditsString = credits < 5 ? credits.toString() : '5+';
          return selectedCredits.size === 0 || selectedCredits.has(creditsString);
        })
        .map(course => (
          <CourseBubble
            key={course.id + ' ' + course.code}
            {...course}
          />
        ))
      }
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
