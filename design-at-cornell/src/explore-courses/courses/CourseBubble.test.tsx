import React from 'react';
import renderer from 'react-test-renderer';
import CourseBubble from './CourseBubble';
import { Course } from '../ExploreCourses';

describe('<CourseBubble />', () => {
  it('renders testing course correctly', () => {
    const course : Course = {
      courseCode: 'TEST 1001',
      courseTitle: 'Testing Course Title',
      tags: ['tag 1', 'tag 2', 'tag 3']
    }

    const tree = renderer
      .create(
        <CourseBubble 
          courseCode={course.courseCode}
          courseTitle={course.courseTitle}
          tags={course.tags}  
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('reders course with empty course code', () => {
    const course : Course = {
      courseCode: '',
      courseTitle: 'Testing Course Title',
      tags: ['tag 1', 'tag 2', 'tag 3']
    }

    const tree = renderer
      .create(
        <CourseBubble 
          courseCode={course.courseCode}
          courseTitle={course.courseTitle}
          tags={course.tags}  
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders course with empty course title', () => {
    const course : Course = {
      courseCode: 'TEST 1002',
      courseTitle: '',
      tags: ['tag 1', 'tag 2', 'tag 3']
    }

    const tree = renderer
      .create(
        <CourseBubble 
          courseCode={course.courseCode}
          courseTitle={course.courseTitle}
          tags={course.tags}  
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders course with empty tags list', () => {
    const course : Course = {
      courseCode: 'TEST 1002',
      courseTitle: '',
      tags: []
    }

    const tree = renderer
      .create(
        <CourseBubble 
          courseCode={course.courseCode}
          courseTitle={course.courseTitle}
          tags={course.tags}  
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
