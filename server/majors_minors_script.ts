import {majors} from './server'

const csv =  require('csv-parser')
const fsMajorsRead = require('fs')
const majorsCSV = []

type formatMajor = {
    "title": string,
    "academicLevel": string,
    "departmentPage": string,
    "designAreas": string[],
    "reasons": Reason[],
    "school": string
}

type Reason = {
    "firstName": string,
    "gradYear": number,
    "response": string
}

let rosterSem = 'SP21'

function createMajors (formatMajors: formatMajor[]) {
    for(let i = 0; i < formatMajors.length; i++) {
        const newMajor = majors.doc(formatMajors[i].title)
        newMajor.set({
            "title": formatMajors[i].title,
            "academicLevel": formatMajors[i].academicLevel,
            "departmentPage": formatMajors[i].departmentPage,
            "designAreas": formatMajors[i].designAreas,
            "reasons": formatMajors[i].reasons,
            "school": formatMajors[i].school
        })
    }
}

fsMajorsRead.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => majorsCSV.push(data))
.on('end', () => {
    let formattedMajors:formatMajor[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < majorsCSV.length; i++) {
        let fMajor: formatMajor = {
            "title": majorsCSV[i].title,
            "academicLevel": majorsCSV[i].academicLevel,
            "designAreas": majorsCSV[i].designAreas.split(", "),
            "reasons": majorsCSV[i].reasons.split(", "),
            "school": majorsCSV[i].school,
            "departmentPage": majorsCSV[i].departmentPage,
        }
        formattedMajors.push(fMajor)
    }
    createMajors(formattedMajors)
    console.log("added majors to firebase")
})




