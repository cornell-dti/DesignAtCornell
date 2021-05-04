type Page = {
  name: string;
  url: string;
};

const pages: Page[] = [
  { name: 'Explore Courses', url: '/explore-courses' },
  { name: 'Majors & Minors', url: '/areas-of-study' },
  { name: 'Student Organizations', url: '/student-organizations' },
  { name: 'Events', url: '/events' },
  { name: 'Design Resources', url: '/design-resources' },
];

const explore: Page[] = [
  { name: 'Courses', url: '/explore-courses' },
  { name: 'Majors & Minors', url: '/areas-of-study' },
  { name: 'Student Organizations', url: '/student-organizations' },
  { name: 'Events', url: '/events' },
];

const resources: Page[] = [
  { name: 'Design Resources', url: '/design-resources' },
  { name: 'Designer Database', url: '/designer-database' },
  { name: 'Career Resources', url: '/career-resources' },
  { name: 'Design Inspiration', url: '/design-inspiration' },
  { name: 'Faculty Group & Research', url: '/faculty-group-&-research' }
];

const account: Page[] = [
  { name: 'Account', url: '/account' },
  { name: 'Profile', url: '/profile' },
  { name: 'Saved Items', url: '/saved-items' },
  { name: 'Settings', url: '/settings' },
];

export { pages, explore, resources, account };
