import React from 'react';
import {
  ElementContainer,
  TagsContainer,
  Tag,
  Title,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import openlink from '../../static/images/openlink-icon.svg';
import { Club } from '../../../../server/types';
import { SmallRectangularButton } from '../../components/ButtonStyles';

const ClubBubble = (club: Club) => (
    <ElementContainer>
      <Title>{club.title}</Title>
      <TagsContainer>
        {club.content.orgType === '' ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.orgType}
          </Tag>
        )}
        {club.content.size === '' ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.size}
          </Tag>
        )}
        {club.content.designAreas.filter((area) => area !== '').length === 0 ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.designAreas.join(', ')}
          </Tag>
        )}
        {club.content.credits === null ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.credits}
          </Tag>
        )}
      </TagsContainer>
      <SmallRectangularButton onClick={() => window.open(club.content.website)}>
        <img src={openlink} alt={'website'} />
        <p>Website</p>
      </SmallRectangularButton>
    </ElementContainer>
);

export default ClubBubble;
