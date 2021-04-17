import {clubs} from './server'

const csv =  require('csv-parser')
const fsClubsRead = require('fs')
const clubsCSV = []

type formatClub = {
    "title": string,
    "designAreas": string[],
    "orgType": string, 
    "size": string,
    "website": string,
    "description": string
    "credits": number
}

let rosterSem = 'SP21'

function createClubs (formatClubs: formatClub[]) {
    for(let i = 0; i < formatClubs.length; i++) {
        const newClubs = clubs.doc(formatClubs[i].title)
        newClubs.set({
            "title": formatClubs[i].title,
            "orgType": formatClubs[i].orgType,
            "size": formatClubs[i].size,
            "designAreas": formatClubs[i].designAreas,
            "description": formatClubs[i].description,
            "website": formatClubs[i].website,
            "credits": formatClubs[i].credits
        })
    }
}

fsClubsRead.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => clubsCSV.push(data))
.on('end', () => {
    let formattedClubs:formatClub[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < clubsCSV.length; i++) {
        let fClub: formatClub = {
            "title": clubsCSV[i].title,
            "orgType": clubsCSV[i].orgType,
            "designAreas": clubsCSV[i].designAreas.split(", "),
            "website": clubsCSV[i].website,
            "credits": parseInt(clubsCSV[i].credits),
            "size": clubsCSV[i].size,
            "description": clubsCSV[i].description
        }
        formattedClubs.push(fClub)
    }
    createClubs(formattedClubs)
    console.log("added clubs to firebase")
})
