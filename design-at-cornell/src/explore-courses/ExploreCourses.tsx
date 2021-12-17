import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { VerticalFlex } from '../components/ContainerStyles';
import Courses from './courses/Courses';
import Pagination from '../pagination/Pagination';
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
    /**
     * @param c is the raw input for a course retrieved from the backend
     * @returns whether c has the correct type (Course)
     */
    const isCourse = (c: Course): c is Course => {
      return (
        typeof c.id === 'string' &&
        typeof c.code === 'number' &&
        typeof c.content === 'object' &&
        typeof c.content.title === 'string' &&
        typeof c.content.description === 'string' &&
        typeof c.content.courseSite === 'string' &&
        typeof c.content.courseRoster === 'string' &&
        typeof c.content.credits === 'number' &&
        typeof c.content.major === 'string' &&
        Array.isArray(c.content.designAreas) &&
        c.content.designAreas.every((e) => typeof e === 'string') &&
        Array.isArray(c.content.semester) &&
        c.content.semester.every((e) => typeof e === 'string')
      );
    };

    axios
      .get('http://localhost:3000/getCourses')
      .then((res) => res.data.data)
      .then((data) => data.filter(isCourse)) // filter incorrectly typed input
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
  const filterList = [
    { category: 'Design Areas', tags: designAreaTags, setTags: setDesignAreaTags },
    { category: 'Majors/Minors', tags: departmentTags, setTags: setDepartmentTags },
    { category: 'Semesters', tags: semesterTags, setTags: setSemesterTags },
    { category: 'Levels', tags: levelTags, setTags: setLevelTags },
    { category: 'Credits', tags: creditTags, setTags: setCreditTags },
  ];

  /**
   * Filter courses based on applied filters in each category and the search query.
   * For each filter category, the 'all' tag is applied if no other filters are selected.
   * The search query selects a course if it is a substring of the course's
   * id + code (e.g. ARCH 1101) or title (e.g. Design I), ignoring case and white space.
   */
  const filterResult = courses.filter(
    (course) =>
      course.content.designAreas.reduce(
        (acc, area) => acc || designAreaTags[area],
        designAreaTags['all']
      ) &&
      course.content.semester.reduce(
        (acc, area) => acc || semesterTags[area],
        semesterTags['all']
      ) &&
      (departmentTags['all'] || departmentTags[course.id]) &&
      (levelTags['all'] || levelTags[(Math.floor(course.code / 1000) * 1000).toString()]) &&
      (creditTags['all'] ||
        creditTags[course.content.credits < 5 ? course.content.credits.toString() : '5+']) &&
      (course.id + course.code + course.content.title)
        .replace(/\s/g, '')
        .toLowerCase()
        .includes(search.replace(/\s/g, '').toLowerCase())
  );
  /**
   * Find courses to be displayed on the current page.
   */
  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayedCourses = filterResult.slice(firstCourseIdx, lastCourseIdx);

  return (
    <VerticalFlex>
      <Title {...{ filterList: filterList, setPage: setPage, setSearch: setSearch }} />
      <Courses {...displayedCourses} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={coursesPerPage}
        totalCards={filterResult.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default ExploreCourses;
