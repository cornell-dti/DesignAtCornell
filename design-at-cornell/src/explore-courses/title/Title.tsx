import React from 'react';
import FilterBar, { Props } from './FilterBar';
import { TitleBackground, TitleContainer } from '../../components/TitleStyles';
import { colors } from '../../constants/colors';
import { DesktopWrapper } from '../../components/HomepageStyles';

const Title = (props: Props) => (
  <TitleBackground color={colors.yellow}>
    <TitleContainer>
      <h1>Explore Courses</h1>
      <p>
        Your central hub for finding and learning about courses to enrich your design skillset and
        broaden your horizons.
      </p>
    </TitleContainer>
    <DesktopWrapper>
      <FilterBar {...props} />
    </DesktopWrapper>
  </TitleBackground>
);

export default Title;
