import React from 'react';
import styles from './Homepage.module.css';
import AppPlaceholderImage from '../placeholder/AppPlaceholderImage';

const Homepage: React.FC = () => (
  <div className={styles.Homepage} data-testid="Homepage">
    <AppPlaceholderImage />
  </div>
);

export default Homepage;
