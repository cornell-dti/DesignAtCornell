export type Filters = { [indexer: string]: boolean };
// export type SetFilters = (filters: React.SetStateAction<Filters>) => void;
export type SetFilters = (filters: Filters) => void;

export const designAreas: Filters = {
  'Art + Design': false,
  'Digital Design': false,
  'Industrial Design': false,
  'Policy Design': false,
  'Spatial Design': false,
};

export const schools: Filters = {
  'College of Architecture, Art, Planning': false,
  'College of Agriculture and Life Sciences': false,
  'College of Arts and Sciences': false,
  'College of Engineering': false,
  'College of Human Ecology': false,
  'School of Hotel Administration': false,
  'SC Johnson College of Business': false,
};

export const departments: Filters = {
  ARCH: false,
  ART: false,
  COMM: false,
  CRP: false,
  CS: false,
  DEA: false,
  ECE: false,
  FSAD: false,
  HADM: false,
  INFO: false,
  LA: false,
  MAE: false,
  NBA: false,
  NBAY: false,
};

export const semesters: Filters = {
  Fall: false,
  Spring: false,
  Summer: false,
  Winter: false,
};

export const levels: Filters = {
  '1000': false,
  '2000': false,
  '3000': false,
  '4000': false,
  '5000': false,
};

export const credits: Filters = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5+': false,
};

export const organizationType: Filters = {
  Club: false,
  'Project Team': false,
  'Community Service': false,
  Mentorship: false,
  'Career Prep': false,
  Volunteering: false,
};

export const size: Filters = {
  Small: false,
  Medium: false,
  Large: false,
};
