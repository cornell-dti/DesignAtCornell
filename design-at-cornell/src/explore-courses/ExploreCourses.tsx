import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer } from './ExploreCoursesStyles';
import Title from './title/Title';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import { Course } from '../../../server/types';
import { FilterDataMap } from './types/PropertyTypes';

const ExploreCourses = () => {

  const [courses, setCourses] = useState<ReadonlyArray<Course>>([]);

  useEffect(() => {
    axios
      .get<{ success: boolean; data: Course[] }>('http://localhost:3000/getCourses')
      .then(res => { 
        console.log(res.data.data);
        return res.data.data;
      })
      .then(setCourses);
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
