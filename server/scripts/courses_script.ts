import csv from 'csv-parser';
import fsCoursesRead from 'fs';
import { courses } from '../src/server';
import { Course, rosterSem } from '../src/types';

const coursesCSV = [];

function createCourses(formatCourses: Course[]) {
  for (let i = 0; i < formatCourses.length; i += 1) {
    const courseIDCollection = courses.doc(rosterSem).collection(formatCourses[i].id);
    const newCourse = courseIDCollection.doc(formatCourses[i].code.toString());
    newCourse.set({
      title: formatCourses[i].content.title,
      semester: formatCourses[i].content.semester,
      credits: formatCourses[i].content.credits,
      major: formatCourses[i].content.major,
      description: formatCourses[i].content.description,
      designAreas: formatCourses[i].content.designAreas,
      courseRoster: formatCourses[i].content.courseRoster,
      courseSite: formatCourses[i].content.courseSite,
    });
  }
}

fsCoursesRead
  .createReadStream('./website_data_csv/courses.csv')
  .pipe(csv())
  .on('data', (data) => coursesCSV.push(data))
  .on('end', () => {
    const formattedCourses: Course[] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < coursesCSV.length; i += 1) {
      const fCourse: Course = {
        id: coursesCSV[i].tag.split(' ')[0],
        code: parseInt(coursesCSV[i].tag.split(' ')[1], 10),
        content: {
          title: coursesCSV[i].title,
          semester: coursesCSV[i].semester.split(', '),
          credits: parseInt(coursesCSV[i].credits, 10),
          major: coursesCSV[i].major,
          description: coursesCSV[i].description,
          designAreas: coursesCSV[i].designAreas.split(', '),
          courseRoster: coursesCSV[i].courseRoster,
          courseSite: coursesCSV[i].courseSite,
        },
      };
      formattedCourses.push(fCourse);
    }
    createCourses(formattedCourses);
    console.log('added courses to firebase');
  });
