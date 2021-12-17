import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import { Filters, designAreas, schools } from '../constants/filter-criteria';
import { Major } from '../../../server/types';

const AreasOfStudy = () => {
  useEffect(() => {
    const isAreaOfStudy = (m: Major): m is Major => {
      return (
        typeof m.title === 'string' &&
        typeof m.content === 'object' &&
        typeof m.content.academicLevel === 'string' &&
        typeof m.content.departmentPage === 'string' &&
        typeof m.content.school === 'string' &&
        typeof m.content.type === 'string' &&
        Array.isArray(m.content.designAreas) &&
        m.content.designAreas.every((e) => typeof e === 'string') &&
        Array.isArray(m.content.reasons) &&
        m.content.reasons.every(
          (r) =>
            typeof r === 'string' ||
            (typeof r.firstName === 'string' &&
              typeof r.gradYear === 'number' &&
              typeof r.response === 'string')
        )
      );
    };
    const isMajor = (m: Major) => isAreaOfStudy(m) && m.content.type === 'Major';
    const isMinor = (m: Major) => isAreaOfStudy(m) && m.content.type === 'Minor';

    axios
      .get('http://localhost:3000/getMajors')
      .then((res) => res.data.data)
      .then((allStudies) => {
        const majors = allStudies.filter(isMajor);
        const minors = allStudies.filter(isMinor);
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
