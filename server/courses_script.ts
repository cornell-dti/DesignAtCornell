import {courses} from './server'
import {Course, rosterSem} from './types'


const csv =  require('csv-parser')
const fsCoursesRead = require('fs')
const coursesCSV = []

type formatCourse = {
    "id": string,
    "code": number
    "title": string,
    "semester": string[],
    "credits": number,
    "major": string,
    "description": string,
    "designAreas": string[],
    "courseRoster": string,
    "courseSite": string

}


function createCourses (formatCourses: Course[]) {
    for(let i = 0; i < formatCourses.length; i++) {
        let courseIDCollection = courses.doc(rosterSem).collection(formatCourses[i].id)
        const newCourse = courseIDCollection.doc(formatCourses[i].code.toString())
        newCourse.set({
            "title": formatCourses[i].content.title,
            "semester": formatCourses[i].content.semester,
            "credits": formatCourses[i].content.credits,
            "major": formatCourses[i].content.major,
            "description": formatCourses[i].content.description,
            "designAreas": formatCourses[i].content.designAreas,
            "courseRoster": formatCourses[i].content.courseRoster,
            "courseSite": formatCourses[i].content.courseSite,
        })
    }
}

fsCoursesRead.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => coursesCSV.push(data))
.on('end', () => {
    let formattedCourses:Course[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < coursesCSV.length; i++) {
        let fCourse:Course = {
            "id" : coursesCSV[i].tag.split(" ")[0],
            "code": parseInt(coursesCSV[i].tag.split(" ")[1]),
            "content": {
                "title": coursesCSV[i].title,
                "semester": coursesCSV[i].semester.split(", "),
                "credits": parseInt(coursesCSV[i].credits),
                "major": coursesCSV[i].major,
                "description": coursesCSV[i].description,
                "designAreas": coursesCSV[i].designAreas.split(", "),
                "courseRoster": coursesCSV[i].courseRoster,
                "courseSite": coursesCSV[i].courseSite,
            }
            
        }
        formattedCourses.push(fCourse)
    }
    createCourses(formattedCourses)
    console.log("added courses to firebase")
})




