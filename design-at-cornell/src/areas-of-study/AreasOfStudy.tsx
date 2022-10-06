import React, { useEffect, useState } from 'react';
import api from '../constants/util';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import { Filters, designAreas, schools } from '../constants/filter-criteria';
import { Major } from '../../../server/src/types';

const AreasOfStudy = () => {
  useEffect(() => {
    api
      .get<{
        success: boolean;
        data: Major[];
      }>('/getMajors')
      .then((res) => res.data.data)
      .then((allStudies) => {
        const underGradStudies = allStudies.filter(({ content }) => content.academicLevel === 'UG');
        const majors = underGradStudies.filter(({ content }) => content.type === 'Major');
        const minors = underGradStudies.filter(({ content }) => content.type === 'Minor');
        const gradStudies = allStudies.filter(({ content }) => content.academicLevel === 'G');
        setMajors(majors);
        setMinors(minors);
        setGradStudies(gradStudies);
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
