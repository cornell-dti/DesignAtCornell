import React from 'react';
import { TitleBackgroundImage, TitleContainerBox } from '../components/TitleStyles';
import background from '../static/images/designcommunity-background.svg';

const Title = () => (
  <TitleBackgroundImage style={{ backgroundImage: `url(${background})` }}>
    <TitleContainerBox>
      <h1>Welcome to your design community!</h1>
      <p>
        Grow relationships with like-minded individuals by connecting with the amazing design
        faculty at Cornell! Expand your knowledge of design through exploring relevant articles.
      </p>
    </TitleContainerBox>
  </TitleBackgroundImage>
);

export default Title;
