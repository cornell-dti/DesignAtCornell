import csv from 'csv-parser';
import fsMajorsRead from 'fs';
import { majors } from '../src/server';
import { Major } from '../src/types';

const majorsCSV = [];

function createMajors(formatMajors: Major[]) {
  for (let i = 0; i < formatMajors.length; i += 1) {
    const newMajor = majors.doc(formatMajors[i].title);
    newMajor.set({
      title: formatMajors[i].content.title,
      academicLevel: formatMajors[i].content.academicLevel,
      departmentPage: formatMajors[i].content.departmentPage,
      designAreas: formatMajors[i].content.designAreas,
      reasons: formatMajors[i].content.reasons,
      school: formatMajors[i].content.school,
      type: formatMajors[i].content.type,
    });
  }
}

fsMajorsRead
  .createReadStream('../website_data_csv/majors2.csv')
  .pipe(csv())
  .on('data', (data) => majorsCSV.push(data))
  .on('end', () => {
    const formattedMajors: Major[] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < majorsCSV.length; i += 1) {
      const fMajor: Major = {
        title: `${majorsCSV[i].title},  ${majorsCSV[i].academicLevel}, ${majorsCSV[i].type}`,
        content: {
          academicLevel: majorsCSV[i].academicLevel,
          designAreas: majorsCSV[i].designAreas.split(', '),
          reasons: majorsCSV[i].reasons.split(', '),
          school: majorsCSV[i].school,
          departmentPage: majorsCSV[i].departmentPage,
          type: majorsCSV[i].type,
          title: majorsCSV[i].title,
        },
      };
      formattedMajors.push(fMajor);
    }
    createMajors(formattedMajors);
    console.log('added majors to firebase');
  });
