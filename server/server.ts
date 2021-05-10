import express from 'express';
import path from 'path';
import cors from 'cors';
import admin from 'firebase-admin';
import {
  Course,
  courseContent,
  Major,
  majorContent,
  Reason,
  Club,
  clubContent,
  Event,
  eventContent,
  rosterSem,
} from './types';

// eslint-disable-next-line
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

export const courses = db.collection('courses');
export const majors = db.collection('majors');
export const clubs = db.collection('clubs');
export const events = db.collection('events');

/**
 * COURSES COLLECTION CRUD OPERATIONS
 */

/**
 * retrieving the desired courses via query parameters from the database and 
 * storing them in a local array of type Course.

 * Precondition: up to two query parameters can be sent through the client: Id and code
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired courses with required fields 
 */

app.get('/getCourses', async (req, res) => {
  const courseId = req.query.id;
  const courseCode = req.query.code;
  const localCourses: Course[] = [];
  let collectionIncrementer = 0;

  if (courseId === null) {
    const courseTypes = await courses.doc(rosterSem).listCollections();
    const collections = courseTypes.map((collection) => collection.listDocuments());
    /* eslint-disable no-await-in-loop */
    for (const collection of collections) {
      const cId = courseTypes[collectionIncrementer].id;
      for (const docRef of await collection) {
        const cCode = docRef.id;
        const cContent: courseContent = (await docRef.get()).data() as courseContent;
        const course: Course = {
          id: cId,
          code: parseInt(cCode, 10),
          content: cContent,
        };
        localCourses.push(course);
      }
      collectionIncrementer += 1;
    }
  } else {
    const desiredCourse = (
      await courses.doc(rosterSem).collection(courseId.toString()).get()
    ).docs.filter((doc) => doc.id == courseCode.toString());
    for (const doc of desiredCourse) {
      const cContent: courseContent = doc.data() as courseContent;
      const course: Course = {
        id: courseId.toString(),
        code: parseInt(courseCode.toString(), 10),
        content: cContent,
      };
      localCourses.push(course);
    }
  }
  res.send({ success: true, data: localCourses });
});
/**

 * creates a new course object in firestore using client provIded fields 
 * Precondition: Client must provIde all required fields for the course, 
 * must not be a duplicate of an existing course
 * Postcondition: One new course will be created and stored in firestore
 */
app.post('/createCourse', async (req, res) => {
  const course: Course = req.body;
  const courseId: string = course.id;
  const courseCode: number = course.code;

  if (
    course.code === null ||
    course.content.title === null ||
    course.content.courseSite === null ||
    course.content.courseRoster === null ||
    course.content.description === null ||
    course.id === null ||
    course.content.semester.length == 0 ||
    course.content.major === null ||
    course.content.designAreas.length == 0
  ) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    const courseIdCollection = courses.doc(rosterSem).collection(courseId);
    const newCourse = courseIdCollection.doc(courseCode.toString());
    newCourse.set(course.content);
    res.send({ success: true, data: course });
  }
});
/**

   * querying the database for the course with the client Identifier and code
   * Precondition: request body must have a course Id and course code
   * Postcondition: only a singular course will be deleted
*/
app.delete('/deleteCourse', async (req, res) => {
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;

  if (courseId === null || courseCode === null) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    courses.doc(rosterSem).collection(courseId).doc(courseCode.toString()).delete();
    res.send({ success: true });
  }
});

/**
 * updates the specified field of a course with specified content
 * Precondition: request body must have a course Id and code, field, and new content
 * Postcondition: the specified data of a singular course will be updated
 */
app.post('/updateCourse', async (req, res) => {
  const { field } = req.body;
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;
  const { content } = req.body;

  if (content === null || field === null || courseCode === null || courseId === null) {
    res.send('One or more fields is missing.');
  } else {
    courses
      .doc(rosterSem)
      .collection(courseId)
      .doc(courseCode.toString())
      .update({ field: content });
    res.send({ success: true });
  }
});

/**
 * MAJOR COLLECTION CRUD OPERATIONS
 */

/**
 * retrieving the desired major via query parameters from the database and 
 * storing them in a local array of type Major.

 * Precondition: one query parameters can be sent through the client: major title,
 *               if no parameters are sent, all courses will be returned
 * Postcondition: returns an an array of the desired major(s) with required fields 
 */
app.get('/getMajors', async (req, res) => {
  const majorTitle = req.query.title;
  const localMajors: Major[] = [];

  if (majorTitle === null) {
    const majorDocs = await majors.get();

    for (const docRef of majorDocs.docs) {
      const majorC: majorContent = docRef.data() as majorContent;
      const major: Major = {
        content: majorC,
        title: docRef.id,
      };
      localMajors.push(major);
    }

    res.send({ success: true, data: localMajors });
  } else {
    const majorDocRef = await majors.doc(majorTitle.toString()).get();
    const majorC: majorContent = majorDocRef.data() as majorContent;
    if (majorC === null) {
      res.send({ success: false, message: 'Major not found.' });
    } else {
      const major: Major = {
        content: majorC,
        title: majorDocRef.id,
      };
      localMajors.push(major);
      res.send({ success: true, data: localMajors });
    }
  }
});

/**
 * creates a new major object in firestore using client provIded fields
 * Precondition: Client must provIde all required fields for the major,
 *               must not be a duplicate of an existing major
 * Postcondition: One new major will be created and stored in firestore
 */
app.post('/createMajor', async (req, res) => {
  const major: Major = req.body;

  if (
    major.title === null ||
    major.content.academicLevel === null ||
    major.content.departmentPage === null ||
    major.content.designAreas === null ||
    major.content.reasons === null ||
    major.content.school === null ||
    major.content.type === null
  ) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    const newMajor = majors.doc(major.title);
    newMajor.set(major.content);
    res.send({ success: true, data: major });
  }
});

