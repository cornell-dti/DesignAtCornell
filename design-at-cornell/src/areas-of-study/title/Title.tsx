import React from 'react';
import { TitleBackground, TitleContainer, QuizButton } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';

const Title = () => (
  <TitleBackground color={colors.green}>
    <TitleContainer>
      <h1>Areas of Study</h1>
      <p>
        A guide to the different paths and stories you may pave in your design career at Cornell
      </p>
      <QuizButton>
        <p>Take the Majors & Minors Quiz!</p>
      </QuizButton>
    </TitleContainer>
  </TitleBackground>
);

export default Title;
