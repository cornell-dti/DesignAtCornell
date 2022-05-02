import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DesignFacultyDashboard from './Dashboard';
import { Faculty } from '../../../../../server/types';

const FacultyPage = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getFaculty')
      .then((res) => res.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Faculty[]>([]);

  return <DesignFacultyDashboard {...faculty} />;
};

export default FacultyPage;
