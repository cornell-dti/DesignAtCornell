import React from 'react';
import styles from './Homepage.module.css';
import AppPlaceholderImage from '../placeholder/AppPlaceholderImage';
 
const Homepage: React.FC = () => (
  <div className={styles.Homepage} data-testid="Homepage">
        <div className={styles.Headline}>
          <b>Your ultimate resource for all things Design at Cornell University.</b>
        </div>
        <div className={styles.MissionStat}>
          Design at Cornell Mission Statement
        </div>
  </div>
);
 
export default Homepage;
