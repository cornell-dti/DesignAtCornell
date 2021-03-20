import React, { useState } from 'react';
import { PageContainer } from './AreasOfStudyStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';

export type AreaOfStudy = {
  name: string;
  description: string;
};

const AreasOfStudy = () => {
  const [studies] = useState<AreaOfStudy[]>([
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '},
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '},
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '},
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '},
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '},
    {name: 'Applied Economics & Management', description: 'Major. Minor. Graduate. Product Design. Dyson. '}
  ]);

  return (
    <PageContainer>
      <Title />
      <Dashboard {...studies}/>
    </PageContainer>
  );
}

export default AreasOfStudy;
