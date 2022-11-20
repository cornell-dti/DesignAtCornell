import designCourses from '../static/images/design_courses.svg';
import majorsMinors from '../static/images/majors_minors.svg';
import orgsIcon from '../static/images/orgs_icon.svg';
import eventsIcon from '../static/images/events_icon.svg';
import resourcesIcon from '../static/images/resources_icon.svg';
import communityIcon from '../static/images/community_icon.svg';

import majorsMinorsMobile from '../static/images/majors-minors-mobile.svg';
import coursesMobile from '../static/images/courses-mobile.svg';
import orgsMobile from '../static/images/orgs-mobile.svg';
import facultyMobile from '../static/images/faculty-mobile.svg';

type Page = {
  name: string;
  url: string;
};

type HomePage = Page & {
  description: string;
  image: string;
};

const pages: Page[] = [
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' },
  { name: 'Areas of Study', url: '/areas-of-study' },
  { name: 'Student Orgs', url: '/student-orgs' },
  { name: 'Events', url: '/events' },
  { name: 'Faculty', url: '/faculty' },
  { name: 'Articles', url: '/articles' },
];

const homeMobile: HomePage[] = [
  {
    name: 'Courses',
    url: '/courses',
    description: 'A central hub to learn about courses to enrich your design skillset',
    image: coursesMobile,
  },
  {
    name: 'Areas of Study',
    url: '/areas-of-study',
    description: 'A guide to the different paths you may pave at Cornell',
    image: majorsMinorsMobile,
  },

  {
    name: 'Student Orgs',
    url: '/student-orgs',
    description: 'A place to explore your passion through design organizations at Cornell',
    image: orgsMobile,
  },
  {
    name: 'Faculty',
    url: '/faculty',
    description: 'Explore and connect with the design faculty here at Cornell',
    image: facultyMobile,
  },
];

const home: HomePage[] = [
  {
    name: 'Courses',
    url: '/courses',
    description: 'A central hub to learn about courses to enrich your design skillset',
    image: designCourses,
  },
  {
    name: 'Areas of Study',
    url: '/areas-of-study',
    description: 'A guide to the different paths you may pave at Cornell',
    image: majorsMinors,
  },

  {
    name: 'Student Orgs',
    url: '/student-orgs',
    description: 'A place to explore your passion through design organizations at Cornell',
    image: orgsIcon,
  },
  {
    name: 'Events',
    url: '/events',
    description: 'Find events to learn, grow, and share with your creative community',
    image: eventsIcon,
  },
  {
    name: 'Faculty',
    url: '/faculty',
    description: 'Explore and connect with the design faculty here at Cornell',
    image: communityIcon,
  },
  {
    name: 'Articles',
    url: '/articles',
    description: 'Increase your knowledge of design through relevant articles',
    image: resourcesIcon,
  },
];

const explore: Page[] = [
  { name: 'Courses', url: '/courses' },
  { name: 'Areas of Study', url: '/areas-of-study' },
  { name: 'Student Orgs', url: '/student-orgs' },
  { name: 'Events', url: '/events' },
];

const resources: Page[] = [
  { name: 'Design Resources', url: '/design-resources' },
  { name: 'Designer Database', url: '/designer-database' },
  { name: 'Career Resources', url: '/career-resources' },
  { name: 'Design Inspiration', url: '/design-inspiration' },
  { name: 'Faculty Group & Research', url: '/faculty-group-&-research' },
];

const account: Page[] = [
  { name: 'Account', url: '/account' },
  { name: 'Profile', url: '/profile' },
  { name: 'Saved Items', url: '/saved-items' },
  { name: 'Settings', url: '/settings' },
];

export { pages, home, homeMobile, explore, resources, account };
