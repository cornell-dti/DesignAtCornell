/*eslint-disable*/
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
};

export type EventsResponse = {
  events: LocalistEvent[];
};

export type LocalistEvent = {
  event: LocalistEventContent;
};

export type LocalistEventContent = {
  id: number;
  title: string;
  url: string;
  updated_at: string;
  created_at: string;
  facebook_id: string | null;
  first_date: string;
  last_date: string;
  hashtag: string;
  urlname: string;
  user_id: number;
  directions: string;
  allows_reviews: boolean;
  allows_attendence: boolean;
  location: string;
  room_number: string;
  location_name: string;
  status: string;
  experience: string;
  stream_url: string | null;
  stream_info: string | null;
  stream_embed_code: null;
  created_by: number;
  updated_by: number;
  city_id: null;
  neighborhood_id: null;
  school_id: number;
  campus_id: null;
  recurring: boolean;
  free: boolean;
  private: boolean;
  verified: boolean;
  rejected: boolean;
  sponsored: boolean;
  venue_id: number;
  ticket_url: string;
  ticket_cost: string;
  keywords: string[];
  tags: string[];
  description_text: string;
  photo_id: number;
  detail_views: number;
  event_instances: EventInstance[];
  address: string;
  description: string;
  featured: boolean;
  geo: Geo;
  filters: Filters;
  custom_fields: CustomFields;
  localist_url: string;
  localist_ics_url: string;
  photo_url: string;
  venue_url: string;
};

export type EventInstance = {
  event_instance: EventInstanceContent;
};

export type EventInstanceContent = {
  id: number;
  event_id: number;
  start: string;
  end: string | null;
  ranking: number;
  all_day: boolean;
  num_attending: number;
};

export type Geo = {
  latitude: string;
  longitude: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export type Filters = {
  departments: nameID[];
  event_types: nameID[];
  event_university_themes: nameID[];
};

export type nameID = {
  name: string;
  id: number;
};

export type CustomFields = {
  contact_email: string;
  contact_name: string;
  contact_phone: number;
  speake: string;
  speaker_affiliation: string;
  dept_web_site: string;
  open_to: string;
};

export type formattedEvents = {
  events: Event[];
};

export type Event = {
  title: string;
  date: string;
  url: string;
  description: string;
  location: string;
};

export type Article = {
  id: string;
  url: string;
  title: string;
  content_text: string;
  image: string;
  image_1x1: string;
  date_published: string;
  tags: string[];
  image_featured: string;
  image_alt: string;
};
