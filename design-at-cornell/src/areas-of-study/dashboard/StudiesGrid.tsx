import React from 'react';
import { Grid, AreaOfStudyButton, AreaOfStudyTag } from '../AreasOfStudyStyles';
import { Major } from '../../../../server/types';
import { Filters } from './Dashboard';

export type StudiesGridProps = {
  readonly studies: ReadonlyArray<Major>;
  readonly filters: Filters;
};

const StudiesGrid = ({ studies, filters }: StudiesGridProps) => (
  <Grid>
    {Object.values(studies).map(({ title, content }) => (
      <AreaOfStudyButton key={title}>
        <h1>{title}</h1>
        <span>{content.type}. {content.designAreas}</span>
        <AreaOfStudyTag highlight={
          filters.schools.has(content.school) ||
          filters.schools.has(content.school.replace('College of ', ''))
        }>
          {content.school}
        </AreaOfStudyTag>
        <br />
      </AreaOfStudyButton>
    ))}
  </Grid>
);

export default StudiesGrid;
