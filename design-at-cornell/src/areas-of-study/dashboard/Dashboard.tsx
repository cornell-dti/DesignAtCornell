import React from 'react';
import {
  DashboardContainer,
  StudiesContainer,
  MobileStudiesContainer,
  Divider,
} from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Major } from '../../../../server/src/types';
import { Filters, SetFilters } from '../../constants/filter-criteria';
import ApplyTags from './ApplyTags';
import TagsDropdown from './TagsDropdown';
import PageDropdown from './PageDropdown';
import { MobileFilterBarContainer } from '../../components/FilterBarStyles';

const Dashboard = (props: Props) => {
  const studies = (category: string, studies: Major[]) => (
    <div>
      <Divider>
        <h1>{category}</h1>
        <hr />
      </Divider>
      <StudiesGrid
        {...{
          studies: studies,
          designAreaTags: props.designAreaTags,
          schoolTags: props.schoolTags,
        }}
      />
    </div>
  );

  return (
    <DashboardContainer>
      <MobileFilterBarContainer>
        <PageDropdown
          {...{
            pages: props.pages,
            setPages: props.setPages,
          }}
        />
        <TagsDropdown
          {...{
            designAreaTags: props.designAreaTags,
            schoolTags: props.schoolTags,
            setDesignAreaTags: props.setDesignTags,
            setSchoolTags: props.setSchoolTags,
          }}
        />
      </MobileFilterBarContainer>
      <StudiesContainer>
        {studies('Undergraduate Majors', props.majors)}
        {studies('Undergraduate Minors', props.minors)}
        {studies('Graduate Studies', props.gradStudies)}
      </StudiesContainer>
      <MobileStudiesContainer>
        {props.pages[0] === 'Majors' && studies('Undergraduate Majors', props.majors)}
        {props.pages[0] === 'Minors' && studies('Undergraduate Minors', props.minors)}
        {props.pages[0] === 'Graduate' && studies('Graduate Studies', props.gradStudies)}
      </MobileStudiesContainer>
      <ApplyTags
        {...{
          designAreaTags: props.designAreaTags,
          schoolTags: props.schoolTags,
          setDesignAreaTags: props.setDesignTags,
          setSchoolTags: props.setSchoolTags,
        }}
      />
    </DashboardContainer>
  );
};

type Props = {
  majors: Major[];
  minors: Major[];
  gradStudies: Major[];
  designAreaTags: Filters;
  schoolTags: Filters;
  setDesignTags: SetFilters;
  setSchoolTags: SetFilters;
  pages: String[];
  setPages: React.Dispatch<React.SetStateAction<String[]>>;
};

export default Dashboard;
