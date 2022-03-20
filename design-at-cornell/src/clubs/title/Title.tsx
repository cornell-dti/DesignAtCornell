import React from 'react';
import { TitleBackground, TitleContainer } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';

const Title = () => (
  <TitleBackground color={colors.cyan}>
    <TitleContainer>
      <h1>Student Organizations</h1>
      <p>Find your design people, your creative community :)</p>
    </TitleContainer>
  </TitleBackground>
);

export default Title;
