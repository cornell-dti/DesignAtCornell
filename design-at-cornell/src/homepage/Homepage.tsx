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
  MobileExploreSubtitle,
} from '../components/HomepageStyles';
import homepageEventDisplay from './mobile-events-dashboard/HomepageEventFunctions';
import articlesDisplay from './mobile-articles-dashboard/articles-homepage-dashboard';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { home, homeMobile } from '../constants/pages';

import Title from './title';
const Homepage: React.FC = () => (
  <div data-testid="Homepage">
    <Router />
    <Title />
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
              <MobileExploreSubtitle> {'>'}</MobileExploreSubtitle>
              <CardTitle>{page.name}</CardTitle>
              <img src={page.image} alt={page.name} />
            </Link>
          </GridMobile>
        ))}

        <MobileElementContainer>
          <SmallTitle>Upcoming Events</SmallTitle>
          <Link to="./events">
            <MobileExploreSubtitle> {'>'}</MobileExploreSubtitle>
          </Link>
          {homepageEventDisplay()}
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallHeading to="./events">See more events</SmallHeading>
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallTitle>Articles</SmallTitle>
          <Link to="./articles">
            <MobileExploreSubtitle> {'>'}</MobileExploreSubtitle>
          </Link>
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
