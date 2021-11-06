import axios from 'axios';
import fsCoursesRead from 'fs';
import csv from 'csv-parser';
import { Course, RosterCourse, RosterResponse } from '../types';
import { courses } from '../server';

const currSem = 'FA21';
const prevSem = 'SP21';
const summerSem = 'SU21';

const classRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${currSem}&subject=`;

const prevClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${prevSem}&subject=`;

const summerClassRosterURL = `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${summerSem}&subject=`;

const coursesCSV = [];

fsCoursesRead
  .createReadStream('./website_data_csv/courses.csv')
  .pipe(csv())
  .on('data', (data) => coursesCSV.push(data))
  .on('end', () => {
    const formattedCourses: string[][] = [];
    for (let i = 0; i < coursesCSV.length; i += 1) {
      const fCourse: string[] = coursesCSV[i].tag.split(' ');
      formattedCourses.push(fCourse);
    }
    getRosterCourses(formattedCourses);
  });

async function getRosterCourses(targetCourses: string[][]) {
  const fetchedCourses = [];
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < targetCourses.length; i += 1) {
    await axios
      .get(`${classRosterURL + targetCourses[i][0]}&q=${targetCourses[i][1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        fetchedCourses.push(classes[0] as RosterCourse);
      })
      .catch(() => {
        missedCourses.push(targetCourses[i]);
      });
  }
  console.log('i finished getting courses from current roster');
  transformCourses(fetchedCourses);
  getPrevRosterCourses(missedCourses);
}

async function getPrevRosterCourses(targetCourses: string[][]) {
  const fetchedCourses = [];
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < targetCourses.length; i += 1) {
    await axios
      .get(`${prevClassRosterURL + targetCourses[i][0]}&q=${targetCourses[i][1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        fetchedCourses.push(classes[0] as RosterCourse);
      })
      .catch(() => {
        missedCourses.push(targetCourses[i]);
      });
  }
  console.log('i finished getting courses from previous roster');
  transformCourses(fetchedCourses);
  getSummerRosterCourses(missedCourses);
}

async function getSummerRosterCourses(targetCourses: string[][]) {
  const fetchedCourses = [];
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < targetCourses.length; i += 1) {
    await axios
      .get(`${summerClassRosterURL + targetCourses[i][0]}&q=${targetCourses[i][1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        fetchedCourses.push(classes[0] as RosterCourse);
      })
      .catch(() => {
        missedCourses.push(targetCourses[i]);
      });
  }
  console.log('i finished getting');
  console.log('missed courses after grabbing from summer');
  console.log(missedCourses);
  transformCourses(fetchedCourses);
}

function transformCourses(targetCourses: RosterCourse[]) {
  const formattedCourses: Course[] = [];
  for (let i = 0; i < targetCourses.length; i += 1) {
    const formattedSemesters = targetCourses[i].catalogWhenOffered.split(', ');
    let lastSem = formattedSemesters.pop();
    lastSem = lastSem.slice(0, lastSem.length - 1);
    formattedSemesters.push(lastSem);
    formattedCourses.push({
      id: targetCourses[i].subject,
      code: parseInt(targetCourses[i].catalogNbr, 10),
      content: {
        title: targetCourses[i].titleLong,
        description: targetCourses[i].description,
        courseSite: 'tbd',
        courseRoster: `https://classes.cornell.edu/browse/roster/FA21/class/${targetCourses[i].subject}/${targetCourses[i].catalogNbr}`,
        credits: targetCourses[i].enrollGroups[0].unitsMaximum,
        major: 'tbd',
        designAreas: ['tbd'],
        semester: formattedSemesters,
      },
    });
  }
  console.log('i finished transforming the courses');
  pushCoursesToDatabase(formattedCourses);
}

function pushCoursesToDatabase(formattedCourses: Course[]) {
  for (let i = 0; i < formattedCourses.length; i += 1) {
    const courseIdCollection = courses.doc('test').collection(formattedCourses[i].id);
    const newCourse = courseIdCollection.doc(formattedCourses[i].code.toString());
    newCourse.set(formattedCourses[i].content);
  }
  console.log('i pushed the courses to firestore');
}
