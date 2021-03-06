type Page = {
  name: string;
  url: string;
};

const pages: Page[] = [
  { name: 'Explore Courses', url: '/explore-courses' },
  { name: 'Majors & Minors', url: '/majors-&-minors' },
  { name: 'Student Organizations', url: '/student-organizations' },
  { name: 'Events', url: '/events' },
  { name: 'Design Resources', url: '/design-resources' }
];

const about: Page[] = [
  { name: 'About', url: '/about' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Developmemt Team', url: '/development-team' }
];

const explore: Page[] = [
  { name: 'Explore Courses', url: '/explore-courses' },
  { name: 'Majors & Minors', url: '/majors-&-minors' },
  { name: 'Student Organizations', url: '/student-organizations' }
];

const events: Page[] = [
  { name: 'Events', url: '/events' },
  { name: 'Upcoming', url: '/upcoming' },
  { name: 'Future', url: '/future' }
]

const resources: Page[] = [
  { name: 'Design Resources', url: '/design-resources' },
  { name: 'Designer Database', url: '/designer-database' },
  { name: 'Career Resources', url: '/career-resources' },
  { name: 'Designe Inspiration', url: '/designe-inspiration' },
  { name: 'Faculty Group & Research', url: '/faculty-group-&-research' }
]

export { pages, about, explore, events, resources };