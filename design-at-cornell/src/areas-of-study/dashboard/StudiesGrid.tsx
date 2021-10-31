import React from 'react';
import { Grid, AreaOfStudyButton } from '../AreasOfStudyStyles';
import { Major } from '../../../../server/types';

const StudiesGrid = (studies: Major[]) => (
  <Grid>
    {Object.values(studies).map((study) => (
      <AreaOfStudyButton key={study.title}>
        <h1>{study.title}</h1>
        <p>{study.content.school}</p>
      </AreaOfStudyButton>
    ))}
  </Grid>
);

export default StudiesGrid;
