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
      setMobileVersion(8);
    } else {
      setMobileVersion(20);
    }
  };

  const [clubs, setClubs] = useState<Club[]>([]);
  const [currentPage, setPage] = useState(1);
  const [mobileVersion, setMobileVersion] = useState(20);

  const lastClubIdx = currentPage * mobileVersion;
  const firstClubIdx = lastClubIdx - mobileVersion;
  const displayedClubs = clubs.slice(firstClubIdx, lastClubIdx);

  return (
    <VerticalFlex>
      <Title />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={mobileVersion}
        totalCards={clubs.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
