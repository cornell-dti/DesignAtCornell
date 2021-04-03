import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import admin, { firestore } from 'firebase-admin'
import {Course, course_content, Major, major_content, Reason, Club, club_content} from  './types'


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


export const courses = db.collection("courses")
export const majors = db.collection("majors")
export const clubs = db.collection("clubs")



/**
 * COURSES COLLECTION CRUD OPERATIONS
*/

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
 
  if(course_id == null) {
    const course_types = (await courses.doc(roster_sem).listCollections())
    const collections = course_types.map(collection => collection.listDocuments())

    for(const collection of collections) {
      for(const docRef of await collection) {
        let course: Course = (await docRef.get()).data() as Course
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

 app.get("/getMajors", async (req, res) => {
  let major_title = req.query.title
  const localMajors: Major[] = [];
 
  if(major_title == null) {
    let majorDocs = await majors.get()

    for(const docRef of majorDocs.docs) {
      let major_c: major_content = docRef.data() as major_content
      let major: Major = {
        "content" : major_c,
        "title" : docRef.id
      }
      localMajors.push(major)
    }  

    res.send({"success": true, "data": localMajors});
  }
  else {
    let majorDocRef = await majors.doc(major_title.toString()).get()
    let major_c: major_content = majorDocRef.data() as major_content
    if(major_c == null) {
      res.send({"success": false, "message": "Major not found."})
    }
    else {
      let major: Major = {
        "content" : major_c,
        "title" : majorDocRef.id
      }
      localMajors.push(major)
      res.send({"success": true, "data": localMajors});
    }
  }
})

/**
 * creates a new major object in firestore using client provided fields 
 * Precondition: Client must provide all required fields for the major, 
 *               must not be a duplicate of an existing major
 * Postcondition: One new major will be created and stored in firestore
*/
app.post('/createMajor', async (req, res) => {
  const major: Major = req.body

  if(major.title == null || major.content.academic_level == null || major.content.department_page == null ||
    major.content.design_areas == null || major.content.reasons == null || major.content.school == null) {
      res.send({"success": false, "message": "one or more fields is missing"});
    }
  else {
    const newMajor = majors.doc(major.title);
    newMajor.set(major.content)
    res.send({"success": true, "data": major})
  }
})

/**
   * querying the database for the major with the major title
   * Precondition: request body must have a major title
   * Postcondition: only a singular major will be deleted
*/
app.delete('/deleteMajor', async (req,res) => {
  const title: string = req.body.title
  
  if(title == null) {
    res.send({"success": false, "message": "One or more fields is missing"})
  }
  else {
    majors.doc(title).delete()
    res.send({"success": true})
  }   
})

/**
 * updates the specified field of a major with specified content
 * Precondition: request body must have a major title, field, and new content
 * Postcondition: the specified data of a singular major will be updated
*/
app.post('/updateMajor', async (req, res) => {
  const field: string = req.body.field;
  const title: string = req.body.title
  const content = req.body.content;

  if(content == null || field == null || title == null) {
    res.send("One or more fields is missing.");
  }
  else {
    majors.doc(title).update({field: content})
    res.send({"success": true, "data": []});
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

app.get('/getClubs', async (req, res)  =>  {
  let club_title = req.query.title
  const localClubs: Club[] = [];
 
  if(club_title == null) {
    let clubDocs = await clubs.get()
    for(const docRef of clubDocs.docs) {
      let club_c: club_content = docRef.data() as club_content
      let club: Club = {
        "content" : club_c,
        "title" : docRef.id
      }
      localClubs.push(club)
    }  
  }
    res.send({"success": true, "data": localClubs});
});

/**
 * creates a new club object in firestore using client provided fields 
 * Precondition: Client must provide all required fields for the club, 
 *               must not be a duplicate of an existing major
 * Postcondition: One new club will be created and stored in firestore
*/
app.post('/createClub', async (req, res) => {
  const club: Club = req.body

  if(club.title == null || club.content.description == null || club.content.website == null ||
    club.content.design_areas == null || club.content.size == null || club.content.credits == null
    || club.content.org_type == null) {
      res.send({"success": false, "message": "one or more fields is missing"});
    }
  else {
    const newClub = clubs.doc(club.title);
    newClub.set(club.content)
    res.send({"success": true, "data": club})
  }
})

/**
   * querying the database for the club with the club title
   * Precondition: request body must have a club title
   * Postcondition: only a singular club will be deleted
*/
app.delete('/deleteClub', async (req,res) => {
  const title: string = req.body.title
  
  if(title == null) {
    res.send({"success": false, "message": "One or more fields is missing"})
  }
  else {
    clubs.doc(title).delete()
    res.send({"success": true})
  }   
})

/**
 * updates the specified field of a club with specified content
 * Precondition: request body must have a club title, field, and new content
 * Postcondition: the specified data of a singular club will be updated
*/
app.post('/updateClub', async (req, res) => {
  const field: string = req.body.field;
  const title: string = req.body.title
  const content = req.body.content;

  if(content == null || field == null || title == null) {
    res.send("One or more fields is missing.");
  }
  else {
    clubs.doc(title).update({field: content})
    res.send({"success": true, "data": []});
  }
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});