import React from 'react';
import AreaOfStudyModal from './AreaOfStudyModal';
import { Grid } from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/src/types';

const StudiesGrid = (props: Props) => (
  <Grid>
    {Object.values(props.studies).map((study) => (
      <AreaOfStudyModal key={study.title} {...{ ...props, study: study }}></AreaOfStudyModal>
    ))}
  </Grid>
);

type Props = {
  studies: Major[];
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default StudiesGrid;
