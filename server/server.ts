import express from 'express';
import path from 'path';
import cors from 'cors';
import admin from 'firebase-admin';
import { createCourses, deleteCourses, getCourses, updateCourses } from './endpoints/courses/courses_endpoints';
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
import { getNodeMajorVersion } from 'typescript';
import { createMajors, deleteMajors, getMajors, updateMajors } from './endpoints/majors_minors/majors_minors_endpoints';
import { createClubs, deleteClubs, getClubs, updateClubs } from './endpoints/clubs/clubs_endpoints';
import { createEvents, deleteEvents, getEvents, updateEvents } from './endpoints/events/events_endpoints';

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
  getCourses(req, res);
});
/**
 * creates a new course object in firestore using client provIded fields 

 * Precondition: Client must provide all required fields for the course, 
 * must not be a duplicate of an existing course
 * Postcondition: One new course will be created and stored in firestore
 */
app.post('/createCourse', async (req, res) => {
  createCourses(req, res);
});
/**

   * querying the database for the course with the client Identifier and code
   * Precondition: request body must have a course Id and course code
   * Postcondition: only a singular course will be deleted
*/
app.delete('/deleteCourse', async (req, res) => {
  deleteCourses(req, res);
});

/**
 * updates the specified field of a course with specified content
 * Precondition: request body must have a course Id and code, field, and new content
 * Postcondition: the specified data of a singular course will be updated
 */
app.post('/updateCourse', async (req, res) => {
  updateCourses(req, res);
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
    getMajors(req, res);
});

/**
 * creates a new major object in firestore using client provIded fields
 * Precondition: Client must provIde all required fields for the major,
 *               must not be a duplicate of an existing major
 * Postcondition: One new major will be created and stored in firestore
 */
app.post('/createMajor', async (req, res) => {
  createMajors(req, res);
});

/**
 * querying the database for the major with the major title
 * Precondition: request body must have a major title
 * Postcondition: only a singular major will be deleted
 */
app.delete('/deleteMajor', async (req, res) => {
  deleteMajors(req, res);
});

/**
 * updates the specified field of a major with specified content
 * Precondition: request body must have a major title, field, and new content
 * Postcondition: the specified data of a singular major will be updated
 */
app.post('/updateMajor', async (req, res) => {
  updateMajors(req, res);
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
  getClubs(req, res);
});

/**
 * creates a new club object in firestore using client provIded fields
 * Precondition: Client must provIde all required fields for the club,
 *               must not be a duplicate of an existing event
 * Postcondition: One new club will be created and stored in firestore
 */
app.post('/createClub', async (req, res) => {
  createClubs(req, res);
});

/**
 * querying the database for the club with the club title
 * Precondition: request body must have a club title
 * Postcondition: only a singular club will be deleted
 */
app.delete('/deleteClub', async (req, res) => {
  deleteClubs(req, res);
});

/**
 * updates the specified field of a club with specified content
 * Precondition: request body must have a club title, field, and new content
 * Postcondition: the specified data of a singular club will be updated
 */
app.post('/updateClub', async (req, res) => {
  updateClubs(req, res);
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
  getEvents(req, res);
});

/**
 * creates a new event object in firestore using client provIded fields
 *
 * Precondition: Client must provIde all required fields for the event,
 *               must not be a duplicate of an existing event
 * Postcondition: One new event will be created and stored in firestore
 */
app.post('/createEvent', async (req, res) => {
  createEvents(req, res);
});

/**
 * querying the database for the event with the event title and deleting it
 *
 * Precondition: request body must have a event title
 * Postcondition: only a singular event will be deleted
 */
app.delete('/deleteEvent', async (req, res) => {
  deleteEvents(req, res);
});

/**
 * updates the specified field of a event with specified content
 *
 * Precondition: request body must have a event title, field, and new content
 * Postcondition: the specified data of a singular event will be updated
 */
app.post('/updateEvent', async (req, res) => {
  updateEvents(req, res);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${port}`);
});
