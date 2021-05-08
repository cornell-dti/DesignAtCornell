import React from 'react';
import { Grid, AreaOfStudyButton } from '../AreasOfStudyStyles';
import { AreaOfStudy } from '../AreasOfStudy';

const StudiesGrid = (studies: AreaOfStudy[]) => (
  <Grid>
    {Object.values(studies).map((study) => (
      <AreaOfStudyButton key={study.name}>
        <h1>{study.name}</h1>
        <p>{study.description}</p>
      </AreaOfStudyButton>
    ))}
  </Grid>
);

export default StudiesGrid;
