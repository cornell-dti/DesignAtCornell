import React, { useState, useEffect } from 'react';
import api from '../constants/util';
import Title from './title/Title';
import { VerticalFlex } from '../components/ContainerStyles';
import Courses from './courses/Courses';
import Pagination from '../pagination/Pagination';
import { Course } from '../../../server/src/types';
import {
  MobileWrapper,
} from '../components/HomepageStyles';
import MobileFilter from './title/MobileFilter';
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
    api
      .get('/getCourses')
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
  const filterList = [
    { category: 'Design Areas', tags: designAreaTags, setTags: setDesignAreaTags },
    { category: 'Majors/Minors', tags: departmentTags, setTags: setDepartmentTags },
    { category: 'Semesters', tags: semesterTags, setTags: setSemesterTags },
    { category: 'Levels', tags: levelTags, setTags: setLevelTags },
    { category: 'Credits', tags: creditTags, setTags: setCreditTags },
  ];

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
  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayedCourses = filterResult.slice(firstCourseIdx, lastCourseIdx);

  return (
    <VerticalFlex>
      <Title {...
        {
          filterList: filterList,
          designAreaTags: designAreaTags,
          departmentTags: departmentTags,
          semesterTags: semesterTags,
          levelTags: levelTags,
          creditTags: creditTags,
          setDesignTags: setDesignAreaTags,
          setDepartmentTags: setDepartmentTags,
          setSemesterTags: setSemesterTags,
          setLevelTags: setLevelTags,
          setCreditTags: setCreditTags,
          setPage: setPage,
          setSearch: setSearch
        }
      } />
      <MobileWrapper><MobileFilter {...
        {
          filterList: filterList,
          designAreaTags: designAreaTags,
          departmentTags: departmentTags,
          semesterTags: semesterTags,
          levelTags: levelTags,
          creditTags: creditTags,
          setDesignTags: setDesignAreaTags,
          setDepartmentTags: setDepartmentTags,
          setSemesterTags: setSemesterTags,
          setLevelTags: setLevelTags,
          setCreditTags: setCreditTags,
          setPage: setPage,
          setSearch: setSearch
        }
      } /></MobileWrapper>
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
