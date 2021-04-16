import {clubs} from './server'

const csv =  require('csv-parser')
const fs_clubs_read = require('fs')
const clubs_csv = []

type formatClub = {
    "title": string,
    "design_areas": string[],
    "org_type": string, 
    "size": string,
    "website": string,
    "description": string
    "credits": number
}

let roster_sem = 'SP21'

function createClubs (format_clubs: formatClub[]) {
    for(let i = 0; i < format_clubs.length; i++) {
        const newClubs = clubs.doc(format_clubs[i].title)
        newClubs.set({
            "title": format_clubs[i].title,
            "org_type": format_clubs[i].org_type,
            "size": format_clubs[i].size,
            "design_areas": format_clubs[i].design_areas,
            "description": format_clubs[i].description,
            "website": format_clubs[i].website,
            "credits": format_clubs[i].credits
        })
    }
}

fs_clubs_read.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => clubs_csv.push(data))
.on('end', () => {
    let formatted_clubs:formatClub[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < clubs_csv.length; i++) {
        let f_club: formatClub = {
            "title": clubs_csv[i].title,
            "org_type": clubs_csv[i].org_type,
            "design_areas": clubs_csv[i].design_areas.split(", "),
            "website": clubs_csv[i].website,
            "credits": parseInt(clubs_csv[i].credits),
            "size": clubs_csv[i].size,
            "description": clubs_csv[i].description
        }
        formatted_clubs.push(f_club)
    }
    createClubs(formatted_clubs)
    console.log("added clubs to firebase")
})
