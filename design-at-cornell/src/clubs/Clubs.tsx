import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { PageContainer } from './ClubsStyles';
import Dashboard from './dashboard/Dashboard';
import Pagination from './Pagination';
import FilterDropdowns from './title/FilterDropdowns';
import ClubsCategory from './types/ClubsCategory';
import { Club } from '../../../server/types';

const Clubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);

  const [filterData, setfilterData] = useState<ReadonlyMap<ClubsCategory, ReadonlySet<string>>>(
    new Map(Array.from(FilterDropdowns.keys()).map((category) => [category, new Set()]))
  );

  const [search, setSearch] = useState('');
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  const searchHandler = function (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    setPage(1);
  };

  const paginate = (pageNum: number) => {
    setPage(pageNum);
  };

  const searchResult = clubs.filter(
    (club) =>
      club.title.toLowerCase().includes(search.toLowerCase()) ||
      club.content.description.toLowerCase().includes(search.toLowerCase())
  );

  const clubsPerPage = 20;
  const lastClubIdx = currentPage * clubsPerPage;
  const firstClubIdx = lastClubIdx - clubsPerPage;
  const displayedClubs = searchResult.slice(firstClubIdx, lastClubIdx);

  return (
    <PageContainer>
      <Title
        filterData={filterData}
        dropdownInfo={FilterDropdowns}
        onChange={setfilterData}
        searchHandler={searchHandler}
      />
      <Dashboard {...displayedClubs} />
      <Pagination
        currentPage={currentPage}
        clubsPerPage={clubsPerPage}
        totalClubs={searchResult.length}
        paginate={paginate}
      />
    </PageContainer>
  );
};

export default Clubs;
