import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DesignFacultyDashboard from './Dashboard';
import { Instructor } from '../../../../../server/types';

const FacultyPage = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getArticles')
      .then((res) => res.data)
      .then(setFaculty);
  }, []);

  const [faculty, setFaculty] = useState<Instructor[]>([]);

  return <DesignFacultyDashboard {...faculty} />;
};

export default FacultyPage;