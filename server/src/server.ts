import express from 'express';
import path from 'path';
import cors from 'cors';
import admin from 'firebase-admin';
import {
  createCourses,
  deleteCourses,
  getCourses,
  updateCourses,
} from './endpoints/courses/courses_endpoints';
import {} from './types';
import {
  createMajors,
  deleteMajors,
  getMajors,
  updateMajors,
} from './endpoints/majors_minors/majors_minors_endpoints';
import { createClubs, deleteClubs, getClubs, updateClubs } from './endpoints/clubs/clubs_endpoints';
import getEvents from './endpoints/events/events_endpoints';
import getArticles from './endpoints/articles/articles_endpoints';
import { db } from './firebase-config';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

export const courses = db.collection('courses');
export const majors = db.collection('majors');
export const clubs = db.collection('clubs');
export const events = db.collection('events');
export const faculty = db.collection('faculty');

/**
 * COURSES COLLECTION CRUD OPERATIONS
 */

/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */
app.get('/getCourses', async (req, res) => {
  getCourses(req, res);
});
/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */

/**
 * creates a new course object in firestore using client provided fields
 */
app.post('/createCourse', async (req, res) => {
  createCourses(req, res);
});
/**
 * querying the database for the course with the client Identifier and code
 */
app.delete('/deleteCourse', async (req, res) => {
  deleteCourses(req, res);
});

/**
 * updates the specified field of a course with specified content
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
 */
app.get('/getMajors', async (req, res) => {
  getMajors(req, res);
});

/**
 * creates a new major object in firestore using client provIded fields
 */
app.post('/createMajor', async (req, res) => {
  createMajors(req, res);
});

/**
 * querying the database for the major with the major title
 */
app.delete('/deleteMajor', async (req, res) => {
  deleteMajors(req, res);
});

/**
 * updates the specified field of a major with specified content
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
 */

app.get('/getClubs', async (req, res) => {
  getClubs(req, res);
});

/**
 * creates a new club object in firestore using client provIded fields
 */
app.post('/createClub', async (req, res) => {
  createClubs(req, res);
});

/**
 * querying the database for the club with the club title
 */
app.delete('/deleteClub', async (req, res) => {
  deleteClubs(req, res);
});

/**
 * updates the specified field of a club with specified content
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
 */
app.get('/getEvents', getEvents);

/**
 * ARTICLES FETCHING OPERATIONS
 */

app.get('/getArticles', getArticles);

if (process.env.NODE_ENV) {
  app.use(express.static(path.join('../design-at-cornell/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${port}`);
});
