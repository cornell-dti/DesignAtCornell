import React from 'react';
import renderer from 'react-test-renderer';
import Courses from './Courses';
import { Course } from '../../../../server/types';
import 'jest-styled-components';

describe('<Courses />', () => {
  const course: Course = {
    id: "TEST",
    code: 1101,
    content: {
      courseRoster: "https://example.url",
      title: "Intro to Design",
      credits: 4,
      courseSite: "https://example.url",
      major: "Computer Science",
      semester: ["Fall", "Spring"],
      designAreas: ["Area1", "Area2"],
      description:"This is a test course"
    }
  };
  it('renders correctly for no courses', () => {
    const courses: Course[] = [];
    const snapshot = renderer.create(<Courses {...courses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly for one course', () => {
    const courses: Course[] = [course];
    const snapshot = renderer.create(<Courses {...courses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly for 3 course', () => {
    const courses: Course[] = [
      {...course, code: 1101},
      {...course, code: 1102},
      {...course, code: 1103},
    ];

    const snapshot = renderer.create(<Courses {...courses} />).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
