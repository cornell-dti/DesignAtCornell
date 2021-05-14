import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './Sort';
import 'jest-styled-components';

describe('<Sort />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Sort />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
