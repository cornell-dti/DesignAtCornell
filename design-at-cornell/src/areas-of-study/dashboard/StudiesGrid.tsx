import React from 'react';
import { Grid, AreaOfStudyButton } from '../AreasOfStudyStyles';
import { Major } from '../../../../server/types';

const StudiesGrid = ({ studies }: { studies: ReadonlyArray<Major> }) => (
  <Grid>
    {Object.values(studies).map(({ title, content }) => (
      <AreaOfStudyButton key={title}>
        <h1>{title}</h1>
        <p>{content.designAreas}</p>
      </AreaOfStudyButton>
    ))}
  </Grid>
)

export default StudiesGrid;
