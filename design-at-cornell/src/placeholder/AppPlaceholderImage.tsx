import React from 'react';
import styles from './AppPlaceholderImage.module.css';
import placeholderImage from '../static/images/placeholder.png';

const AppPlaceholderImage: React.FC = () => (
  <div className={styles.PlaceholderImage} data-testid="AppPlaceholderImage">
    <img src={placeholderImage} style={{ maxWidth: '100%', maxHeight: '90vh' }}
      alt="placeholder"></img>
  </div>
);

export default AppPlaceholderImage;
