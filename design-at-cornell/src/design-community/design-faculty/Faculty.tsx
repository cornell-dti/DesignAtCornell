import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacultyDashboard from './Dashboard';
import { Faculty } from '../../../../server/types';

const Instructors = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getFaculty')
      .then((res) => res.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Faculty[]>([]);

  return <FacultyDashboard {...faculty} />;
};

export default Instructors;
