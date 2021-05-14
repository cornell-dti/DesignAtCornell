import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ExploreCoursesStyles';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import Category from './types/Category';
import { Course } from '../../../server/types';

const ExploreCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses);
  }, []);

  const [filterData, setfilterData] = useState<ReadonlyMap<Category, ReadonlySet<string>>>(
    new Map(Array.from(FilterDropdowns.keys()).map((category) => [category, new Set()]))
  );

  return (
    <PageContainer>
      <Title filterData={filterData} dropdownInfo={FilterDropdowns} onChange={setfilterData} />
      <Courses {...courses} />
    </PageContainer>
  );
};

export default ExploreCourses;
