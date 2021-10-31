import React from 'react';
import { Grid, AreaOfStudyButton, AreaOfStudyTag } from '../AreasOfStudyStyles';
import { Major } from '../../../../server/types';

const StudiesGrid = (studies: Major[]) => (
  <Grid>
    {Object.values(studies).map((study) => (
      <AreaOfStudyButton key={study.title}>
        <h1>{study.title}</h1>
        <AreaOfStudyTag highlight={false}>{study.content.school + '. '}</AreaOfStudyTag>
        {study.content.designAreas.map((area) =>
          area === '' ? null : <AreaOfStudyTag highlight={false}>{area + '. '}</AreaOfStudyTag>
        )}
      </AreaOfStudyButton>
    ))}
  </Grid>
);

export default StudiesGrid;
