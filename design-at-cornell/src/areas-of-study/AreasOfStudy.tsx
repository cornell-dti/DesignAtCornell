import React, { useEffect, useState } from 'react';
import { PageContainer } from './AreasOfStudyStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import axios from 'axios';
import { Major } from '../../../server/types';

export type AreaOfStudy = {
  name: string;
  description: string;
};

export type Studies = {
  readonly majors: ReadonlyArray<Major>;
  readonly minors: ReadonlyArray<Major>;
  readonly gradStudies: ReadonlyArray<Major>;
}

const AreasOfStudy = () => {

  const [majors, setMajors] = useState<ReadonlyArray<Major>>([]);

  const majorsURL = 'http://localhost:3000/getMajors';
  useEffect(() => {
    axios
      .get<{
        success: boolean;
        data: Major[];
      }>(majorsURL)
      .then(res => res.data.data)
      .then(setMajors)
  }, []);

  const studies: Studies = {
    majors: majors,
    minors: majors,
    gradStudies: majors
  }

  return (
    <PageContainer>
      <Title />
      <Dashboard {...studies} />
    </PageContainer>
  );
}

export default AreasOfStudy;
