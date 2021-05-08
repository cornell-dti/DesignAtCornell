import {clubs} from './server'
import {Club} from './types'

const csv =  require('csv-parser')
const fsClubsRead = require('fs')
const clubsCSV = []


let rosterSem = 'SP21'

function createClubs (formatClubs: Club[]) {
    for(let i = 0; i < formatClubs.length; i++) {
        const newClubs = clubs.doc(formatClubs[i].title)
        newClubs.set({
            "title": formatClubs[i].title,
            "orgType": formatClubs[i].content.orgType,
            "size": formatClubs[i].content.size,
            "designAreas": formatClubs[i].content.designAreas,
            "description": formatClubs[i].content.description,
            "website": formatClubs[i].content.website,
            "credits": formatClubs[i].content.credits,
            "contact": formatClubs[i].content.contact
        })
    }
}

fsClubsRead.createReadStream('./website_data_csv/clubs.csv')
.pipe(csv())
.on('data', (data) => clubsCSV.push(data))
.on('end', () => {
    let formattedClubs:Club[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < clubsCSV.length; i++) {
        let fClub: Club = {
            "title": clubsCSV[i].title,
            "content": {
                "orgType": clubsCSV[i].orgType,
                "designAreas": clubsCSV[i].designAreas.split(", "),
                "website": clubsCSV[i].website,
                "credits": parseInt(clubsCSV[i].credits),
                "size": clubsCSV[i].size,
                "description": clubsCSV[i].description,
                "contact": clubsCSV[i].contact
            }
        }
        formattedClubs.push(fClub)
    }
    createClubs(formattedClubs)
    console.log("added clubs to firebase")
})
