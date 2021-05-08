import React, { useState } from 'react';
import {
  DashboardContainer,
  StudiesContainer,
  Divider
} from '../AreasOfStudyStyles';
import StudiesGrid from './StudiesGrid';
import { Studies } from '../AreasOfStudy';
import ApplyTags from './ApplyTags';

export type Filters = {
  readonly designAreas: ReadonlySet<string>;
  readonly schools: ReadonlySet<string>;
};

const Dashboard = (studies: Studies) => {
  const [checkboxes, setCheckboxes] = useState<Filters>({
    designAreas: new Set(),
    schools: new Set()
  });
  return (
    <DashboardContainer>
      <StudiesContainer>
        <Divider>
          <h1>Undergraduate Majors</h1>
          <hr />
        </Divider>
        <StudiesGrid studies={studies.majors} filters={checkboxes} />
        <Divider>
          <h1>Undergraduate Minors</h1>
          <hr />
        </Divider>
        <StudiesGrid studies={studies.minors} filters={checkboxes} />
        <Divider>
          <h1>Graduate Studies</h1>
          <hr />
        </Divider>
        <StudiesGrid studies={studies.gradStudies} filters={checkboxes} />
      </StudiesContainer>
      <ApplyTags filters={checkboxes} onChange={setCheckboxes} />
    </DashboardContainer>
  );
}

export default Dashboard;
