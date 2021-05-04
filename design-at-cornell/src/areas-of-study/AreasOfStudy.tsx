import React, { useState } from 'react';
import { PageContainer } from './AreasOfStudyStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';

export type AreaOfStudy = {
  name: string;
  description: string;
};

export type Studies = {
  majors: AreaOfStudy[];
  minors: AreaOfStudy[];
  grad_studies: AreaOfStudy[];
};

const AreasOfStudy = () => {
  const [majors] = useState<AreaOfStudy[]>([
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
  ]);

  const [minors] = useState<AreaOfStudy[]>([
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
  ]);

  const [grad_studies] = useState<AreaOfStudy[]>([
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
    {
      name: 'Applied Economics & Management',
      description: 'Major. Minor. Graduate. Product Design. Dyson. ',
    },
  ]);

  const studies: Studies = {
    majors: majors,
    minors: minors,
    grad_studies: grad_studies,
  };

  return (
    <PageContainer>
      <Title />
      <Dashboard {...studies} />
    </PageContainer>
  );
};

export default AreasOfStudy;
