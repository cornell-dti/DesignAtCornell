import React from 'react';
import renderer from 'react-test-renderer';
import Courses from './Courses';
import { Course } from '../ExploreCourses';
import 'jest-styled-components';

describe('<CourseBubble />', () => {
  it('renders correctly for no courses', () => {
    const courses: Course[] = []

    const tree = renderer
      .create(<Courses {...courses}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for one course', () => {
    const courses: Course[] = [
      {courseCode: 'TEST1110', courseTitle: 'Testing Coruse 1110', tags: ['tag 1', 'tag 2']}
    ]

    const tree = renderer
      .create(<Courses {...courses}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for 8 course', () => {
    const courses: Course[] = [
      {courseCode: 'TEST1110', courseTitle: 'Testing Coruse 1110', tags: ['tag 1', 'tag 2']},
      {courseCode: 'TEST1111', courseTitle: 'Testing Coruse 1111', tags: ['tag 1', 'tag 3']},
      {courseCode: 'TEST1112', courseTitle: 'Testing Coruse 1112', tags: ['tag 3', 'tag 4']},
      {courseCode: 'TEST1113', courseTitle: 'Testing Coruse 1113', tags: ['tag 5', 'tag 6']},
      {courseCode: 'TEST1114', courseTitle: 'Testing Coruse 1114', tags: ['tag 5', 'tag 7', 'tag 9']},
      {courseCode: 'TEST1115', courseTitle: 'Testing Coruse 1115', tags: ['tag 6']},
      {courseCode: 'TEST1116', courseTitle: 'Testing Coruse 1116', tags: ['tag 6', 'tag 8']},
      {courseCode: 'TEST1117', courseTitle: 'Testing Coruse 1117', tags: []}
    ]

    const tree = renderer
      .create(<Courses {...courses}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
