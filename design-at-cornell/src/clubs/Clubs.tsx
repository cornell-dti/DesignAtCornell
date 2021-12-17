import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import Pagination from '../pagination/Pagination';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/types';
import { Filters, designAreas, organizationType, size } from '../constants/filter-criteria';
import Dashboard from './dashboard/Dashboard';

const Clubs = () => {
  useEffect(() => {
    /**
     * @param c is the raw input for a club retrieved from the backend
     * @returns whether c has the correct type (Club)
     */
    const isClub = (c: Club): c is Club => {
      return (
        typeof c.title === 'string' &&
        typeof c.content === 'object' &&
        typeof c.content.orgType === 'string' &&
        typeof c.content.size === 'string' &&
        typeof c.content.website === 'string' &&
        typeof c.content.description === 'string' &&
        typeof c.content.contact === 'string' &&
        (typeof c.content.credits === 'number' || typeof c.content.credits === 'object') &&
        Array.isArray(c.content.designAreas) &&
        c.content.designAreas.every((e) => typeof e === 'string')
      );
    };

    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then((data) => data.filter(isClub)) // filter incorrectly typed input
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

  /**
   * Filter clubs based on applied filters in each category and the search query.
   * For each filter category, the 'all' tag is applied if no other filters are selected.
   * The search query selects a club if it is a substring of the club's title or orgType,
   * ignoring case and white space.
   */
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
  /**
   * Find clubs to be displayed on the current page.
   */
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
        cardsPerPage={clubsPerPage}
        totalCards={filterResult.length}
        paginate={setPage}
      />
    </VerticalFlex>
  );
};

export default Clubs;
