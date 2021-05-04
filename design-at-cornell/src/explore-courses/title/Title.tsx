import React from 'react';
import FilterBar from './FilterBar';
import {
  TitleBackground, 
  TitleContainer,
  QuizButton,
} from '../ExploreCoursesStyles';
import { TitleProps } from '../types/PropertyTypes';

const Title = (props: TitleProps) => (
  <TitleBackground>
<<<<<<< HEAD
    <TitleBackgroundSolid>
      <TitleContainer>
        <h1>Explore Courses</h1>
        <p>
          Your central hub for finding and learning about courses to enrich your design skillset and
          broaden your horizons.
        </p>
      </TitleContainer>
      <FilterBar {...props} />
    </TitleBackgroundSolid>
    <TitleBackgroundGradient>
      <FilterBarContainer>
        <p>Take the Design Course Quiz!</p>
      </FilterBarContainer>
    </TitleBackgroundGradient>
=======
    <TitleContainer>
      <h1>Explore Courses</h1>
      <p>Your central hub for finding and learning about courses to enrich your design skillset and broaden your horizons.</p>
      <QuizButton>
        <p>Taking the Design Course Quiz</p>
      </QuizButton>
    </TitleContainer>
    <FilterBar {...props} />
>>>>>>> master
  </TitleBackground>
);

export default Title;
