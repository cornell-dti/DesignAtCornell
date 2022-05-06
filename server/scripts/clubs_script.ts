import csv from 'csv-parser';
import fsClubsRead from 'fs';
import { clubs } from '../src/server';
import { Club } from '../src/types';

const clubsCSV = [];

function createClubs(formatClubs: Club[]) {
  for (let i = 0; i < formatClubs.length; i += 1) {
    const newClubs = clubs.doc(formatClubs[i].title);
    newClubs.set({
      title: formatClubs[i].title,
      orgType: formatClubs[i].content.orgType,
      designAreas: formatClubs[i].content.designAreas,
      website: formatClubs[i].content.website,
    });
  }
}

fsClubsRead
  .createReadStream('./website_data_csv/clubs2.csv')
  .pipe(csv())
  .on('data', (data) => clubsCSV.push(data))
  .on('end', () => {
    const formattedClubs: Club[] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < clubsCSV.length; i += 1) {
      const fClub: Club = {
        title: clubsCSV[i].title,
        content: {
          orgType: clubsCSV[i].orgType,
          designAreas: clubsCSV[i].designAreas.split(', '),
          website: clubsCSV[i].website,
        },
      };
      formattedClubs.push(fClub);
    }
    createClubs(formattedClubs);
    console.log('added clubs to firebase');
  });
