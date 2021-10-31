import React from 'react';
import { Grid, AreaOfStudyButton, AreaOfStudyTag } from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/types';

const StudiesGrid = (props: Props) => (
  <Grid>
    {Object.values(props.studies).map((study) => (
      <AreaOfStudyButton key={study.title}>
        <h1>{study.title}</h1>
        <AreaOfStudyTag highlight={props.schoolTags[study.content.school]}>
          {study.content.school + '. '}
        </AreaOfStudyTag>
        {study.content.designAreas.map((area) =>
          area === '' ? null : (
            <AreaOfStudyTag highlight={props.designAreaTags[area]}>{area + '. '}</AreaOfStudyTag>
          )
        )}
      </AreaOfStudyButton>
    ))}
  </Grid>
);

type Props = {
  studies: Major[];
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default StudiesGrid;
