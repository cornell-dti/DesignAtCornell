import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import admin, { firestore } from 'firebase-admin';
import { isConstructorDeclaration } from 'typescript';
import { Course, courseContent } from './types';

/* eslint @typescript-eslint/no-var-requires: "off" */
const serviceAccount = require('./designAtCornellServiceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://designatcornell.firebaseio.com',
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../design-at-cornell/build/')));

const db = admin.firestore();

const rosterSem = 'SP21';

const courses = db.collection('courses');
/**
 * retrieving the desired courses via query parameters from the database and 
 * storing them in a local array of type Course.

 * Precondition: up to two query parameters can be sent through the client: id and code
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired courses with required fields 
 */
app.get('/getCourses', async (req, res) => {
  const courseId = req.query.id;
  const courseCode = req.query.code;
  const localCourses: Course[] = [];
  const collectionIncrementer = 0;

  if (courseId == null) {
    const courseTypes = await courses.doc(rosterSem).listCollections();
    const collections = courseTypes.map((collection) => collection.listDocuments());

    /* eslint-disable no-await-in-loop */
    for (const collection of collections) {
      const cId = courseTypes[collectionIncrementer].id;
      for (const docRef of await collection) {
        const cCode = docRef.id;
        const course: Course = (await docRef.get()).data() as Course;
        course.id = cId;
        course.code = parseInt(cCode, 10);
        localCourses.push(course);
      }
    }
  } else {
    const desiredCourse = (
      await courses.doc(rosterSem).collection(courseId.toString()).get()
    ).docs.filter((doc) => doc.id === courseCode.toString());
    for (const doc of desiredCourse) {
      const course: Course = doc.data() as Course;
      localCourses.push(course);
    }
  }
  res.send({ success: true, data: localCourses });
});
/**
 * creates a new course object in firestore using client provided fields
 * Precondition: Client must provide all required fields for the course,
 *               must not be a duplicate of an existing course
 * Postcondition: One new course will be created and stored in firestore
 */
app.post('/createCourse', async (req, res) => {
  const course: Course = req.body;
  const courseId: string = course.id;
  const courseCode: number = course.code;

  if(course.code == null || course.content.title == null || course.content.courseSite == null ||
    course.content.courseRoster == null || course.content.description == null ||
    course.id == null || course.content.semester.length == 0 || course.content.major == null ||
    course.content.designAreas.length == 0) {
      res.send({"success": false, "message": "one or more fields is missing"});
    }
  else {
    const courseIdCollection = courses.doc(rosterSem).collection(courseId)
    const newCourse = courseIdCollection.doc(courseCode.toString());
    newCourse.set(course.content)
    res.send({"success": true, "data": course})
  }
});
/**
 * querying the database for the course with the client identifier and code
 * Precondition: request body must have a course id and course code
 * Postcondition: only a singular course will be deleted
 */
app.delete('/deleteCourse', async (req, res) => {
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;

  if (courseId == null || courseCode == null) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    courses.doc(rosterSem).collection(courseId).doc(courseCode.toString()).delete();
    res.send({ success: true });
  }
});
/**
 * updates the specified field of a course with specified content
 * Precondition: request body must have a course id and code, field, and new content
 * Postcondition: the specified data of a singular course will be updated
 */
app.post('/updateCourse', async (req, res) => {
  const { field } = req.body;
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;
  const { content } = req.body;

  if (content == null || field == null || courseCode == null || courseId == null) {
    res.send('One or more fields is missing.');
  } else {
    courses
      .doc(rosterSem)
      .collection(courseId)
      .doc(courseCode.toString())
      .update({ field: content });
    res.send(true);
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${port}`);
});
