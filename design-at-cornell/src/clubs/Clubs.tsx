import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  return <VerticalFlex></VerticalFlex>;
};

export default Clubs;
