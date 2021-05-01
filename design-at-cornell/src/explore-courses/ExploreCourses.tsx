import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer } from './ExploreCoursesStyles';
import Title from './title/Title';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import Category from './types/Category';
import { course_content } from '../../../server/types';

const ExploreCourses = () => {

  const [courses, setCourses] = useState<course_content[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses)
  }, []);

  const [filterData, setfilterData] = useState<ReadonlyMap<Category, ReadonlySet<string>>>(new Map(
    Array.from(FilterDropdowns.keys()).map(category => [category, new Set()])
  ));

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
      />
      <Courses {...courses} />
    </PageContainer>
  );
}

export default ExploreCourses;
