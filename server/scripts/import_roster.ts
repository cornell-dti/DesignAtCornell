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

    // console.log(formattedCourses);
    getRosterCourses(formattedCourses, classRosterURL).then((missedCourses) => {
      getRosterCourses(missedCourses, prevClassRosterURL).then((missedCourses) => {
        getRosterCourses(missedCourses, summerClassRosterURL).then(() => {
          transformCourses(fetchedCourses);
        });
      });
    });
  });

async function getRosterCourses(courses: string[][], classUrl: string) {
  const missedCourses = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < courses.length; i++) {
    await axios
      .get(`${classUrl + courses[i][0]}&q=${courses[i][1]}`)
      .then(async (res) => {
        const resData: RosterResponse = (await res.data) as RosterResponse;
        const classes = resData.data.classes as RosterCourse[];
        // console.log(classes[0].catalogNbr);
        fetchedCourses.push(classes[0] as RosterCourse);
      })
      .catch(() => {
        missedCourses.push(courses[i]);
      });
  }

  console.log('i finished getting courses from current roster');
  // console.log(classUrl, missedCourses)
  return missedCourses;
}
function transformCourses(courses: RosterCourse[]) {
  const formattedCourses: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    const formattedSemesters = courses[i].catalogWhenOffered.split(', ');
    let lastSem = formattedSemesters.pop();
    lastSem = lastSem.slice(0, lastSem.length - 1);
    formattedSemesters.push(lastSem);
    formattedCourses.push({
      id: courses[i].subject,
      code: parseInt(courses[i].catalogNbr),
      content: {
        title: courses[i].titleLong,
        description: courses[i].description,
        courseSite: 'tbd',
        courseRoster: `https://classes.cornell.edu/browse/roster/FA21/class/${courses[i].subject}/${courses[i].catalogNbr}`,
        credits: courses[i].enrollGroups[0].unitsMaximum,
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
  for (let i = 0; i < formattedCourses.length; i++) {
    const courseIdCollection = courses.doc('test2').collection(formattedCourses[i].id);
    const newCourse = courseIdCollection.doc(formattedCourses[i].code.toString());
    newCourse.set(formattedCourses[i].content);
  }
  console.log('i pushed the courses to firestore');
}
