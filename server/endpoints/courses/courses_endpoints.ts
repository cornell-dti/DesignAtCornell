import { courses } from '../../server';
import { Course, courseContent, rosterSem } from '../../types';

export async function getCourses(req, res) {
  const courseId = req.query.id;
  const courseCode = req.query.code;
  const localCourses: Course[] = [];
  let collectionIncrementer = 0;

  if (courseId === undefined) {
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
}

export async function getCourses_v2(req, res) {
  const courseId = req.query.id;
  const courseCode = req.query.code;
  const localCourses: Course[] = [];
  let collectionIncrementer = 0;

  if (courseId === undefined) {
    const coursesCollection = (await courses.doc('test').collection('test').get()).docs;
    /* eslint-disable no-await-in-loop */
    for (const doc of coursesCollection) {
        const docId = doc.id.split(' ');
        const cId = docId[0]
        const cCode = docId[1];
        const cContent: courseContent = doc.data() as courseContent;
        const course: Course = {
          id: cId,
          code: parseInt(cCode, 10),
          content: cContent,
      }
      localCourses.push(course);
    }
  } else {
    const desiredCourse = (
      await courses.doc('test').collection('test').get()
    ).docs.filter((doc) => doc.id == courseId + ' ' + courseCode.toString());
    for (const doc of desiredCourse) {
      const cContent: courseContent = doc.data() as courseContent;
      const course: Course = {
        id: courseId,
        code: parseInt(courseCode.toString(), 10),
        content: cContent,
      };
      localCourses.push(course);
    }
  }
  res.send({ success: true, data: localCourses });
}

export async function createCourses(req, res) {
  const course: Course = req.body;
  const courseId: string = course.id;
  const courseCode: number = course.code;

  if (
    course.code === undefined ||
    course.content.title === undefined ||
    course.content.courseSite === undefined ||
    course.content.courseRoster === undefined ||
    course.content.description === undefined ||
    course.id === undefined ||
    course.content.semester.length == 0 ||
    course.content.major === undefined ||
    course.content.designAreas.length == 0
  ) {
    res.send({ success: false, message: 'One or more fields is missing.' });
  } else {
    const courseIdCollection = courses.doc(rosterSem).collection(courseId);
    const newCourse = courseIdCollection.doc(courseCode.toString());
    newCourse.set(course.content);
    res.send({ success: true, data: course });
  }
}

export async function deleteCourses(req, res) {
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;

  if (courseId === undefined || courseCode === undefined) {
    res.send({ success: false, message: 'Course ID or code is missing.' });
  } else {
    courses.doc(rosterSem).collection(courseId).doc(courseCode.toString()).delete();
    res.send({ success: true });
  }
}

export async function updateCourses(req, res) {
  const { field } = req.body;
  const courseId: string = req.body.id;
  const courseCode: number = req.body.code;
  const { content } = req.body;

  if (
    content === undefined ||
    field === undefined ||
    courseCode === undefined ||
    courseId === undefined
  ) {
    res.send({ success: true, message: 'One or more fields is missing.' });
  } else {
    courses
      .doc(rosterSem)
      .collection(courseId)
      .doc(courseCode.toString())
      .update({ field: content });
    res.send({ success: true });
  }
}
