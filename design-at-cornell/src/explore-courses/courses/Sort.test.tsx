import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './Sort';

describe('<Sort />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Sort />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
