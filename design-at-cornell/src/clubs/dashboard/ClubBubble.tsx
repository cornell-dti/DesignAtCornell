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
import { modHashString } from '../../constants/hasher';

const ClubBubble = (club: Club) => {
  const tags = [club.content.orgType, ...club.content.designAreas].filter((x) => x !== '');
  return (
    <ClubBubbleContainer>
      <ClubBubbleTitle>{club.title}</ClubBubbleTitle>
      <TagsContainer>
        {tags.map((t, i) => {
          const idx = modHashString(t, dashboardColors.length);
          return (
            <Tag key={i} style={{ background: dashboardColors[idx] }}>
              {t}
            </Tag>
          );
        })}
      </TagsContainer>
      <SmallRectangularButton onClick={() => window.open(club.content.website)}>
        <img src={openlink} alt={'website'} />
        <p>Website</p>
      </SmallRectangularButton>
    </ClubBubbleContainer>
  );
};

export default ClubBubble;
