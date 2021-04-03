import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import admin, { firestore } from 'firebase-admin'
import {Course, course_content} from './types'


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

const roster_sem = "SP21"


const courses = db.collection("courses")
/**
 * retrieving the desired courses via query parameters from the database and 
 * storing them in a local array of type Course.

 * Precondition: up to two query parameters can be sent through the client: id and code
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired courses with required fields 
 */
app.get("/getCourses", async (req, res) => {
  let course_id = req.query.id
  let course_code = req.query.code
  const localCourses: Course[] = [];
  let collectionIncrementer = 0; 
 
  if(course_id == null) {
    const course_types = (await courses.doc(roster_sem).listCollections())
    const collections = course_types.map(collection => collection.listDocuments())

    for(const collection of collections) {
      let c_id = course_types[collectionIncrementer].id
      for(const docRef of await collection) {
        let c_code = docRef.id
        let course: Course = (await docRef.get()).data() as Course
        course.id = c_id
        course.code = parseInt(c_code)
        localCourses.push(course)
      }
    }
  }
  else {
     const desiredCourse = (await courses.doc(roster_sem).collection(course_id.toString()).get())
    .docs.filter(doc => doc.id == course_code.toString())
    for(const doc of desiredCourse) {
      let course: Course = doc.data() as Course
      localCourses.push(course);
    }
  }
  res.send({"success": true, "data": localCourses});
})
/**
 * creates a new course object in firestore using client provided fields 
 * Precondition: Client must provide all required fields for the course, 
 *               must not be a duplicate of an existing course
 * Postcondition: One new course will be created and stored in firestore
*/
app.post('/createCourse', async (req, res) => {
  const course: Course = req.body
  const course_id: string = course.id
  const course_code: number = course.code

  if(course.code == null || course.content.title == null || course.content.site == null ||
    course.content.roster == null || course.content.description == null ||
    course.id == null || course.content.semester.length == 0 || course.content.major == null ||
    course.content.design_areas.length == 0) {
      res.send({"success": false, "message": "one or more fields is missing"});
    }
  else {
    let course_id_collection = courses.doc(roster_sem).collection(course_id)
    const newCourse = course_id_collection.doc(course_code.toString());
    newCourse.set(course.content)
    res.send({"success": true, "data": course})
  }
})
/**
   * querying the database for the course with the client identifier and code
   * Precondition: request body must have a course id and course code
   * Postcondition: only a singular course will be deleted
*/
app.delete('/deleteCourse', async (req,res) => {
  const course_id: string = req.body.id
  const course_code: number = req.body.code
    
  if(course_id == null || course_code == null) {
    res.send({"success": false, "message": "One or more fields is missing"})
  }
  else {
    courses.doc(roster_sem).collection(course_id).doc(course_code.toString()).delete()
    res.send({"success": true})
  }   
})
/**
 * updates the specified field of a course with specified content
 * Precondition: request body must have a course id and code, field, and new content
 * Postcondition: the specified data of a singular course will be updated
*/
app.post('/updateCourse', async (req, res) => {
  const field: string = req.body.field;
  const course_id: string = req.body.id
  const course_code: number = req.body.code
  const content = req.body.content;

  if(content == null || field == null || course_code == null || course_id == null) {
    res.send("One or more fields is missing.");
  }
  else {
    courses.doc(roster_sem).collection(course_id).doc(course_code.toString()).update({field: content})
    res.send(true);
  }
  
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});