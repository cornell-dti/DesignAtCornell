import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import { Filters, designAreas, schools } from '../constants/filter-criteria';
import { Major } from '../../../server/types';

const AreasOfStudy = () => {
  const majorsURL = 'http://localhost:3000/getMajors';
  useEffect(() => {
    axios
      .get<{
        success: boolean;
        data: Major[];
      }>(majorsURL)
      .then((res) => res.data.data)
      .then((allStudies) => {
        const majors = allStudies.filter(({ content }) => content.type === 'Major');
        const minors = allStudies.filter(({ content }) => content.type === 'Minor');
        setMajors(majors);
        setMinors(minors);
        setGradStudies([...majors, ...minors]);
      });
  }, []);

  const [majors, setMajors] = useState<Major[]>([]);
  const [minors, setMinors] = useState<Major[]>([]);
  const [gradStudies, setGradStudies] = useState<Major[]>([]);

  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas });

  const [schoolTags, setSchoolTags] = useState<Filters>({ ...schools });

  return (
    <VerticalFlex>
      <Title />
      <Dashboard
        {...{
          majors: majors,
          minors: minors,
          gradStudies: gradStudies,
          designAreaTags: designAreaTags,
          schoolTags: schoolTags,
          setDesignTags: setDesignAreaTags,
          setSchoolTags: setSchoolTags,
        }}
      />
    </VerticalFlex>
  );
};

export default AreasOfStudy;
