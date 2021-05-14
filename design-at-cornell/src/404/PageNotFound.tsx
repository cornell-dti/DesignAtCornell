import React from 'react';
import styles from './PageNotFound.module.css';
import notfoundimage from './../static/images/404-background.png';

const PageNotFound: React.FC = () => (
  <div
    className={styles.PageNotFound}
    data-testid="PageNotFound"
    style={{
      height: '90vh',
      width: '100%',
      position: 'relative',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <img
        src={notfoundimage}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '85%',
          opacity: 0.04,
          marginLeft: '7.5%',
          marginRight: '7.5%',
          paddingTop: '1rem',
        }}
        alt=""
      />
    </div>
    <div style={{ paddingTop: '2rem' }}>
      <h2
        style={{
          width: 'max-content',
          marginLeft: '2rem',
          fontSize: '8rem',
          color: 'red',
          fontWeight: 'bold',
          letterSpacing: '1rem',
        }}
      >
        !?
      </h2>
      <h2 style={{ width: 'max-content', marginLeft: '2rem', fontSize: '3.5rem' }}>
        404: Page not found
      </h2>
      <br />
      <br />
      <p
        style={{
          width: 'fit-content',
          overflowWrap: 'anywhere',
          marginRight: '2rem',
          marginLeft: '2rem',
          textAlign: 'start',
          fontSize: '1.2rem',
        }}
      >
        If you believe that this is an error, contact{' '}
        <a href="mailto:mshepley@cornell.edu">mshepley@cornell.edu</a>.
        <br />
        <br />
        If you believe that this is a technical error, contact{' '}
        <a href="mailto:hello@cornelldti.org">hello@cornelldti.org</a>.
      </p>
    </div>
  </div>
);

export default PageNotFound;
