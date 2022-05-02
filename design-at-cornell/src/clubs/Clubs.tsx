import React, { useState, useEffect } from 'react';
import api from '../constants/util';
import Title from './title/Title';
import Pagination from '../pagination/Pagination';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/types';
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
  const [designAreaTags] = useState<Filters>({ ...designAreas, all: true });
  const [orgTypeTags] = useState<Filters>({ ...organizationType, all: true });
  const [sizeTags] = useState<Filters>({ ...size, all: true });
  const [search] = useState('');
  const [currentPage, setPage] = useState(1);

  const filterResult = clubs.filter(
    (club) =>
      club.content.designAreas.reduce(
        (acc, area) => acc || designAreaTags[area],
        designAreaTags['all']
      ) &&
      (orgTypeTags['all'] || orgTypeTags[club.content.orgType]) &&
      (sizeTags['all'] || sizeTags[club.content.size]) &&
      (club.title + club.content.orgType)
        .replace(/\s/g, '')
        .toLowerCase()
        .includes(search.replace(/\s/g, '').toLowerCase())
  );
  const clubsPerPage = 20;
  const lastClubIdx = currentPage * clubsPerPage;
  const firstClubIdx = lastClubIdx - clubsPerPage;
  const displayedClubs = filterResult.slice(firstClubIdx, lastClubIdx);

  return (
    <VerticalFlex>
      <Title />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        cardsPerPage={clubsPerPage}
        totalCards={filterResult.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
