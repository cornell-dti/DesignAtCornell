import React from 'react';
import {
  ElementContainer,
} from '../../components/DashboardElementStyles';
import { Instructor } from '../../../../server/types';

const FacultyBubble = (faculty: Instructor) => (
  <ElementContainer style = {{boxShadow: `0px 0px`}}>
  </ElementContainer>
);

export default FacultyBubble;
