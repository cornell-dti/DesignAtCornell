import React from 'react';
import FilterBar from "./FilterBar";
import {
  TitleBackground,
  TitleContainer
} from '../ClubsStyles';
import { TitleProps } from '../types/PropertyTypes';

const Title = (props: TitleProps) => (
  <TitleBackground>
    <TitleContainer>
      <h1>Student Organizations</h1>
      <p>Find your design people, your creative community :)</p>
    </TitleContainer>
    <FilterBar {...props} />
  </TitleBackground>
)

export default Title