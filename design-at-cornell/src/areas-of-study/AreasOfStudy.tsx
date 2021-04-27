import React, { useEffect, useState } from 'react';
import { PageContainer } from './AreasOfStudyStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import axios from 'axios';
import { Major, MajorContent } from '../../../server/types';

export type AreaOfStudy = {
  name: string;
  description: string;
};

export type Studies = {
  readonly majors: ReadonlyArray<Major>;
  readonly minors: ReadonlyArray<AreaOfStudy>;
  readonly gradStudies: ReadonlyArray<AreaOfStudy>;
}

const AreasOfStudy = () => {

  const [majors, setMajors] = useState<ReadonlyArray<Major>>([]);

  /*
  const [majors] = useState<AreaOfStudy[]>([
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' }
  ]);
  */

  const [minors] = useState<AreaOfStudy[]>([
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' }
  ]);

  const [gradStudies] = useState<AreaOfStudy[]>([
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' },
    { name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. ' }
  ]);

  const majorsURL = '';
  useEffect(() => {
    axios
      .get<Major[]>(majorsURL)
      .then(res => res.data)
      .then(setMajors)
  }, []);

  const studies: Studies = {
    majors: majors,
    minors: minors,
    gradStudies: gradStudies
  }

  return (
    <PageContainer>
      <Title />
      <Dashboard {...studies} />
    </PageContainer>
  );
}

export default AreasOfStudy;
