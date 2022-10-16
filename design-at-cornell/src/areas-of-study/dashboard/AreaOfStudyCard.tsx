import React from 'react';
import { AreaOfStudyButton, AreaOfStudyTag } from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/src/types';

const AreaOfStudyCard = (props: Props) => {
  return (
    <AreaOfStudyButton
      key={props.study.content.title}
      onClick={() => window.open(props.study.content.departmentPage)}
    >
      <h1>{props.study.content.title}</h1>
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
};

type Props = {
  study: Major;
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default AreaOfStudyCard;
