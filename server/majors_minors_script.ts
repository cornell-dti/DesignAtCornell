import {majors} from './server'
import {Major, rosterSem} from './types'

const csv =  require('csv-parser')
const fsMajorsRead = require('fs')
const majorsCSV = []

type formatMajor = {
    "title": string,
    "academicLevel": string,
    "departmentPage": string,
    "designAreas": string[],
    "reasons": Reason[],
    "school": string,
    "type": string
}

type Reason = {
    "firstName": string,
    "gradYear": number,
    "response": string
}



function createMajors (formatMajors: Major[]) {
    for(let i = 0; i < formatMajors.length; i++) {
        const newMajor = majors.doc(formatMajors[i].title)
        newMajor.set({
            "title": formatMajors[i].title,
            "academicLevel": formatMajors[i].content.academicLevel,
            "departmentPage": formatMajors[i].content.departmentPage,
            "designAreas": formatMajors[i].content.designAreas,
            "reasons": formatMajors[i].content.reasons,
            "school": formatMajors[i].content.school,
            "type": formatMajors[i].content.type
            
           
        })
    }
}

fsMajorsRead.createReadStream('./website_data_csv/majors.csv')
.pipe(csv())
.on('data', (data) => majorsCSV.push(data))
.on('end', () => {
    let formattedMajors:Major[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < majorsCSV.length; i++) {
        let fMajor: Major = {
            "title": majorsCSV[i].title,
            "content": {
                "academicLevel": majorsCSV[i].academicLevel,
                "designAreas": majorsCSV[i].designAreas.split(", "),
                "reasons": majorsCSV[i].reasons.split(", "),
                "school": majorsCSV[i].school,
                "departmentPage": majorsCSV[i].departmentPage,
                "type": majorsCSV[i].type
            }
           
        }
        formattedMajors.push(fMajor)
    }
    createMajors(formattedMajors)
    console.log("added majors to firebase")
})




