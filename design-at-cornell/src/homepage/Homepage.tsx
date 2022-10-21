import React from 'react';
import {
  Headline,
  MissionStat,
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
} from '../components/HomepageStyles';
import homepageEventDisplay from './mobile-events-dashboard/HomepageEventFunctions';
import articlesDisplay from './mobile-articles-dashboard/articles-homepage-dashboard'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import design_courses from '../static/images/design_courses.svg';
import majors_minors from '../static/images/majors_minors.svg';
import orgs_icon from '../static/images/orgs_icon.svg';
import events_icon from '../static/images/events_icon.svg';
import resources_icon from '../static/images/resources_icon.svg';
import community_icon from '../static/images/community_icon.svg';
import Title from './title';
import majors_minors_mobile from '../static/images/majors-minors-mobile.svg';
import courses_mobile from '../static/images/courses-mobile.svg';
import orgs_mobile from '../static/images/orgs-mobile.svg';
import faculty_mobile from '../static/images/faculty-mobile.svg';
import { render } from 'react-dom';
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
    <Grid>
      <DesktopWrapper>
        <GridItem>
          <ElementContainer>
            <Link to="./explore-courses">
              <img src={design_courses} alt={'Design Courses'} />
            </Link>
            <CardTitle>Design Courses</CardTitle>
            <p>A central hub to learn about courses to enrich your design skillset</p>
            <ExploreSubtitle to="./explore-courses"> Explore Courses {'>'}</ExploreSubtitle>
          </ElementContainer>
        </GridItem>
        <GridItem>
          <ElementContainer>
            <Link to="./areas-of-study">
              <img src={majors_minors} alt={'Majors/Minors'} />
            </Link>
            <CardTitle>Majors {'&'} Minors</CardTitle>
            <p>A guide to the different paths you may pave at Cornell</p>
            <ExploreSubtitle to="./areas-of-study"> Explore Majors & Minors {'>'}</ExploreSubtitle>
          </ElementContainer>
        </GridItem>
        <GridItem>
          <ElementContainer>
            <Link to="./student-organizations">
              <img src={orgs_icon} alt={'Student Organizations'} />
            </Link>
            <CardTitle>Organizations</CardTitle>
            <p>A place to explore your passion through design organizations at Cornell</p>
            <ExploreSubtitle to="./student-organizations">
              {' '}
              Explore Organizations {'>'}
            </ExploreSubtitle>
          </ElementContainer>
        </GridItem>
        <GridItem>
          <ElementContainer>
            <Link to="./events">
              <img src={events_icon} alt={'Events'} />
            </Link>
            <CardTitle>Events</CardTitle>
            <p>Find events to learn, grow, and share with your creative community</p>
            <ExploreSubtitle to="./events"> Explore Events {'>'}</ExploreSubtitle>
          </ElementContainer>
        </GridItem>
        <GridItem>
          <ElementContainer>
            <Link to="./articles">
              <img src={resources_icon} alt={'Articles'} />
            </Link>
            <CardTitle>Articles</CardTitle>
            <p>Increase your knowledge of design through relevant articles</p>
            <ExploreSubtitle to="./articles"> Explore Articles {'>'}</ExploreSubtitle>
          </ElementContainer>
        </GridItem>
        <GridItem>
          <ElementContainer>
            <Link to="./faculty">
              <img src={community_icon} alt={'Faculties'} />
            </Link>
            <CardTitle>Faculty</CardTitle>
            <p>Explore and connect with the design faculty here at Cornell</p>
            <ExploreSubtitle to="./faculty"> Explore Faculty {'>'}</ExploreSubtitle>
          </ElementContainer>
        </GridItem>
      </DesktopWrapper>
      <MobileWrapper>
        <GridMobile>
          <Link to="./areas-of-study">
            <ExploreSubtitle to="./areas-of-study"> {'>'}</ExploreSubtitle>
            <CardTitle>Majors & Minors</CardTitle>
            <img src={majors_minors_mobile} alt={'Majors & Minors'} />
          </Link>
        </GridMobile>
        <GridMobile>
          <Link to="./explore-courses">
            <CardTitle>Design Courses</CardTitle>
            <ExploreSubtitle to="./explorecourses"> {'>'}</ExploreSubtitle>
            <img src={courses_mobile} alt={'Design Courses'} />
          </Link>
        </GridMobile>
        <GridMobile>
          <Link to="./student-organizations">
            <CardTitle>Organizations</CardTitle>
            <ExploreSubtitle to="./student-organizations"> {'>'}</ExploreSubtitle>
            <img src={orgs_mobile} alt={'Organizations'} />
          </Link>
        </GridMobile>
        <GridMobile>
          <Link to="./faculty">
            <CardTitle>Faculty</CardTitle>
            <ExploreSubtitle to="./faculty"> {'>'}</ExploreSubtitle>
            <img src={faculty_mobile} alt={'Faculty'} />
          </Link>
        </GridMobile>

        <MobileElementContainer>
          <SmallTitle>Upcoming Events</SmallTitle>
          <ExploreSubtitle to="./events"> {'>'}</ExploreSubtitle>
          {homepageEventDisplay()}
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallHeading><Link to="./events"></Link>See more events</SmallHeading>
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallTitle>Articles</SmallTitle>
          <ExploreSubtitle to="./articles"> {'>'}</ExploreSubtitle>
          {articlesDisplay()}
        </MobileElementContainer>
        <MobileElementContainer>
          <SmallHeading><Link to="./articles"></Link>See more articles</SmallHeading>
        </MobileElementContainer>
      </MobileWrapper>
    </Grid>



  </div >
);

export default Homepage;
