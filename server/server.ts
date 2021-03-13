import express from 'express';
import path from 'path';
import cors from 'cors';
import admin, { credential } from 'firebase-admin'
import e from 'express';

const serviceAccount = require("./designAtCornellServiceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://designatcornell.firebaseio.com"
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../design-at-cornell/build/')));

const db = admin.firestore()

type Course = {
  "title": string,
  "code": number,
  "description": string,
  "syllabus": string,
  "course_site": string,
  "class_roster": string,
  "tags": Tags,
  "filters": Filters
  
}

type Filters = {
  "credits": number,
  "major": string,
  "design_areas": string[],
  "semester": string[],
  "level": number
}

type Tags = {
  "credits": number,
  "major": string,
  "design_areas": string[],
  "semester": string[]
}

const courses = db.collection("courses")

/**
 * retrieving the desired courses via query parameters from the database and 
 * storing them in a local array of type Course.
 * 
 * Precondition: up to two query parameters can be sent through the client: id and code
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired courses with required fields 
 */

app.get("/getCourses", async (req, res) => {
  let course_id = req.query.id
  let course_code = req.query.code
  console.log(course_id)
  const localCourses: Course[] = [];
 
  if(course_id == "" && course_code == "") {
     const desiredCourses = (await courses.get())

     for(const doc of desiredCourses.docs) {
      let course: Course = doc.data() as Course
      localCourses.push(course);
    }
  }
  else {
     const desiredCourses = (await courses.get())
    .docs.filter(doc => doc.id == course_id && doc.data()["Code"] == course_code)

    for(const doc of desiredCourses) {
      let course: Course = doc.data() as Course
      localCourses.push(course);
    }
  }

  res.send(localCourses);

})

/**
 * creates a new course object in firestore using client provided fields 
 * Precondition: Client must provide all required fields for the course, 
 *               must not be a duplicate of an existing course
 * Postcondition: One new course will be created and stored in firestore
 */

app.post('/createCourse', async (req, res) => {
  const course: Course = req.body.course_content
  const course_id: string = req.body.id
  //checking if client missed any fields
  if(course.code == null || course.title == null || 
    course.class_roster == null || course.description == null || 
    course.filters == null || course.tags == null) {
      res.send("one or more fields is missing");
    }

  /**
   * checking if course already exists by retrieving all courses with
   * client code and then among those, checking the courses with client
   * id. Same logic is applied in /deleteCourse
  */
  let duplicate_code_courses = await courses.where("code", "==", course.code).get()
  let duplicate_course = duplicate_code_courses.docs.filter(doc => doc.id == course_id)
  if (duplicate_course.length != 0) {
    res.send({"message": "course already exists", "success": false})
  }
  else {
    const newCourse = courses.doc(course_id);
    newCourse.set(course)
    res.send({"success": true})
  }
})

/**
   * querying the database for the course with the client identifier and code
   * Precondition: request body must have an id and code
   * Postcondition: only a singular course will be deleted
   * 
   * Example: 
   * if client passes "id": "ARCH", "code": 1101, courseToDelete will
   * first query all the courses with code 1101, and then among those, query
   * the course with id ARCH. This prevents unintentional deletion of
   * two courses with the same code but different id. (i.e ARCH 1101 CS 1101)
   * */

app.delete('/deleteCourse', async (req,res) => {
  const id = req.body.id
  const code = req.body.code
  
  let courseWithCode = await courses.where("code", "==",code).get()
  console.log(courseWithCode.docs)
  if(courseWithCode.empty) {
    res.send({"message": "course does not exist","success": false})
  }
  else {
    let courseToDelete = courseWithCode.docs.filter(doc => doc.id == id)
    courses.doc(courseToDelete[0].id).delete()
    res.send({"success": true})
  }
   
})




app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});