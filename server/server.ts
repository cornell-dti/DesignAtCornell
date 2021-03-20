import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import admin from 'firebase-admin'


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

 * Precondition: up to two query parameters can be sent through the client: id and code
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired courses with required fields 
 */
app.get("/getCourses", async (req, res) => {
  let course_id = req.query.id
  const localCourses: Course[] = [];
 
  if(course_id == null) {
     const desiredCourses = (await courses.get())
     for(const doc of desiredCourses.docs) {
      let course: Course = doc.data() as Course
      localCourses.push(course);
    }
  }
  else {
     const desiredCourses = (await courses.get())
    .docs.filter(doc => doc.id == course_id)
    for(const doc of desiredCourses) {
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
  const course: Course = req.body.course_content
  const course_id: string = req.body.id
  console.log(course)
  //checking if client missed any fields
  if(course.code == null || course.title == null || 
    course.class_roster == null || course.description == null || 
    course.filters == null || course.tags == null) {
      res.send({"success": false, "message": "one or more fields is missing"});
    }
  else {
    const newCourse = courses.doc(course_id);
    newCourse.set(course)
    res.send({"success": true})
  }
})
/**
   * querying the database for the course with the client identifier and code
   * Precondition: request body must have a course id
   * Postcondition: only a singular course will be deleted
*/
app.delete('/deleteCourse', async (req,res) => {
  const course_id = req.body.id
    
  if(course_id == null) {
    res.send({"success": false, "message": "One or more fields is missing"})
  }
  else {
    courses.doc(course_id).delete()
    res.send({"success": true})
  }   
})
/**
 * updates the specified field of a course with specified content
 * Precondition: request body must have a course id, field, and new content
 * Postcondition: the specified data of a singular course will be updated
*/
app.post('/updatePost', async (req, res) => {
  const field: string = req.body.field;
  const course_id: string = req.body.course
  const content = req.body.content;

  if(content == null) {
    res.send(false);
  }
    courses.doc(course_id).update({field: content})
    res.send(true);
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});