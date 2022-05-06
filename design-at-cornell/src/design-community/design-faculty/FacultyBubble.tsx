import React from 'react';
import { FacultyBubbleContainer } from '../../components/DashboardElementStyles';
import { Faculty } from '../../../../server/src/types';

interface FacultyBubbleProps {
  faculty: Faculty;
}

const FacultyBubble = ({ faculty }: FacultyBubbleProps) => (
  <FacultyBubbleContainer onClick={() => window.open(faculty.website)}>
    <img src={faculty.image} alt="faculty profile" />
    <p>{faculty.name}</p>
    <p>{faculty.title}</p>
    <p>{faculty.department}</p>
  </FacultyBubbleContainer>
);

export default FacultyBubble;
