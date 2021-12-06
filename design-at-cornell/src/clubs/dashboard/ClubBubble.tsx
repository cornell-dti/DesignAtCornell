import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
  Title,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg';
import { Club } from '../../../../server/types';

const ClubBubble = (club: Club) => (
  <ElementContainer
    style={{ borderColor: dashboardColors[Math.floor(Math.random() * dashboardColors.length)] }}
    onClick={() => (window.location.href = club.content.website)}
  >
    <Subtitle>
      <p>{club.content.orgType}</p>
      <img src={bookmark} alt="save club" />
    </Subtitle>
    <Title>{club.title}</Title>
    <TagsContainer>
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
    </TagsContainer>
  </ElementContainer>
);

export default ClubBubble;
