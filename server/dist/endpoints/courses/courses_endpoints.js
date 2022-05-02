
const __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(((resolve) => {
            resolve(value);
          }));
    }
    return new (P || (P = Promise))(((resolve, reject) => {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    }));
  };
const __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    let _ = {
        label: 0,
        sent () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      };
      let f;
      let y;
      let t;
      let g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y.return
                  : op[0]
                  ? y.throw || ((t = y.return) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
exports.updateCourses = exports.deleteCourses = exports.createCourses = exports.getCourses = void 0;
const server_1 = require('../../server');

const currSem = 'SP22';
function getCourses(req, res) {
  return __awaiter(this, void 0, void 0, function () {
    let courseId;
      let courseCode;
      let localCourses;
      let coursesCollection;
      let _i;
      let coursesCollection_1;
      var doc;
      let docId;
      let cId;
      let cCode;
      var cContent;
      var course;
      let desiredCourse;
      let _a;
      let desiredCourse_1;
      var doc;
      var cContent;
      var course;
    return __generator(this, (_b) => {
      switch (_b.label) {
        case 0:
          courseId = req.query.id;
          courseCode = req.query.code;
          localCourses = [];
          if (!(courseId === undefined)) return [3 /* break */, 2];
          return [4 /* yield */, server_1.courses.doc(currSem).collection(currSem).get()];
        case 1:
          coursesCollection = _b.sent().docs;
          /* eslint-disable no-await-in-loop */
          for (
            _i = 0, coursesCollection_1 = coursesCollection;
            _i < coursesCollection_1.length;
            _i++
          ) {
            doc = coursesCollection_1[_i];
            docId = doc.id.split(' ');
            cId = docId[0];
            cCode = docId[1];
            cContent = doc.data();
            course = {
              id: cId,
              code: parseInt(cCode, 10),
              content: cContent,
            };
            localCourses.push(course);
          }
          return [3 /* break */, 4];
        case 2:
          return [4 /* yield */, server_1.courses.doc(currSem).collection(currSem).get()];
        case 3:
          desiredCourse = _b.sent().docs.filter((doc) => doc.id == `${courseId  } ${  courseCode.toString()}`);
          for (_a = 0, desiredCourse_1 = desiredCourse; _a < desiredCourse_1.length; _a++) {
            doc = desiredCourse_1[_a];
            cContent = doc.data();
            course = {
              id: courseId,
              code: parseInt(courseCode.toString(), 10),
              content: cContent,
            };
            localCourses.push(course);
          }
          _b.label = 4;
        case 4:
          res.send({ success: true, data: localCourses });
          return [2 /* return */];
      }
    });
  });
}
exports.getCourses = getCourses;
function createCourses(req, res) {
  return __awaiter(this, void 0, void 0, function () {
    let course; let courseId; let courseCode; let courseCollection; let newCourse;
    return __generator(this, (_a) => {
      course = req.body;
      courseId = course.id;
      courseCode = course.code;
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
        courseCollection = server_1.courses.doc(currSem).collection(currSem);
        newCourse = courseCollection.doc(`${courseId  } ${  courseCode.toString()}`);
        newCourse.set(course.content);
        res.send({ success: true, data: course });
      }
      return [2 /* return */];
    });
  });
}
exports.createCourses = createCourses;
function deleteCourses(req, res) {
  return __awaiter(this, void 0, void 0, function () {
    let courseId; let courseCode;
    return __generator(this, (_a) => {
      courseId = req.body.id;
      courseCode = req.body.code;
      if (courseId === undefined || courseCode === undefined) {
        res.send({ success: false, message: 'Course ID or code is missing.' });
      } else {
        server_1.courses
          .doc(currSem)
          .collection(currSem)
          .doc(`${courseId  } ${  courseCode.toString()}`)
          .delete();
        res.send({ success: true });
      }
      return [2 /* return */];
    });
  });
}
exports.deleteCourses = deleteCourses;
function updateCourses(req, res) {
  return __awaiter(this, void 0, void 0, function () {
    let field; let courseId; let courseCode; let content;
    return __generator(this, (_a) => {
      field = req.body.field;
      courseId = req.body.id;
      courseCode = req.body.code;
      content = req.body.content;
      if (
        content === undefined ||
        field === undefined ||
        courseCode === undefined ||
        courseId === undefined
      ) {
        res.send({ success: true, message: 'One or more fields is missing.' });
      } else {
        server_1.courses
          .doc(currSem)
          .collection(currSem)
          .doc(`${courseId  } ${  courseCode.toString()}`)
          .update({ field: content });
        res.send({ success: true });
      }
      return [2 /* return */];
    });
  });
}
exports.updateCourses = updateCourses;
