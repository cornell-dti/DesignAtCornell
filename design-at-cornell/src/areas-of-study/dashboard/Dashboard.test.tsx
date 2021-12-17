import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { Major } from '../../../../server/types';
import 'jest-styled-components';
import { Filters } from '../../constants/filter-criteria';

describe('<Dashboard />', () => {
  const major: Major = {
    title: 'Major Title',
    content: {
      academicLevel: 'undergraduate',
      departmentPage: 'www.example.com',
      designAreas: [],
      reasons: [
        {
          firstName: 'John',
          gradYear: 2023,
          response: 'test test test',
        },
      ],
      school: 'Engineering',
      type: 'major',
    },
  };

  const majorTwo = { ...major, title: 'Major Two' };

  const tags = {
    Tag1: false,
    Tag2: true,
    Tag3: false,
  };
  const setTags = (tags: Filters) => {};

  it('renders correctly all inputs being empty', () => {
    const snapshot = renderer
      .create(
        <Dashboard
          {...{
            majors: [],
            minors: [],
            gradStudies: [],
            designAreaTags: {},
            schoolTags: {},
            setDesignTags: setTags,
            setSchoolTags: setTags,
          }}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with mix of empty and non-empty input', () => {
    const snapshot = renderer
      .create(
        <Dashboard
          {...{
            majors: [major, majorTwo],
            minors: [major],
            gradStudies: [],
            designAreaTags: tags,
            schoolTags: {},
            setDesignTags: setTags,
            setSchoolTags: setTags,
          }}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
