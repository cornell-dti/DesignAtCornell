import axios, { AxiosResponse } from 'axios';
import fsCoursesRead from 'fs';
import csv from 'csv-parser';
import { Course, RosterCourse, RosterResponse, FetchedCourse, identifierAndDA } from '../src/types';
import { courses } from '../src/server';

const currSem = 'SP22';
const prevSem = 'FA21';
const summerSem = 'SU21';
const classRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${currSem}&subject=`;
const prevClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${prevSem}&subject=`;
const summerClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${summerSem}&subject=`;
const coursesCSV = [];
const fetchedCourses: FetchedCourse[] = [];
const identifierToDA: Map<string, string[]> = new Map();

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
      identifierToDA.set(
        courseIdentifier[0] + courseIdentifier[1],
        coursesCSV[i].designAreas.split(',')
      );
      formattedCourses.push(fCourse);
    }
    getRosterCourses(formattedCourses, classRosterURL, currSem)
      .then((missedCourses) => getRosterCourses(missedCourses, prevClassRosterURL, prevSem))
      .then((missedCoursesNew) =>
        getRosterCourses(missedCoursesNew, summerClassRosterURL, summerSem)
      )
      .then(() => transformCourses(fetchedCourses));
  });

async function getRosterCourses(coursesOne: identifierAndDA[], classUrl: string, sem: string) {
  console.log(sem, coursesOne);
  const missedCourses: identifierAndDA[] = [];
  await Promise.allSettled(
    coursesOne.map((course) =>
      axios.get(`${classUrl + course.identifier[0]}&q=${course.identifier[1]}`)
    )
  ).then((queriedCourses) =>
    queriedCourses.forEach((queriedCourse) => {
      if (queriedCourse.status === 'fulfilled') {
        const queriedCourseData = queriedCourse.value.data as RosterResponse;
        const { classes } = queriedCourseData.data;
        const courseSubject = classes[0].subject;
        const courseCode = classes[0].catalogNbr;
        fetchedCourses.push({
          course: classes[0] as RosterCourse,
          sem,
          designAreas: identifierToDA.get(courseSubject + courseCode),
        });
      } else {
        const missedURL: string = queriedCourse.reason.response.config.url;
        const missedCourseSubject: string = missedURL.slice(76, missedURL.lastIndexOf('&'));
        const missedCourseCode: string = missedURL.slice(missedURL.lastIndexOf('=') + 1);
        const missedFormattedCourse: identifierAndDA = {
          identifier: [missedCourseSubject, missedCourseCode],
          designAreas: identifierToDA.get(missedCourseSubject + missedCourseCode),
        };
        missedCourses.push(missedFormattedCourse);
      }
    })
  );
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
  const courseIdCollection = courses.doc('SP23').collection('SP23');
  for (let i = 0; i < formattedCourses.length; i += 1) {
    const newCourse = courseIdCollection.doc(
      `${formattedCourses[i].id.toString()} ${formattedCourses[i].code.toString()}`
    );
    newCourse.set(formattedCourses[i].content);
  }
  console.log('done');
}
