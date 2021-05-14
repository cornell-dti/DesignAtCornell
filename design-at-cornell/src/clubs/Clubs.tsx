import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ClubsStyles';
import Dashboard from './dashboard/Dashboard';
import FilterDropdowns from './title/FilterDropdowns';
import ClubsCategory from './types/ClubsCategory';
import { Club } from '../../../server/types';

const Clubs = () => {

  const [clubs, setClubs] = useState<Club[]>([]);

  const [filterData, setfilterData] = useState<ReadonlyMap<ClubsCategory, ReadonlySet<string>>>(new Map(
    Array.from(FilterDropdowns.keys()).map(category => [category, new Set()])
  ));

  console.log(clubs);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
      />
      <Dashboard {...clubs} />
    </PageContainer>
  );
};

export default Clubs;
