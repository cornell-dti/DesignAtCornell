import React from 'react';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './Title';
import Articles from './design-articles/Articles';
import Faculty from './Faculty/Faculty';

const DesignCommunity = () => (
  <VerticalFlex>
    <Title />
    <Articles />
    <Faculty />
  </VerticalFlex>
);

export default DesignCommunity;
