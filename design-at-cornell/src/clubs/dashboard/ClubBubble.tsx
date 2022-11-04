import React from 'react';
import {
  ClubBubbleContainer,
  TagsContainer,
  Tag,
  ClubBubbleTitle,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import openlink from '../../static/images/openlink-icon.svg';
import { Club } from '../../../../server/src/types';
import { SmallRectangularButton } from '../../components/ButtonStyles';

const ClubBubble = (club: Club) => (
  <ClubBubbleContainer>
    <ClubBubbleTitle>{club.title}</ClubBubbleTitle>
    <TagsContainer>
      {club.content.orgType === '' ? null : (
        <Tag
          style={{
            background: dashboardColors[0],
          }}
        >
          {club.content.orgType}
        </Tag>
      )}
      {club.content.designAreas.filter((area) => area !== '').length === 0 ? null : (
        <Tag
          style={{
            background: dashboardColors[2],
          }}
        >
          {club.content.designAreas.join(', ')}
        </Tag>
      )}
    </TagsContainer>
    <SmallRectangularButton onClick={() => window.open(club.content.website)}>
      <img src={openlink} alt={'website'} />
      <p>Website</p>
    </SmallRectangularButton>
  </ClubBubbleContainer>
);

export default ClubBubble;
