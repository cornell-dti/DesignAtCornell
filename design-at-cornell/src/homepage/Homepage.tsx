import React from 'react';
import styles from './Homepage.module.css';
import {
  SubComponentHorizontalFlex,
  SubComponentVerticalFlex,
} from '../components/ContainerStyles';
import {
  Headline,
  MissionStat,
  SubComponent,
  SubComponentTitle,
  ExploreSubtitle,
} from '../components/HomepageStyles';
import design_courses from '../static/images/design_courses.svg';
import majors_minors from '../static/images/majors_minors.svg';
import orgs_icon from '../static/images/orgs_icon.svg';
import events_icon from '../static/images/events_icon.svg';
import resources_icon from '../static/images/resources_icon.svg';
import community_icon from '../static/images/community_icon.svg';

const Homepage: React.FC = () => (
  <div className={styles.Homepage} data-testid="Homepage">
    <Headline>
      <b>Your ultimate resource for all things Design at Cornell University.</b>
    </Headline>
    <MissionStat>Design at Corenll Mission Statement</MissionStat>

    <SubComponentVerticalFlex>
      <SubComponentHorizontalFlex>
        <SubComponent onClick={() => window.open('/explore-courses', '_self')}>
          <img src={design_courses} alt={'Design Courses'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Design Courses</SubComponentTitle>
            <p>
              Your central hub for finding and learning about courses to enrich your design skillset
              and broaden your horizons.
            </p>
            <ExploreSubtitle onClick={() => window.open('/explore-courses', '_self')}>
              {' '}
              Explore Courses {'>'}
            </ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>

        <SubComponent onClick={() => window.open('/areas-of-study', '_self')}>
          <img src={majors_minors} alt={'Majors/Minors'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Majors {'&'} Minors</SubComponentTitle>
            <p>
              A guide to the different paths and stories you may pave in your design career at
              Cornell.{' '}
            </p>
            <ExploreSubtitle onClick={() => window.open('/areas-of-study', '_self')}>
              {' '}
              Explore Majors {'&'} Minors {'>'}
            </ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>

        <SubComponent onClick={() => window.open('/student-organizations', '_self')}>
          <img src={orgs_icon} alt={'Organizations'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Organizations</SubComponentTitle>
            <p>A place to find all design-related organizations at Cornell.</p>
            <ExploreSubtitle onClick={() => window.open('/student-organizations', '_self')}>
              {' '}
              Explore Organizations {'>'}
            </ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>
      </SubComponentHorizontalFlex>

      <SubComponentHorizontalFlex>
        <SubComponent onClick={() => window.open('/events', '_self')}>
          <img src={events_icon} alt={'Events'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Events</SubComponentTitle>
            <p>Find events to learn, grow and share with your creative community.</p>
            <ExploreSubtitle onClick={() => window.open('/events', '_self')}>
              {' '}
              Explore Events {'>'}
            </ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>

        <SubComponent>
          <img src={resources_icon} alt={'Resources'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Resources</SubComponentTitle>
            <p>Find design resources here. </p>
            <ExploreSubtitle> Explore Resources {'>'}</ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>

        <SubComponent>
          <img src={community_icon} alt={'Community'} />
          <SubComponentVerticalFlex>
            <SubComponentTitle>Community</SubComponentTitle>
            <p>Short Description about the design community to intrigue and interest users</p>
            <ExploreSubtitle> Explore Community {'>'}</ExploreSubtitle>
          </SubComponentVerticalFlex>
        </SubComponent>
      </SubComponentHorizontalFlex>
    </SubComponentVerticalFlex>
  </div>
);

export default Homepage;
