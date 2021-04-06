import React, { useState } from 'react';
import Title from './title/Title';
import {
  PageContainer,
  Divider,
  Sort,
  CourseGrid,
  CourseBubble,
  TagsContainer,
  Tag
} from './ExploreCoursesStyles';
import Dictionary from './data-structures/Dictionary';
import Set from './data-structures/Set';
import FilterDropdowns from './title/FilterDropdowns';

type Course = {
  courseCode: string;
  courseTitle: string;
  tags: string[];
};

const ExploreCourses = () => {

  const [courses] = useState<Course[]>([
    { courseCode: "INFO 1300", courseTitle: "Introductory Design and Programming for the Web", tags: ["Information Science", "3 Credits"] },
    { courseCode: "DEA 1500", courseTitle: "Introduction to Environmental Psychology", tags: ["Design and Enviro...", "3 Credits"] },
    { courseCode: "FSAD 1120", courseTitle: "Fashion Design and Visual Thinking", tags: ["Fashion Design an...", "Fall"] },
    { courseCode: "ART 2201", courseTitle: "Painting: Introduction to Painting", tags: ["Fine Arts", "3 Credits"] },
    { courseCode: "ARCH 1101", courseTitle: "Design I", tags: ["Architecture", "3 Credits", "Fall"] },
    { courseCode: "ART 2301", courseTitle: "Print Media: Introduction to Print Media", tags: ["Fine Arts", "3 Credits"] },
  ]);

  const [filterData, setfilterData] = useState<Dictionary<Set>>(
    Object.fromEntries(
      Object.keys(FilterDropdowns).map(category => [category, new Set()])
    )
  );
  const courseBubbles = (
    <CourseGrid>
      {courses.map(course => (
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
  );

  return (
    <PageContainer>
      <Title 
        filterData={filterData} 
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
      />
      {divider}
      {courseBubbles}
    </PageContainer>
  );
};

export default ExploreCourses;
