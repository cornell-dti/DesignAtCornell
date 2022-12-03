import React from 'react';
import { TitleBackground, TitleContainer } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';

const Title = () => (
  <TitleBackground color={colors.green}>
    <TitleContainer>
      <h1>Areas of Study</h1>
      <p>
        A guide to the different paths and stories you may pave in your design career at Cornell
      </p>
    </TitleContainer>
  </TitleBackground>
);

export default Title;
