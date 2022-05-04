import React from 'react';
import AreaOfStudyCard from './AreaOfStudyCard';
import { Grid } from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/src/types';

const StudiesGrid = (props: Props) => (
  <Grid>
    {Object.values(props.studies).map((study) => (
      <AreaOfStudyCard key={study.title} {...{ ...props, study: study }}></AreaOfStudyCard>
    ))}
  </Grid>
);

type Props = {
  studies: Major[];
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default StudiesGrid;
