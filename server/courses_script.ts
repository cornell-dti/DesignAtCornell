import {courses} from './server'


const csv =  require('csv-parser')
const fsCoursesRead = require('fs')
const coursesCSV = []

type formatCourse = {
    "id": string,
    "code": number
    "title": string,
    "semester": string,
    "credits": number,
    "major": string,
    "description": string,
    "designAreas": string[],
    "courseRoster": string,
    "courseSite": string

}

let rosterSem = 'SP21'

function createCourses (formatCourses: formatCourse[]) {
    for(let i = 0; i < formatCourses.length; i++) {
        let courseIDCollection = courses.doc(rosterSem).collection(formatCourses[i].id)
        const newCourse = courseIDCollection.doc(formatCourses[i].code.toString())
        newCourse.set({
            "title": formatCourses[i].title,
            "semester": formatCourses[i].semester,
            "credits": formatCourses[i].credits,
            "major": formatCourses[i].major,
            "description": formatCourses[i].description,
            "designAreas": formatCourses[i].designAreas,
            "courseRoster": formatCourses[i].courseRoster,
            "courseSite": formatCourses[i].courseSite,
        })
    }
}

fsCoursesRead.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => coursesCSV.push(data))
.on('end', () => {
    let formattedCourses:formatCourse[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < coursesCSV.length; i++) {
        let fCourse:formatCourse = {
            "id" : coursesCSV[i].tag.split(" ")[0],
            "code": parseInt(coursesCSV[i].tag.split(" ")[1]),
            "title": coursesCSV[i].title,
            "semester": coursesCSV[i].semester,
            "credits": parseInt(coursesCSV[i].credits),
            "major": coursesCSV[i].major,
            "description": coursesCSV[i].description,
            "designAreas": coursesCSV[i].designAreas.split(", "),
            "courseRoster": coursesCSV[i].courseRoster,
            "courseSite": coursesCSV[i].courseSite
        }
        formattedCourses.push(fCourse)
    }
    createCourses(formattedCourses)
    console.log("added courses to firebase")
})




