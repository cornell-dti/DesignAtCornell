import axios from 'axios';
import { Course, RosterCourse, RosterResponse } from '../types';
import fsCoursesRead from 'fs';
import csv from 'csv-parser';
import { createCourses } from '../endpoints/courses/courses_endpoints';



const classRosterURL = 'https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA21&subject=';

const prevClassRosterURL = 'https://classes.cornell.edu/api/2.0/search/classes.json?roster=SP21&subject=';

const summerClassRosterURL = 'https://classes.cornell.edu/api/2.0/search/classes.json?roster=SU21&subject='

const coursesCSV = [];


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
    //console.log(formattedCourses);
    getRosterCourses(formattedCourses)
  });


async function getRosterCourses(courses: string[][]) {
    let fetchedCourses = [];
    let missedCourses = [];
    for(let i = 0; i < courses.length; i++) {
        await axios.get(classRosterURL + courses[i][0] + '&q=' + courses[i][1]).then(async (res) => {
            let resData: RosterResponse  = await res.data as RosterResponse;
            let classes = resData.data.classes as RosterCourse[];
            //console.log(classes[0].catalogNbr);
            fetchedCourses.push(classes[0] as RosterCourse);
            })
            .catch(() => {
                missedCourses.push(courses[i]);
            })
    }
    console.log('i finished getting');
    transformCourses(fetchedCourses);
    getPrevRosterCourses(missedCourses);
}

async function getPrevRosterCourses(courses: string[][]) {
    let fetchedCourses = [];
    let missedCourses = [];
    for(let i = 0; i < courses.length; i++) {
        await axios.get(summerClassRosterURL + courses[i][0] + '&q=' + courses[i][1]).then(async (res) => {
            let resData: RosterResponse  = await res.data as RosterResponse;
            let classes = resData.data.classes as RosterCourse[];
            //console.log(classes[0].catalogNbr);
            fetchedCourses.push(classes[0] as RosterCourse);
            })
            .catch(() => {
                missedCourses.push(courses[i])
            })
    }
    console.log('i finished getting');
    transformCourses(fetchedCourses);
    getSummerRosterCourses(missedCourses);
}

async function getSummerRosterCourses(courses: string[][]) {
    let fetchedCourses = [];
    let missedCourses = [];
    for(let i = 0; i < courses.length; i++) {
        await axios.get(prevClassRosterURL + courses[i][0] + '&q=' + courses[i][1]).then(async (res) => {
            let resData: RosterResponse  = await res.data as RosterResponse;
            let classes = resData.data.classes as RosterCourse[];
            //console.log(classes[0].catalogNbr);
            fetchedCourses.push(classes[0] as RosterCourse);
            })
            .catch(() => {
                missedCourses.push(courses[i]);
            })
    }
    console.log('i finished getting');
    console.log('missed courses after summer');
    console.log(missedCourses);
    transformCourses(fetchedCourses);
}


function transformCourses(courses: RosterCourse[]) {
    //console.log(courses);
    let formattedCourses: Course[] = [];
    for(let i = 0; i < courses.length; i++) {
        let formattedSemesters = courses[i].catalogWhenOffered.split(', ');
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
                courseRoster: 'https://classes.cornell.edu/browse/roster/FA21/class/' + courses[i].subject + '/' + courses[i].catalogNbr,
                credits: courses[i].enrollGroups[0].unitsMaximum,
                major: 'tbd',
                designAreas: ['tbd'],
                semester: formattedSemesters
            }
        })
    }
    console.log('i finished transforming');
    pushCoursesToDatabase(formattedCourses);
}

function pushCoursesToDatabase(courses: Course[]) {
    
    console.log('i pushed the courses to firestore')
}

/*

-grab all possible courses from current roster
-anything that can't be grabbed, grab from previous roster
-format design areas


*/