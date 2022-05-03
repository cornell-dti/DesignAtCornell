import React, { useEffect, useState } from 'react';
import api from '../../../constants/util';
import DesignFacultyDashboard from './Dashboard';
import { Faculty } from '../../../../../server/src/types';

const FacultyPage = () => {
  useEffect(() => {
    api
      .get('/getFaculty')
      .then((res) => res.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Faculty[]>([]);

  return <DesignFacultyDashboard {...faculty} />;
};

export default FacultyPage;
