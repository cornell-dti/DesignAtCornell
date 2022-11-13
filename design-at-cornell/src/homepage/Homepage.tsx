import React from 'react';
import {
  CardTitle,
  Grid,
  ElementContainer,
  ExploreSubtitle,
  GridItem,
  DesktopWrapper,
  MobileWrapper,
  GridMobile,
  MobileElementContainer,
  SmallTitle,
  SmallHeading,
  Headline,
  MissionStat,
} from '../components/HomepageStyles';
import homepageEventDisplay from './mobile-events-dashboard/HomepageEventFunctions';
import articlesDisplay from './mobile-articles-dashboard/articles-homepage-dashboard';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { home, homeMobile } from '../constants/pages';

import design_courses from '../static/images/design_courses.svg';
import majors_minors from '../static/images/majors_minors.svg';
import orgs_icon from '../static/images/orgs_icon.svg';
import events_icon from '../static/images/events_icon.svg';
import resources_icon from '../static/images/resources_icon.svg';
import community_icon from '../static/images/community_icon.svg';

import majors_minors_mobile from '../static/images/majors-minors-mobile.svg';
import courses_mobile from '../static/images/courses-mobile.svg';
import orgs_mobile from '../static/images/orgs-mobile.svg';
import faculty_mobile from '../static/images/faculty-mobile.svg';

import Title from './title';
const Homepage: React.FC = () => (
  <div data-testid="Homepage">
    <Router />
    <Title />
    <Headline>
      <b>Your ultimate resource for all things Design at Cornell University.</b>
    </Headline>
    <MissionStat>
      Our mission is to connect, inform, and inspire the design community at Cornell University.
    </MissionStat>
    <DesktopWrapper>
      <Grid>
        {home.map((page) => (
          <GridItem key={page.url}>
            <ElementContainer>
              <Link to={page.url}>
                <img src={page.image} alt={page.name} />
              </Link>
              <CardTitle>{page.name}</CardTitle>
              <p>{page.description}</p>
              <ExploreSubtitle to={page.url}>
                Explore {page.name} {'>'}
              </ExploreSubtitle>
            </ElementContainer>
          </GridItem>
        ))}
      </Grid>
    </DesktopWrapper>
    <MobileWrapper>
      <Grid>
        {homeMobile.map((page) => (
          <GridMobile key={page.url}>
            <Link to={page.url}>
              <ExploreSubtitle to={page.url}> {'>'}</ExploreSubtitle>
              <CardTitle>{page.name}</CardTitle>
              <img src={page.image} alt={page.name} />
            </Link>
          </GridMobile>
        ))}

        <MobileElementContainer>
          <SmallTitle>Upcoming Events</SmallTitle>
          <ExploreSubtitle to="./events"> {'>'}</ExploreSubtitle>
          {homepageEventDisplay()}
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallHeading to="./events">See more events</SmallHeading>
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallTitle>Articles</SmallTitle>
          <ExploreSubtitle to="./articles"> {'>'}</ExploreSubtitle>
          {articlesDisplay()}
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallHeading to="./articles">See more articles</SmallHeading>
        </MobileElementContainer>
      </Grid>
    </MobileWrapper>
  </div>
);

export default Homepage;
