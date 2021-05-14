import React from 'react';
import FilterBar from './FilterBar';
import { TitleBackground, TitleContainer, QuizButton } from '../ExploreCoursesStyles';
import { TitleProps } from '../types/PropertyTypes';

const Title = (props: TitleProps) => (
  <TitleBackground>
    <TitleContainer>
      <h1>Explore Courses</h1>
      <p>
        Your central hub for finding and learning about courses to enrich your design skillset and
        broaden your horizons.
      </p>
      <QuizButton>
        <p>Taking the Design Course Quiz</p>
      </QuizButton>
    </TitleContainer>
    <FilterBar {...props} />
  </TitleBackground>
);

export default Title;
