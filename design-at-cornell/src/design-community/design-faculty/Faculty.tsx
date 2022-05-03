import React, { useEffect, useState } from 'react';
import api from '../../constants/util';
import FacultyDashboard from './Dashboard';
import { Faculty } from '../../../../server/src/types';

const Instructors = () => {
  useEffect(() => {
    api
      .get('/getFaculty')
      .then((res) => res.data.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Faculty[]>([]);

  return <FacultyDashboard {...faculty} />;
};

export default Instructors;
