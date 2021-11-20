import React from 'react';
import FilterBar, { Props } from './FilterBar';
import { TitleBackground, TitleContainer, QuizButton } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';

const Title = (props: Props) => (
  <TitleBackground color={colors.cyan}>
    <TitleContainer>
      <h1>Student Organizations</h1>
      <p>Find your design people, your creative community :)</p>
    </TitleContainer>
    <FilterBar {...props} />
  </TitleBackground>
);

export default Title;
