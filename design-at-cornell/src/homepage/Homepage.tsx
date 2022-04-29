import React from 'react';
import {
  Headline,
  MissionStat,
  CardTitle,
  Grid,
  ElementContainer,
  Col,
  ExploreSubtitle,
} from '../components/HomepageStyles';
import design_courses from '../static/images/design_courses.svg';
import majors_minors from '../static/images/majors_minors.svg';
import orgs_icon from '../static/images/orgs_icon.svg';
import events_icon from '../static/images/events_icon.svg';
import resources_icon from '../static/images/resources_icon.svg';
import community_icon from '../static/images/community_icon.svg';
import Title from './title';

const Homepage: React.FC = () => (
  <div data-testid="Homepage">
    <Title />
    <Headline>
      <b>Your ultimate resource for all things Design at Cornell University.</b>
    </Headline>
    <MissionStat>
      Our mission is to connect, inform, and inspire the design community at Cornell University.
    </MissionStat>
    <Grid>
      <Col>
        <ElementContainer onClick={() => window.open('/explore-courses', '_self')}>
          <img src={design_courses} alt={'Design Courses'} />
          <CardTitle>Design Courses</CardTitle>
          <p>A central hub to learn about courses to enrich your design skillset</p>
          <ExploreSubtitle to="./explore-courses"> Explore Courses {'>'}</ExploreSubtitle>
        </ElementContainer>
        <ElementContainer onClick={() => window.open('/events', '_self')}>
          <img src={events_icon} alt={'Events'} />
          <CardTitle>Events</CardTitle>
          <p>Find events to learn, grow, and share with your creative community</p>
          <ExploreSubtitle to="./events"> Explore Events {'>'}</ExploreSubtitle>
        </ElementContainer>
      </Col>
      <Col>
        <ElementContainer>
          <img src={majors_minors} alt={'Majors/Minors'} />
          <CardTitle>Majors {'&'} Minors</CardTitle>
          <p>A guide to the different paths you may pave at Cornell</p>
          <ExploreSubtitle to="./areas-of-study"> Explore Majors & Minors {'>'}</ExploreSubtitle>
        </ElementContainer>
        <ElementContainer onClick={() => window.open('/articles', '_self')}>
          <img src={resources_icon} alt={'Articles'} />
          <CardTitle>Articles</CardTitle>
          <p>Increase your knowledge of design through relevant articles</p>
          <ExploreSubtitle to="./articles"> Explore Articles {'>'}</ExploreSubtitle>
        </ElementContainer>
      </Col>
      <Col>
        <ElementContainer onClick={() => window.open('/student-organizations', '_self')}>
          <img src={orgs_icon} alt={'Student Organizations'} />
          <CardTitle>Organizations</CardTitle>
          <p>A place to explore your passion through design organizations at Cornell</p>
          <ExploreSubtitle to="./student-organizations">
            {' '}
            Explore Organizations {'>'}
          </ExploreSubtitle>
        </ElementContainer>
        <ElementContainer onClick={() => window.open('/design-community', '_self')}>
          <img src={community_icon} alt={'Faculties'} />
          <CardTitle>Faculty</CardTitle>
          <p>Explore and connect with the design faculty here at Cornell</p>
          <ExploreSubtitle to="./design-community"> Explore Community {'>'}</ExploreSubtitle>
        </ElementContainer>
      </Col>
    </Grid>
  </div>
);

export default Homepage;
