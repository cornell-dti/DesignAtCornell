import React, { useState } from 'react';
import Title from './title/Title';
import Pagination from './Pagination';
import {
  PageContainer,
  Divider, 
  Sort,
  CourseGrid,
  CourseBubble,
  TagsContainer,
  Tag
} from './ExploreCoursesStyles';

type Course = {
  courseCode: string;
  courseTitle: string;
  tags: string[];
};

const ExploreCourses = () => {
  const [courses] = useState<Course[]>([
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"]},
    {courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"]},
    {courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"]},
    {courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"]},
    {courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"]},
    {courseCode: "ART 2301", courseTitle: "Print Media: Introduction to Print Media", tags: ["Fine Arts", "3 Credits"]},
  ]);

  const [currentPage, setPage] = useState(1);
  const coursesPerPage = 20;
  const lastCourseIdx = currentPage * coursesPerPage;
  const firstCourseIdx = lastCourseIdx - coursesPerPage;
  const displayCourses = courses.slice(firstCourseIdx, lastCourseIdx);

  const paginate = (pageNum: number) => (
    setPage(pageNum)
  );

  const courseBubbles = (
    <CourseGrid>
      {displayCourses.map(course => (
        <CourseBubble>
          <h6>{course.courseCode}</h6>
          <p>{course.courseTitle}</p>
          <TagsContainer>
            {course.tags.map(tag => (
              <Tag>
                <p>{tag}</p>
              </Tag>
            ))}
          </TagsContainer>
        </CourseBubble>
      ))}
    </CourseGrid>
  );

  const divider = (
    <Divider>
      <Sort>
        <p>Sort By</p>
        <img src={require('../static/images/sort-triangle.svg')} alt="sort" />
      </Sort>
    </Divider>
  )

  return (
    <PageContainer>
    <Title />
    {divider}
    {courseBubbles}
    <Pagination
      currentPage={currentPage}
      coursesPerPage={coursesPerPage}
      totalCourses={courses.length}
      paginate={paginate}
    />
  </PageContainer>
  );
};

export default ExploreCourses;