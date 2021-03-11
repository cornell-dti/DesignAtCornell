import express from 'express';
import path from 'path';
import cors from 'cors';
import admin, { credential } from 'firebase-admin'

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

app.get("/getCourses", async (_, res) => {
  const allCourses = await courses.get();
  const localCourses: Course[] = [];

  for(const doc of allCourses.docs) {
    let course: Course = doc.data() as Course
    localCourses.push(course);
  }

  res.send(localCourses);

})

app.post('/createCourse',(req, res) => {
  const course: Course = req.body.course_content
  const course_id: string = req.body.id
  if(course.code == null || course.title == null || 
    course.class_roster == null || course.description == null || 
    course.filters == null || course.tags == null) {
      res.send(false);
    }

  const newCourse = courses.doc(course_id);
  newCourse.set(course)
  res.send(true);

})


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});