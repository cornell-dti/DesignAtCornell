import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer } from './ExploreCoursesStyles';
import Title from './title/Title';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import Category from './types/Category';
import Pagination from './Pagination';
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

  const [search, setSearch] = useState('');

  const [currentPage, setPage] = useState(1);

  const searchResult = courses.filter(course => 
    (course.id + ' ' + course.code).toLowerCase().includes(search.toLowerCase()) ||
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const searchHandler = function(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    setPage(1);
  }

  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayCourses = searchResult.slice(firstCourseIdx, lastCourseIdx);

  const paginate = (pageNum: number) => (
    setPage(pageNum)
  );

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
        searchHandler={searchHandler}
      />
      <Courses {...displayCourses} />
      <Pagination
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        totalCourses={searchResult.length}
        paginate={paginate}
      />
    </PageContainer>
  );
}

export default ExploreCourses;
