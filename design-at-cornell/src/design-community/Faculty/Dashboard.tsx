import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles';
import { HeadingLine, HeadingTitle } from '../../components/DashboardElementStyles';
import { Instructor } from '../../../../server/types';
import FacultyBubble from './FacultyBubble';

const Dashboard = (faculty: Instructor[]) => {
  const facultyBubbles = (
    <Grid>
      {Object.values(faculty).map((faculty) => (
        <FacultyBubble key={faculty.instrAssignSeq} {...faculty} />
      ))}
    </Grid>
  );
  
  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine style={{width: `50px`}}/>
        <HeadingTitle style={{fontSize: `18px`}}>Our Faculty</HeadingTitle>
        <HeadingLine style={{width: `1000px`}}/>
        <HeadingTitle style={{fontSize: `14px`}}>View more faculty</HeadingTitle>
        <HeadingLine style={{width: `100px`}}/>
      </HorizontalFlex>
      <br></br>
      <br></br>
      {facultyBubbles}
    </VerticalFlex>
  );
};
  
export default Dashboard;