import React from 'react';
import { TitleBackground, TitleContainer } from '../components/TitleStyles';
import { colors } from '../constants/colors';

const Title = () => (
  <TitleBackground color={colors.blue}>
    <TitleContainer>
      <h1>Events</h1>
      <p>Learn, grow and share with your creative community.</p>
    </TitleContainer>
  </TitleBackground>
);

export default Title;
