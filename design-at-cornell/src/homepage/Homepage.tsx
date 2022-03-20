import React from 'react';
import styles from './Homepage.module.css';
import { Headline, MissionStat } from '../components/HomepageStyles';

const Homepage: React.FC = () => (
  <div className={styles.Homepage} data-testid="Homepage">
    <Headline>
      <b>Your ultimate resource for all things Design at Cornell University.</b>
    </Headline>
    <MissionStat>Design at Corenll Mission Statement</MissionStat>
  </div>
);

export default Homepage;
