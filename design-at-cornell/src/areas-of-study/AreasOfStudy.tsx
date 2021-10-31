import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer } from './AreasOfStudyStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import { Filters, designAreas, schools } from '../constants/filter-criteria';
import { Major } from '../../../server/types';

export type Studies = {
  majors: Major[];
  minors: Major[];
  grad_studies: Major[];
};

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
        setStudies({
          majors: majors,
          minors: minors,
          grad_studies: [...majors, ...minors],
        });
      });
  }, []);

  const [studies, setStudies] = useState<Studies>({
    majors: [],
    minors: [],
    grad_studies: [],
  });

  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas });

  const [schoolTags, setSchoolTags] = useState<Filters>({ ...schools });

  return (
    <PageContainer>
      <Title />
      <Dashboard
        {...{
          studies: studies,
          designAreaTags: designAreaTags,
          schoolTags: schoolTags,
          setDesignTags: setDesignAreaTags,
          setSchoolTags: setSchoolTags,
        }}
      />
    </PageContainer>
  );
};

export default AreasOfStudy;
