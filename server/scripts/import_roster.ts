import axios from 'axios';
import { Course, RosterCourse, RosterResponse } from '../types';
import fsCoursesRead from 'fs';
import csv from 'csv-parser';
import { createCourses } from '../endpoints/courses/courses_endpoints';


const classRosterURL = 'https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA21&subject=';

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
    for(let i = 0; i < courses.length; i++) {
        await axios.get(classRosterURL + courses[i][0] + '&q=' + courses[i][1]).then(async (res) => {
            let resData: RosterResponse  = await res.data as RosterResponse;
            let classes = resData.data.classes as RosterCourse[];
            //console.log(classes[0].catalogNbr);
            fetchedCourses.push(classes[0] as RosterCourse);
            })
            .catch((error) => {
                console.log(courses[i]);
            })
    }
    console.log('i finished getting');
    transformCourses(fetchedCourses);
}

function transformCourses(courses: RosterCourse[]) {
    //console.log(courses);
    let formattedCourses: Course[] = [];
    for(let i = 0; i < courses.length; i++) {
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
                semester: [courses[i].catalogWhenOffered],
            }
        })
    }
    console.log('i finished transforming');
    console.log(formattedCourses.length);

}