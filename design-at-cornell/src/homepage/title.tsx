import React from 'react';
import { BannerBackground, BlurbContainer, Blurb } from '../components/HomepageStyles';

const title = () => (
  <BannerBackground>
    <Blurb>
      <BlurbContainer>
        <h3>Spotlight Heading</h3>
        <p>
          brief description of spotlight to intrigue and interest users
          <br />
          <br />
          <a href="https://www.cornell.edu" target="_blank">
            Learn more{'>'}
          </a>
        </p>
      </BlurbContainer>
    </Blurb>
  </BannerBackground>
);

export default title;
