import React from 'react';
import renderer from 'react-test-renderer';
import StudiesGrid from './StudiesGrid';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/types';
import 'jest-styled-components';

describe('<StudiesGrid />', () => {
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
  const majorThree = { ...major, title: 'Major Three' };

  const tags: Filters = {
    Tag1: false,
    Tag2: true,
    Tag3: false,
  };

  it('renders correctly for no areas of study', () => {
    const snapshot = renderer
      .create(
        <StudiesGrid
          {...{
            studies: [],
            designAreaTags: {},
            schoolTags: {},
          }}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with one major', () => {
    const snapshot = renderer
      .create(
        <StudiesGrid
          {...{
            studies: [major],
            designAreaTags: tags,
            schoolTags: tags,
          }}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly for 3 majors', () => {
    const snapshot = renderer
      .create(
        <StudiesGrid
          {...{
            studies: [major, majorTwo, majorThree],
            designAreaTags: tags,
            schoolTags: tags,
          }}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
