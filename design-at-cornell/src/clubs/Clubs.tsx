import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './title/Title';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/types';
import {
  Filters,
  designAreas,
  organizationType,
  size,
} from '../constants/filter-criteria';

const Clubs = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  const [clubs, setClubs] = useState<Club[]>([]);
  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas, all: true });
  const [organizationTypeTags, setOrganizationTypeTags] = useState<Filters>({ ...organizationType, all: true });
  const [sizeTags, setSizeTags] = useState<Filters>({ ...size, all: true });
  const [search, setSearch] = useState('');
  const [currentPage, setPage] = useState(1);
  const filterList = [
    { category: 'Design Areas', tags: designAreaTags, setTags: setDesignAreaTags },
    { category: 'Majors/Minors', tags: organizationTypeTags, setTags: setOrganizationTypeTags },
    { category: 'Semesters', tags: sizeTags, setTags: setSizeTags },
  ];

  return (
    <VerticalFlex>
      <Title {...{ filterList: filterList, setPage: setPage, setSearch: setSearch }} />
    </VerticalFlex>
  );
};

export default Clubs;
