import React from 'react';
import renderer from 'react-test-renderer';
import CourseBubble from './CourseBubble';
import { Course } from '../../../../server/types';
import 'jest-styled-components';

describe('<CourseBubble />', () => {
  const course: Course = {
    id: 'TEST',
    code: 1101,
    content: {
      courseRoster: 'https://example.url',
      title: 'Intro to Design',
      credits: 4,
      courseSite: 'https://example.url',
      major: 'Computer Science',
      semester: ['Fall', 'Spring'],
      designAreas: ['Area1', 'Area2'],
      description: 'This is a test course',
    },
  };

  it('renders testing course correctly', () => {
    const snapshot = renderer.create(<CourseBubble {...course} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders course with empty course title', () => {
    const courseWithoutTitle: Course = { ...course, content: { ...course.content, title: '' } };
    const snapshot = renderer.create(<CourseBubble {...courseWithoutTitle} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders course without roster', () => {
    const courseWithoutRoster: Course = {
      ...course,
      content: { ...course.content, courseRoster: '' },
    };
    const snapshot = renderer.create(<CourseBubble {...courseWithoutRoster} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders course with empty major', () => {
    const courseWithoutMajor: Course = { ...course, content: { ...course.content, major: '' } };
    const snapshot = renderer.create(<CourseBubble {...courseWithoutMajor} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders course with empty designAreas list', () => {
    const courseWithoutTags: Course = {
      ...course,
      content: { ...course.content, designAreas: [] },
    };
    const snapshot = renderer.create(<CourseBubble {...courseWithoutTags} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders course with empty description', () => {
    const courseWithoutDesc: Course = {
      ...course,
      content: { ...course.content, description: '' },
    };
    const snapshot = renderer.create(<CourseBubble {...courseWithoutDesc} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
