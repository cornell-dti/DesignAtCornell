import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ExploreCoursesStyles';
import Courses from './courses/Courses';
import FilterDropdowns from './title/FilterDropdowns';
import Category from './types/Category';
import Pagination from './Pagination';
import { courseContent } from '../../../server/types';

const ExploreCourses = () => {
  const [courses, setCourses] = useState<courseContent[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses);
  }, []);

  const [filterData, setfilterData] = useState<ReadonlyMap<Category, ReadonlySet<string>>>(
    new Map(Array.from(FilterDropdowns.keys()).map((category) => [category, new Set()]))
  );

  const [search, setSearch] = useState('');
  const [currentPage, setPage] = useState(1);

  const searchHandler = function (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    setPage(1);
  };

  const paginate = (pageNum: number) => {
    setPage(pageNum);
  };

  const searchResult = courses.filter(
    (course) =>
      (course.id + ' ' + course.code).toLowerCase().includes(search.toLowerCase()) ||
      course.title.toLowerCase().includes(search.toLowerCase())
  );
  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayedCourses = searchResult.slice(firstCourseIdx, lastCourseIdx);

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
        searchHandler={searchHandler}
      />
      <Courses {...displayedCourses} />
      <Pagination
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        totalCourses={searchResult.length}
        paginate={paginate}
      />
    </PageContainer>
  );
};

export default ExploreCourses;
