import React, { useState, useEffect } from 'react';
import api from '../constants/util';
import Title from './title/Title';
import Pagination from '../pagination/Pagination';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/src/types';
import { Filters, designAreas, organizationType, size } from '../constants/filter-criteria';
import Dashboard from './dashboard/Dashboard';

const Clubs = () => {
  useEffect(() => {
    api
      .get('/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  const [clubs, setClubs] = useState<Club[]>([]);
  const [currentPage, setPage] = useState(1);

  const clubsPerPage = 20;
  const lastClubIdx = currentPage * clubsPerPage;
  const firstClubIdx = lastClubIdx - clubsPerPage;
  const displayedClubs = clubs.slice(firstClubIdx, lastClubIdx);

  return (
    <VerticalFlex>
      <Title />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={clubsPerPage}
        totalCards={clubs.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
