import React from 'react';
import { StudentOrgBackground, StudentOrgContainer } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';

const Title = () => (
  <StudentOrgBackground color={colors.green}>
    <StudentOrgContainer>
      <h1>Areas of Study</h1>
      <p>
        A guide to the different paths and stories you may pave in your design career at Cornell
      </p>
    </StudentOrgContainer>
  </StudentOrgBackground>
);

export default Title;
