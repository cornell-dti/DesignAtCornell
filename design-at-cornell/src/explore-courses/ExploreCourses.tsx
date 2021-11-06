import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ExploreCoursesStyles';
import Courses from './courses/Courses';
import Pagination from './Pagination';
import { Course } from '../../../server/types';
import {
  Filters,
  designAreas,
  departments,
  semesters,
  levels,
  credits,
} from '../constants/filter-criteria';

const ExploreCourses = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then(setCourses);
  }, []);

  const [courses, setCourses] = useState<Course[]>([]);
  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas, all: true });
  const [departmentTags, setDepartmentTags] = useState<Filters>({ ...departments, all: true });
  const [semesterTags, setSemesterTags] = useState<Filters>({ ...semesters, all: true });
  const [levelTags, setLevelTags] = useState<Filters>({ ...levels, all: true });
  const [creditTags, setCreditTags] = useState<Filters>({ ...credits, all: true });
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
