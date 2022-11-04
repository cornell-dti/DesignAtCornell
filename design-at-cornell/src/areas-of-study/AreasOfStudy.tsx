import React, { useEffect, useState } from 'react';
import api from '../constants/util';
import { VerticalFlex } from '../components/ContainerStyles';
import Title from './title/Title';
import Dashboard from './dashboard/Dashboard';
import { Filters, designAreas, schools } from '../constants/filter-criteria';
import { Major } from '../../../server/src/types';
import MobileAreaOfStudyPagination from '../pagination/MobileAreasOfStudyPagination';

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

  const [designAreaTags, setDesignAreaTags] = useState<Filters>({ ...designAreas, all: true });

  const [schoolTags, setSchoolTags] = useState<Filters>({ ...schools, all: true });

  const [pages, setPages] = useState<String[]>(['Majors', 'Graduate', 'Minors']);

  const filterResult = (studies: Major[]) =>
    studies.filter(
      (study) =>
        study.content.designAreas.reduce(
          (acc, area) => acc || designAreaTags[area],
          designAreaTags['all']
        ) &&
        (schoolTags['all'] || schoolTags[study.content.school])
    );

  return (
    <VerticalFlex>
      <Title />
      <Dashboard
        {...{
          majors: filterResult(majors),
          minors: filterResult(minors),
          gradStudies: filterResult(gradStudies),
          designAreaTags: designAreaTags,
          schoolTags: schoolTags,
          setDesignTags: setDesignAreaTags,
          setSchoolTags: setSchoolTags,
          pages: pages,
          setPages: setPages,
        }}
      />
      <MobileAreaOfStudyPagination pages={pages} paginate={setPages} />
    </VerticalFlex>
  );
};

export default AreasOfStudy;
