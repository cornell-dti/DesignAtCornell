import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ExploreCoursesStyles';
import Courses from './courses/Courses';
import Pagination from './Pagination';
import { Course } from '../../../server/types';

const ExploreCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses);
  }, []);

  const [search, setSearch] = useState('');
  const [currentPage, setPage] = useState(1);

  const paginate = (pageNum: number) => {
    setPage(pageNum);
  };

  const searchResult = courses.filter(
    (course) =>
      (course.id + ' ' + course.code).toLowerCase().includes(search.toLowerCase()) ||
      course.content.title.toLowerCase().includes(search.toLowerCase())
  );
  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayedCourses = searchResult.slice(firstCourseIdx, lastCourseIdx);

  return (
    <PageContainer>
      <Title />
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
