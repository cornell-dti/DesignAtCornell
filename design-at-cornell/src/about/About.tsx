import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => (
  <div className={styles.About} data-testid="About">
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ width: 'max-content', marginLeft: '2rem', fontSize: '2rem' }}>
        Coming soon...
    </h2>
      <br />
      <p style={{
        width: 'fit-content', overflowWrap: 'anywhere', marginRight: '2rem',
        marginLeft: '2rem', textAlign: 'start', fontSize: '1.2rem'
      }}>
        A site to centralize all of the design resources at Cornell.
        <br />
        <br />
        Contact <a href="mailto:mshepley@cornell.edu">mshepley@cornell.edu</a> for questions about the project or <a href="mailto:hello@cornelldti.org">hello@cornelldti.org</a> for any technical issues.
    </p>
    </div>
  </div>
);

export default About;
