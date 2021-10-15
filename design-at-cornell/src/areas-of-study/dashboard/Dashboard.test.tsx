import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { Studies } from '../AreasOfStudy';
import 'jest-styled-components';

describe('<Dashboard />', () => {
  it('renders correctly without any majors, minors, grad_studies', () => {
    const studies: Studies = {
      majors: [],
      minors: [],
      grad_studies: [],
    };
    const snapshot = renderer.create(<Dashboard {...studies} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with one area of study in each category', () => {
    const studies: Studies = {
      majors: [{ name: 'major 1', description: 'this is a major' }],
      minors: [{ name: 'minor 1', description: 'this is a minor' }],
      grad_studies: [{ name: 'gread area 1', description: 'this is a grad area' }],
    };
    const snapshot = renderer.create(<Dashboard {...studies} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with multiple areas in each category', () => {
    const studies: Studies = {
      majors: [
        { name: 'major 1', description: 'this is a major' },
        { name: 'major 2', description: 'this is a major' },
      ],
      minors: [
        { name: 'minor 1', description: 'this is a minor' },
        { name: 'minor 2', description: 'this is a minor' },
      ],
      grad_studies: [
        { name: 'gread area 1', description: 'this is a grad area' },
        { name: 'gread area 2', description: 'this is a grad area' },
        { name: 'gread area 3', description: 'this is a grad area' },
      ],
    };
    const snapshot = renderer.create(<Dashboard {...studies} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with only majors', () => {
    const studies: Studies = {
      majors: [
        { name: 'major 1', description: 'this is a major' },
        { name: 'major 2', description: 'this is a major' },
      ],
      minors: [],
      grad_studies: [],
    };
    const snapshot = renderer.create(<Dashboard {...studies} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
