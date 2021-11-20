import React from 'react';
import { AreaOfStudyButton, AreaOfStudyTag } from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/types';

const AreaOfStudyModal = (props: Props) => {
  const areaOfStudyButton = (
    <AreaOfStudyButton key={props.study.title}>
      <h1>{props.study.title}</h1>
      <AreaOfStudyTag highlight={props.schoolTags[props.study.content.school]}>
        {props.study.content.school + '. '}
      </AreaOfStudyTag>
      {props.study.content.designAreas.map((area) =>
        area === '' ? null : (
          <AreaOfStudyTag highlight={props.designAreaTags[area]}>{area + '. '}</AreaOfStudyTag>
        )
      )}
    </AreaOfStudyButton>
  );

  return areaOfStudyButton;
};

type Props = {
  study: Major;
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default AreaOfStudyModal;
