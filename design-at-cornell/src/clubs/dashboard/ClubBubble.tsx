import React from 'react';
import {
  OrganizationBubble,
  ForCredit,
  TagsContainer,
  Tag
} from '../ClubsStyles';
import { courseColors } from '../../constants/colors';
import { Club } from '../../../../server/types';
import bookmark from '../../static/images/bookmark.svg';

const ClubBubble = (club: Club) => (
  <OrganizationBubble 
    style={{borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
  >
    <ForCredit>
      <p>{club.content.credits? 'For Credit' : ''}</p>
      <img src={bookmark} alt="save course" />
    </ForCredit>
    <p>{club.title}</p>
    <TagsContainer>
      {
        club.content.orgType === '' ? null : 
          <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
            <p>{club.content.orgType}</p>
          </Tag>
      }
      {
        club.content.size === '' ? null : 
          <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
            <p>{club.content.size}</p>
          </Tag>
      }
      {
        club.content.designAreas.map(area => 
          <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
            <p>{area}</p>
          </Tag>
        )
      }
    </TagsContainer>
  </OrganizationBubble>
);

export default ClubBubble;
