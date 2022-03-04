import React from 'react';
import { Divider, SortBy } from '../../components/DashboardGridStyles';
import arrow from '../../static/images/down-arrow.png';

const Sort = () => (
  <Divider>
    <SortBy>
      <h6>Sort By &nbsp;</h6>
      <p>recommended</p>
      <img src={arrow} alt="sort" />
    </SortBy>
  </Divider>
);

export default Sort;
