import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import 'jest-styled-components';

describe('<Pagination />', () => {
  const props = {
    currentPage: 1,
    cardsPerPage: 12,
    totalCards: 56,
    paginate: () => {},
  };
  it('renders correctly', () => {
    const snapshot = renderer.create(<Pagination {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with no cards', () => {
    const propsWithNoCourses = { ...props, totalCards: 0 };
    const snapshot = renderer.create(<Pagination {...propsWithNoCourses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly less cards than coursesPerPage', () => {
    const propsWithFewCourses = { ...props, totalCards: 6 };
    const snapshot = renderer.create(<Pagination {...propsWithFewCourses} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
