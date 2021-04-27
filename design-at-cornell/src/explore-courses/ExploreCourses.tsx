import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer } from './ExploreCoursesStyles';
import Title from './title/Title';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import { CourseContent } from '../../../server/types';
import { FilterDataMap } from './types/PropertyTypes';

const removeDuplicates = (courses: readonly CourseContent[]) => {
  const seen = new Set<string>();
  return courses.filter(({ id, code }) => {
    const key = id + ' ' + code;
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
};

const ExploreCourses = () => {

  const [courses, setCourses] = useState<ReadonlyArray<CourseContent>>([]);

  useEffect(() => {
    axios
      .get<{ success: boolean; data: CourseContent[] }>('http://localhost:3000/getCourses')
      .then(res => res.data.data)
      .then(rawCourses => setCourses(removeDuplicates(rawCourses)));
  }, []);

  const [filterData, setfilterData] = useState<FilterDataMap>(new Map(
    Array.from(FilterDropdowns.keys()).map(category => [category, new Set()])
  ));

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
      />
      <Courses courses={courses} filterData={filterData} />
    </PageContainer>
  );
}

export default ExploreCourses;
