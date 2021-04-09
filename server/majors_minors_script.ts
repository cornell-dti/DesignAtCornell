import {majors} from './server'

const csv =  require('csv-parser')
const fs_majors_read = require('fs')
const majors_csv = []

type formatMajor = {
    "title": string,
    "academic_level": string,
    "department_page": string,
    "design_areas": string[],
    "reasons": Reason[],
    "school": string
}

type Reason = {
    "first_name": string,
    "grad_year": number,
    "response": string
}

let roster_sem = 'SP21'

function createMajors (format_majors: formatMajor[]) {
    for(let i = 0; i < format_majors.length; i++) {
        const newMajor = majors.doc(format_majors[i].title)
        newMajor.set({
            "title": format_majors[i].title,
            "academic_level": format_majors[i].academic_level,
            "department_page": format_majors[i].department_page,
            "design_areas": format_majors[i].design_areas,
            "reasons": format_majors[i].reasons,
            "school": format_majors[i].school
        })
    }
}

fs_majors_read.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => majors_csv.push(data))
.on('end', () => {
    let formatted_majors:formatMajor[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < majors_csv.length; i++) {
        let f_major: formatMajor = {
            "title": majors_csv[i].title,
            "academic_level": majors_csv[i].academic_level,
            "design_areas": majors_csv[i].design_areas.split(", "),
            "reasons": majors_csv[i].reasons.split(", "),
            "school": majors_csv[i].school,
            "department_page": majors_csv[i].department_page,
        }
        formatted_majors.push(f_major)
    }
    createMajors(formatted_majors)
    console.log("added majors to firebase")
})




