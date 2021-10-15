import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ApplyTags from './ApplyTags';

describe('<ApplyTags />', () => {
  it('renders correctly', () => {
    const snapshot = renderer.create(<ApplyTags />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
