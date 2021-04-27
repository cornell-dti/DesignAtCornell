import React, { useState } from 'react';
import Title from './title/Title';
import { courseColors } from '../constants/colors';
import {
  PageContainer,
  Divider, 
  Sort,
  OrganizationGrid,
  OrganizationBubble,
  OrganizationName,
  TagsContainer,
  Tag
} from './ClubsStyles';
import FilterDropdowns from './title/FilterDropdowns';
import ClubsCategory from './types/ClubsCategory';

type Organization = {
  "name": string, 
  "for_credits": boolean,
  "tags": string[]
}

const Clubs = () => {

  const [organizations, setOrganizations] = useState<Organization[]>([
    {name: 'Design & Tech Initiative', for_credits: true, tags: ['tech', 'large']},
    {name: 'Design & Tech Initiative', for_credits: false, tags: ['tech', 'large']},
    {name: 'Design & Tech Initiative', for_credits: false, tags: ['tech', 'large']},
    {name: 'Design & Tech Initiative', for_credits: true, tags: ['tech', 'large']},
    {name: 'Design & Tech Initiative', for_credits: false, tags: ['tech', 'large']},
    {name: 'Design & Tech Initiative', for_credits: true, tags: ['tech', 'large']}
  ]);

  const [filterData, setfilterData] = useState<ReadonlyMap<ClubsCategory, ReadonlySet<string>>>(new Map(
    Array.from(FilterDropdowns.keys()).map(category => [category, new Set()])
  ));

  const clubBubbles = (
    <OrganizationGrid>
      {organizations.map(org => (
        <OrganizationBubble 
          style={{borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
        >
          <OrganizationName>
            <p>{org.for_credits? 'For Credits' : ''}</p>
            <img src={require('../static/images/bookmark.svg')} alt="save course" />
          </OrganizationName>
          <p>{org.name}</p>
          <TagsContainer>
            {org.tags.map(tag => (
              <Tag style={{background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
                <p>{tag}</p>
              </Tag>
            ))}
          </TagsContainer>
        </OrganizationBubble>
      ))}
    </OrganizationGrid>
  );

  const divider = (
    <Divider>
      <Sort>
        <h6>Sort By &nbsp;</h6>
        <p>recommended</p>
        <img src={require('../static/images/down-arrow.png')} alt="sort" />
      </Sort>
    </Divider>
  );

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
      />
      {divider}
      {clubBubbles}
    </PageContainer>
  );
};

export default Clubs;
