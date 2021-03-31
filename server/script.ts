import {courses} from './server'

const csv =  require('csv-parser')
const fs_courses_read = require('fs')
const courses_csv = []

type formatCourse = {
    "id": string,
    "code": number
    "title": string,
    "semester": string,
    "credits": number,
    "major": string,
    "description": string,
    "design_areas": string[],
    "course_roster": string,
    "course_site": string

}

let roster_sem = 'SP21'

function createCourses (format_courses: formatCourse[]) {
    for(let i = 0; i < format_courses.length; i++) {
        let course_id_collection = courses.doc(roster_sem).collection(format_courses[i].id)
        const newCourse = course_id_collection.doc(format_courses[i].code.toString())
        newCourse.set({
            "title": format_courses[i].title,
            "semester": format_courses[i].semester,
            "credits": format_courses[i].credits,
            "major": format_courses[i].major,
            "description": format_courses[i].description,
            "design_areas": format_courses[i].design_areas,
            "course_roster": format_courses[i].course_roster,
            "course_site": format_courses[i].course_site,
        })
    }
}

fs_courses_read.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => courses_csv.push(data))
.on('end', () => {
    let formatted_courses:formatCourse[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < courses_csv.length; i++) {
        let f_course:formatCourse = {
            "id" : courses_csv[i].tag.split(" ")[0],
            "code": parseInt(courses_csv[i].tag.split(" ")[1]),
            "title": courses_csv[i].title,
            "semester": courses_csv[i].semester,
            "credits": parseInt(courses_csv[i].credits),
            "major": courses_csv[i].major,
            "description": courses_csv[i].description,
            "design_areas": courses_csv[i].design_areas.split(" "),
            "course_roster": courses_csv[i].course_roster,
            "course_site": courses_csv[i].course_site
        }
        formatted_courses.push(f_course)
    }
    createCourses(formatted_courses)
    console.log("added courses to firebase")
})




