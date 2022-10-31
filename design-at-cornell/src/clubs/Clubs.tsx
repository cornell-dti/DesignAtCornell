import React, { useState, useEffect } from 'react';
import api from '../constants/util';
import Title from './title/Title';
import Pagination from '../pagination/Pagination';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/src/types';
import Dashboard from './dashboard/Dashboard';
import { mobileBreakpoint } from '../constants/styling';

const Clubs = () => {
  useEffect(() => {
    api
      .get('/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
    window.addEventListener('resize', changeClubsPerPage);
  }, []);

  const changeClubsPerPage = () => {
    if (window.innerWidth < mobileBreakpoint) {
      setClubsPerPage(8);
    } else {
      setClubsPerPage(20);
    }
  };

  const [clubs, setClubs] = useState<Club[]>([]);
  const [currentPage, setPage] = useState(1);
  const [cards, setClubsPerPage] = useState(20);

  const lastClubIdx = currentPage * cards;
  const firstClubIdx = lastClubIdx - cards;
  const displayedClubs = clubs.slice(firstClubIdx, lastClubIdx);

  return (
    <VerticalFlex>
      <Title />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={cards}
        totalCards={clubs.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
