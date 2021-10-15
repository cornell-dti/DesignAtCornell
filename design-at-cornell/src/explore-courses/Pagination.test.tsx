import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import 'jest-styled-components';

describe('<Pagination />', () => {
  const props = {
    currentPage: 1,
    coursesPerPage: 12,
    totalCourses: 56,
    paginate: () => {},
  }
  it('renders correctly', () => {
    const snapshot = renderer.create(<Pagination {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with no courses', () => {
    const propsWithNoCourses = {...props, totalCourses: 0};
    const snapshot = renderer.create(<Pagination {...propsWithNoCourses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly less courses than coursesPerPage', () => {
    const propsWithFewCourses = {...props, totalCourses: 6};
    const snapshot = renderer.create(<Pagination {...propsWithFewCourses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
