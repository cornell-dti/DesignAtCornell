import axios from 'axios';
import fsCoursesRead from 'fs';
import csv from 'csv-parser';
import { Course, RosterCourse, RosterResponse, FetchedCourse, identifierAndDA } from '../types';
import { courses } from '../server';

const currSem = 'SP22';
const prevSem = 'FA21';
const summerSem = 'SU21';
const classRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${currSem}&subject=`;
const prevClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${prevSem}&subject=`;
const summerClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${summerSem}&subject=`;
const coursesCSV = [];
const fetchedCourses: FetchedCourse[] = [];
fsCoursesRead
  .createReadStream('./website_data_csv/courses.csv')
  .pipe(csv())
  .on('data', (data) => coursesCSV.push(data))
  .on('end', () => {
    const formattedCourses: identifierAndDA[] = [];
    for (let i = 0; i < coursesCSV.length; i += 1) {
      const courseIdentifier: string[] = coursesCSV[i].tag.split(' ');
      const fCourse: identifierAndDA = {
        identifier: courseIdentifier,
        designAreas: coursesCSV[i].designAreas.split(','),
      };
      formattedCourses.push(fCourse);
    }
    getRosterCourses(formattedCourses, classRosterURL, currSem)
    .then((missedCourses) => getRosterCourses(missedCourses, prevClassRosterURL, prevSem))
    .then((missedCoursesNew) => getRosterCourses(missedCoursesNew, summerClassRosterURL, summerSem))
    .then(() => transformCourses(fetchedCourses));
    });   
async function getRosterCourses(coursesOne: identifierAndDA[], classUrl: string, currSem: string) {
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < coursesOne.length; i += 1) {
    await axios
      .get(`${classUrl + coursesOne[i].identifier[0]}&q=${coursesOne[i].identifier[1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        fetchedCourses.push({
          course: classes[0] as RosterCourse,
          sem: currSem,
          designAreas: coursesOne[i].designAreas,
        });
      })
      .catch(() => {
        missedCourses.push(coursesOne[i]);
      });
  }
  return missedCourses;
}
function transformCourses(coursesTwo: FetchedCourse[]) {
  const formattedCourses: Course[] = [];
  for (let i = 0; i < coursesTwo.length; i += 1) {
    const formattedSemesters = coursesTwo[i].course.catalogWhenOffered.split(', ');
    let lastSem = formattedSemesters.pop();
    lastSem = lastSem.slice(0, lastSem.length - 1);
    formattedSemesters.push(lastSem);
    formattedCourses.push({
      id: coursesTwo[i].course.subject,
      code: parseInt(coursesTwo[i].course.catalogNbr, 0),
      content: {
        title: coursesTwo[i].course.titleLong,
        description: coursesTwo[i].course.description,
        courseSite: 'tbd',
        courseRoster: `https://classes.cornell.edu/browse/roster/${coursesTwo[i].sem}/class/${coursesTwo[i].course.subject}/${coursesTwo[i].course.catalogNbr}`,
        credits: coursesTwo[i].course.enrollGroups[0].unitsMaximum,
        major: 'tbd',
        designAreas: coursesTwo[i].designAreas,
        semester: formattedSemesters,
      },
    });
  }
  pushCoursesToDatabase(formattedCourses);
}
function pushCoursesToDatabase(formattedCourses: Course[]) {
  for (let i = 0; i < formattedCourses.length; i += 1) {
    const courseIdCollection = courses.doc('test2').collection('test');
    const newCourse = courseIdCollection.doc(formattedCourses[i].id.toString() + ' ' + formattedCourses[i].code.toString());
    newCourse.set(formattedCourses[i].content);
  }
  console.log('done');
}
