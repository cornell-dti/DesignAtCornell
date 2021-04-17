import React from 'react';
import { Divider, SortBy } from '../ExploreCoursesStyles';

const Sort = () => (
  <Divider>
    <SortBy>
      <p>Sort By</p>
      <img src={require('../../static/images/sort-triangle.svg')} alt="sort" />
    </SortBy>
  </Divider>
);

export default Sort;
