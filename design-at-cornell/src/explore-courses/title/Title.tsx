import React from 'react';
import FilterBar from "./FilterBar";
import {
  TitleBackground,
  TitleBackgroundSolid,
  TitleBackgroundGradient,
  TitleContainer,
  FilterBarContainer,
} from '../ExploreCoursesStyles';
import { TitleProps } from '../types/PropertyTypes';

const Title = (props: TitleProps) => (
  <TitleBackground>
    <TitleBackgroundSolid>
      <TitleContainer>
        <h1>Explore Courses</h1>
        <p>Your central hub for finding and learning about courses to enrich your design skillset and broaden your horizons.</p>
      </TitleContainer>
      <FilterBar {...props} />
    </TitleBackgroundSolid>
    <TitleBackgroundGradient>
      <FilterBarContainer>
        <p>Take the Design Course Quiz!</p>
      </FilterBarContainer>
    </TitleBackgroundGradient>
  </TitleBackground>
)

export default Title