import csv from 'csv-parser';
import fsFacultyRead from 'fs';
import { faculty } from '../server';
import { Faculty } from '../types';

const facultyCSV = [];

function createFaculty(formatFaculty: Faculty[]) {
  for (let i = 0; i < formatFaculty.length; i += 1) {
    console.log(formatFaculty[i]);
    const newFaculty = faculty.doc(formatFaculty[i].name);
    newFaculty.set({
      name: formatFaculty[i].name,
      email: formatFaculty[i].email,
      title: formatFaculty[i].title,
      college: formatFaculty[i].college,
      department: formatFaculty[i].department,
      courses: formatFaculty[i].courses,
      description: formatFaculty[i].description,
      tags: formatFaculty[i].tags,
      website: formatFaculty[i].website,
      image: formatFaculty[i].image
    });
  }
}

fsFacultyRead
  .createReadStream('./website_data_csv/faculty.csv')
  .pipe(csv())
  .on('data', (data) => facultyCSV.push(data))
  .on('end', () => {
    const formattedFaculty: Faculty[] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < facultyCSV.length; i += 1) {
      const fFaculty: Faculty = {
        name: facultyCSV[i].Name,
        email: facultyCSV[i].EmailAddress,
        title: facultyCSV[i].Title,
        college: facultyCSV[i].College,
        department: facultyCSV[i].Department,
        courses: facultyCSV[i].CourseNumber.split(","),
        description: facultyCSV[i].Description,
        tags: facultyCSV[i].Tags.split(","),
        website: facultyCSV[i].FacultyWebsites,
        image: facultyCSV[i].Images
      };
      formattedFaculty.push(fFaculty);
    }
    createFaculty(formattedFaculty);
    console.log('added Faculty to firebase');
  });