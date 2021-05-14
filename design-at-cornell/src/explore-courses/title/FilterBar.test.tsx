import React from 'react';
import renderer from 'react-test-renderer';
import FilterBar from './FilterBar';
import 'jest-styled-components';

describe('<FilterBar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FilterBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
