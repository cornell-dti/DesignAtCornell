import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import Pagination from './Pagination';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/types';
import { Filters, designAreas, organizationType, size } from '../constants/filter-criteria';
import Dashboard from './dashboard/Dashboard';

const Clubs = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  const [clubs, setClubs] = useState<Club[]>([]);
  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas, all: true });
  const [orgTypeTags, setOrgTypeTags] = useState<Filters>({ ...organizationType, all: true });
  const [sizeTags, setSizeTags] = useState<Filters>({ ...size, all: true });
  const [search, setSearch] = useState('');
  const [currentPage, setPage] = useState(1);
  const filterList = [
    { category: 'Design Areas', tags: designAreaTags, setTags: setDesignAreaTags },
    { category: 'Majors/Minors', tags: orgTypeTags, setTags: setOrgTypeTags },
    { category: 'Semesters', tags: sizeTags, setTags: setSizeTags },
  ];

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
      <Title {...{ filterList: filterList, setPage: setPage, setSearch: setSearch }} />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        clubsPerPage={clubsPerPage}
        totalClubs={filterResult.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
