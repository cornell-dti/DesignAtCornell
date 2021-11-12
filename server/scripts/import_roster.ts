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

const fetchedCourses = [];

fsCoursesRead
  .createReadStream('./website_data_csv/courses.csv')
  .pipe(csv())
  .on('data', (data) => coursesCSV.push(data))
  .on('end', () => {
    const formattedCourses: string[][] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < coursesCSV.length; i += 1) {
      const fCourse: string[] = coursesCSV[i].tag.split(' ');
      formattedCourses.push(fCourse);
    }

    getRosterCourses(formattedCourses, classRosterURL).then((missedCourses) => {
      getRosterCourses(missedCourses, prevClassRosterURL).then((missedCoursesNew) => {
        getRosterCourses(missedCoursesNew, summerClassRosterURL).then(() => {
          transformCourses(fetchedCourses);
        });
      });
    });
  });

async function getRosterCourses(coursesOne: string[][], classUrl: string) {
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < coursesOne.length; i += 1) {
    await axios
      .get(`${classUrl + coursesOne[i][0]}&q=${coursesOne[i][1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        fetchedCourses.push(classes[0] as RosterCourse);
      })
      .catch(() => {
        missedCourses.push(coursesOne[i]);
      });
  }
  return missedCourses;
}
function transformCourses(coursesTwo: RosterCourse[]) {
  const formattedCourses: Course[] = [];
  for (let i = 0; i < coursesTwo.length; i += 1) {
    const formattedSemesters = coursesTwo[i].catalogWhenOffered.split(', ');
    let lastSem = formattedSemesters.pop();
    lastSem = lastSem.slice(0, lastSem.length - 1);
    formattedSemesters.push(lastSem);
    formattedCourses.push({
      id: coursesTwo[i].subject,
      code: parseInt(coursesTwo[i].catalogNbr, 0),
      content: {
        title: coursesTwo[i].titleLong,
        description: coursesTwo[i].description,
        courseSite: 'tbd',
        courseRoster: `https://classes.cornell.edu/browse/roster/FA21/class/${coursesTwo[i].subject}/${coursesTwo[i].catalogNbr}`,
        credits: coursesTwo[i].enrollGroups[0].unitsMaximum,
        major: 'tbd',
        designAreas: ['tbd'],
        semester: formattedSemesters,
      },
    });
  }
  pushCoursesToDatabase(formattedCourses);
}

function pushCoursesToDatabase(formattedCourses: Course[]) {
  for (let i = 0; i < formattedCourses.length; i += 1) {
    const courseIdCollection = courses.doc('test2').collection(formattedCourses[i].id);
    const newCourse = courseIdCollection.doc(formattedCourses[i].code.toString());
    newCourse.set(formattedCourses[i].content);
  }
}