/**
 * querying the database for the major with the major title
 * Precondition: request body must have a major title
 * Postcondition: only a singular major will be deleted
 */
app.delete('/deleteMajor', async (req, res) => {
  const { title } = req.body;

  if (title === null) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    majors.doc(title).delete();
    res.send({ success: true });
  }
});

/**
 * updates the specified field of a major with specified content
 * Precondition: request body must have a major title, field, and new content
 * Postcondition: the specified data of a singular major will be updated
 */
app.post('/updateMajor', async (req, res) => {
  const { field } = req.body;
  const { title } = req.body;
  const { content } = req.body;

  if (content === null || field === null || title === null) {
    res.send('One or more fields is missing.');
  } else {
    majors.doc(title).update({ field: content });
    res.send({ success: true });
  }
});

/**
 * CLUBS COLLECTION CRUD OPERATIONS
 */

/**
 * retrieving the desired club(s) via query parameters from the database and 
 * storing them in a local array of type Course.

 * Precondition: only one query parameters can be sent through the client: club title
 *               if no parameters are sent, all clubs will be returned
 * Postcondition: returns an an array of the desired clubs with required fields 
 */

app.get('/getClubs', async (req, res) => {
  const clubTitle = req.query.title;
  const localClubs: Club[] = [];

  if (clubTitle === null) {
    const clubDocs = await clubs.get();
    for (const docRef of clubDocs.docs) {
      const clubC: clubContent = docRef.data() as clubContent;
      const club: Club = {
        content: clubC,
        title: docRef.id,
      };
      localClubs.push(club);
    }
  }
  res.send({ success: true, data: localClubs });
});

/**
 * creates a new club object in firestore using client provIded fields
 * Precondition: Client must provIde all required fields for the club,
 *               must not be a duplicate of an existing event
 * Postcondition: One new club will be created and stored in firestore
 */
app.post('/createClub', async (req, res) => {
  const club: Club = req.body;

  if (
    club.title === null ||
    club.content.description === null ||
    club.content.website === null ||
    club.content.designAreas === null ||
    club.content.size === null ||
    club.content.credits === null ||
    club.content.orgType === null ||
    club.content.contact === null
  ) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    const newClub = clubs.doc(club.title);
    newClub.set(club.content);
    res.send({ success: true, data: club });
  }
});

/**
 * querying the database for the club with the club title
 * Precondition: request body must have a club title
 * Postcondition: only a singular club will be deleted
 */
app.delete('/deleteClub', async (req, res) => {
  const { title } = req.body;

  if (title === null) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    clubs.doc(title).delete();
    res.send({ success: true });
  }
});

/**
 * updates the specified field of a club with specified content
 * Precondition: request body must have a club title, field, and new content
 * Postcondition: the specified data of a singular club will be updated
 */
app.post('/updateClub', async (req, res) => {
  const { field } = req.body;
  const { title } = req.body;
  const { content } = req.body;

  if (content === null || field === null || title === null) {
    res.send('One or more fields is missing.');
  } else {
    clubs.doc(title).update({ field: content });
    res.send({ success: true });
  }
});

/**
 * EVENTS COLLECTION CRUD OPERATIONS
 */

/**
 * retrieving the desired event(s) via query parameters from the database and 
 * storing them in a local array of type Event.

 * Precondition: only one query parameters can be sent through the client: event title
 *               if no parameters are sent, all clubs will be returned
 * Postcondition: returns an an array of the desired events with required fields 
 */
app.get('/getEvents', async (req, res) => {
  const { title } = req.query;
  const localEvents: Event[] = [];

  if (title === null) {
    const eventDocs = await events.get();
    for (const docRef of eventDocs.docs) {
      const eventC: eventContent = docRef.data() as eventContent;
      const event = {
        title: docRef.id,
        content: eventC,
      };
      localEvents.push(event);
    }
    res.send({ success: true, data: localEvents });
  } else {
    const eventRef = await events.doc(title.toString()).get();
    const event = eventRef.data();
    event.title = title;
    res.send({ success: true, data: event });
  }
});

/**
 * creates a new event object in firestore using client provIded fields
 *
 * Precondition: Client must provIde all required fields for the event,
 *               must not be a duplicate of an existing event
 * Postcondition: One new event will be created and stored in firestore
 */
app.post('/createEvent', async (req, res) => {
  const event: Event = req.body;

  if (
    event.title === null ||
    event.content.description === null ||
    event.content.date === null ||
    event.content.topic === null ||
    event.content.rsvpLink === null ||
    event.content.period === null ||
    event.content.type === null
  ) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    const newEvent = events.doc(event.title);
    newEvent.set(event.content);
    res.send({ success: true, data: event });
  }
});

/**
 * querying the database for the event with the event title and deleting it
 *
 * Precondition: request body must have a event title
 * Postcondition: only a singular event will be deleted
 */
app.delete('/deleteEvent', async (req, res) => {
  const { title } = req.body;
  if (title === null) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    events.doc(title).delete();
    res.send({ success: true });
  }
});

/**
 * updates the specified field of a event with specified content
 *
 * Precondition: request body must have a event title, field, and new content
 * Postcondition: the specified data of a singular event will be updated
 */
app.post('/updateEvent', async (req, res) => {
  const { title } = req.body;
  const { field } = req.body;
  const { content } = req.body;

  if (title === null || field === null || content === null) {
    res.send({ success: true, message: 'one or more fields is missing' });
  } else {
    events.doc(title).update({ field: content });
    res.send({ success: true });
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${port}`);
});
