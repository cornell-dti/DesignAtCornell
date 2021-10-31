export type Filters = {[indexer: string] : boolean};
export type SetFilters = (filters: React.SetStateAction<Filters>) => void;

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
