import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacultyDashboard from './Dashboard';
import { Instructor } from '../../../../server/types';

const Faculty = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getFaculty')
      .then((res) => res.data.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Instructor[]>([]);

  return (
    <FacultyDashboard {...faculty}/>
  )
};

export default Faculty;