import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VerticalFlex } from '../components/ContainerStyles';
import { Club } from '../../../server/types';

const Clubs = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getClubs')
      .then((res) => res.data.data)
      .then(setClubs);
  }, []);

  const [clubs, setClubs] = useState<Club[]>([]);
  return <VerticalFlex></VerticalFlex>;
};

export default Clubs;
