import React, { useEffect } from 'react';
import axios from 'axios';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './Title';
import DesignArticles from './DesignArticles';
import FacultyDashboard from './FacultyDashboard'
import { Instructor } from '../../../server/types'

// const Faculty = () => {
//     const facultyURL = 'http://localhost:3000/getFaculty';
//     useEffect(() => {
//       axios
//         .get<{
//           success: boolean;
//           data: Instructor[];
//         }>(facultyURL)
//         .then((res) => res.data.data)
//     }, []);

const DesignCommunity = () => (
    <VerticalFlex>
        <Title />
        <DesignArticles />
        {/* <FacultyDashboard {...Faculty}/> */}
    </VerticalFlex>
);

export default DesignCommunity;