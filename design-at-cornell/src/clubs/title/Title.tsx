import React from 'react';
import FilterBar from "./FilterBar";
import {
  TitleBackground,
  ClubsTitleBackgroundSolid,
  TitleBackgroundGradient,
  TitleContainer,
  FilterBarContainer,
} from '../ClubsStyles';
import { TitleProps } from '../types/PropertyTypes';

const Title = (props: TitleProps) => (
  <TitleBackground>
    <ClubsTitleBackgroundSolid>
      <TitleContainer>
        <h1>Student Organizations</h1>
        <p>Find your design people, your creative community :)</p>
      </TitleContainer>
      <FilterBar {...props} />
    </ClubsTitleBackgroundSolid>
    <TitleBackgroundGradient>
      <FilterBarContainer>
      </FilterBarContainer>
    </TitleBackgroundGradient>
  </TitleBackground>
)

export default Title