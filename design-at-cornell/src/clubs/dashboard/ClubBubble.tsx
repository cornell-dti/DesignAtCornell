import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
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
    <p>{club.title}</p>
    <TagsContainer>
      {club.content.size === '' ? null : (
        <Tag
          style={{
            background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
          }}
        >
          <p>{club.content.size}</p>
        </Tag>
      )}
      {club.content.designAreas.filter((area) => area !== '').length === 0 ? null : (
        <Tag
          style={{
            background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
          }}
        >
          <p>{club.content.designAreas.join(', ')}</p>
        </Tag>
      )}
    </TagsContainer>
  </ElementContainer>
);

export default ClubBubble;
