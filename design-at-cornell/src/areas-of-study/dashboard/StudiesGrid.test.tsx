import React from 'react';
import renderer from 'react-test-renderer';
import StudiesGrid from './StudiesGrid';
import { AreaOfStudy } from '../AreasOfStudy';
import 'jest-styled-components';

describe('<StudiesGrid />', () => {
  const exampleMajor: AreaOfStudy = {
    name: 'test major',
    description: 'This is an example major for testing. ',
  };

  it('renders correctly for no areas of study', () => {
    const areas: AreaOfStudy[] = [];
    const snapshot = renderer.create(<StudiesGrid {...areas} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with one major', () => {
    const areas: AreaOfStudy[] = [exampleMajor];
    const snapshot = renderer.create(<StudiesGrid {...areas} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly for 3 majors', () => {
    const areas: AreaOfStudy[] = [
      { ...exampleMajor, name: 'major 1' },
      { ...exampleMajor, name: 'major 2' },
      { ...exampleMajor, name: 'major 3' },
    ];
    const snapshot = renderer.create(<StudiesGrid {...areas} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
