export type courseContent = {
  title: string;
  description: string;
  courseSite: string;
  courseRoster: string;
  credits: number;
  major: string;
  designAreas: string[];
  semester: string[];
};

export type Course = {
  id: string;
  code: number;
  content: courseContent;
};

export type majorContent = {
  academicLevel: string;
  departmentPage: string;
  designAreas: string[];
  reasons: Reason[];
  school: string;
  type: string;
};

export type Major = {
  title: string;
  content: majorContent;
};

export type Reason = {
  firstName: string;
  gradYear: number;
  response: string;
};

export type clubContent = {
  designAreas: string[];
  orgType: string;
  size: string;
  website: string;
  description: string;
  credits: number;
  contact: string;
};

export type Club = {
  title: string;
  content: clubContent;
};

export type eventContent = {
  date: string;
  period: string;
  type: string;
  topic: string;
  description: string;
  rsvpLink: string;
};

export type Event = {
  title: string;
  content: eventContent;
};

export const rosterSem = 'SP21';

export type RosterResponse = {
  status: string;
  data: {
    classes: RosterCourse[];
  };
};

export type RosterCourse = {
  strm: number;
  crseId: number;
  crseOfferNbr: number;
  subject: string;
  catalogNbr: string;
  titleShort: string;
  titleLong: string;
  enrollGroups: EnrollGroup[];
  description: string;
  catalogBreadth: string;
  catalogDistr: string;
  catalogLang: string;
  catalogForbiddenOverlaps: string;
  catalogAttribute: string;
  catalogWhenOffered: string;
  catalogComments: string;
  catalogPrereqCoreq: string;
  catalogFee: string;
  catalogSatisfiesReq: string;
  catalogPermission: string;
  catalogCourseSubfield: string;
  catalogOutcomes: any;
  acadCareer: string;
  acadGroup: string;
};

export type EnrollGroup = {
  classSections: ClassSection[];
  unitsMinimum: number;
  unitsMaximum: number;
  componentsOptional: any[];
  componentsRequired: string[];
  gradingBasis: string;
  gradingBasisShort: string;
  gradingBasisLong: string;
  simpleCombinations: SimpleCombination[];
  sessionCode: string;
  sessionBeginDt: string;
  sessionEndDt: string;
  sessionLong: string;
};

export type SimpleCombination = {
  subject: string;
  catalogNbr: string;
  type: string;
};

export type ClassSection = {
  ssrComponent: string;
  ssrComponentLong: string;
  section: string;
  classNbr: number;
  meetings: Meeting[];
  notes: Note[];
  campus: string;
  campusDescr: string;
  location: string;
  locationDescr: string;
  startDt: string;
  endDt: string;
  addConsent: string;
  addConsentDescr: string;
  isComponentGraded: boolean;
  instructionMode: string;
  instrModeDescrshort: string;
  instrModeDescr: string;
  topicDescription: string;
};

export type Meeting = {
  classMtgNbr: number;
  timeStart: string;
  timeEnd: string;
  startDt: string;
  endDt: string;
  instructors: Instructor[];
  pattern: string;
  facilityDescr: string;
  bldgDescr: any;
  facilityDescrshort: string;
  meetingTopicDescription: string;
};

export type Instructor = {
  instrAssignSeq: number;
  netid: string;
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Note = {
  classNotesSeq: number;
  descrlong: string;
};

export type FetchedCourse = {
  course: RosterCourse;
  sem: string;
  designAreas: string[];
};

export type identifierAndDA = {
  identifier: string[];
  designAreas: string[];
}
