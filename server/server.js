
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
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.faculty = exports.events = exports.clubs = exports.majors = exports.courses = void 0;
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
const cors_1 = __importDefault(require('cors'));
const firebase_admin_1 = __importDefault(require('firebase-admin'));
const courses_endpoints_1 = require('./endpoints/courses/courses_endpoints');
const majors_minors_endpoints_1 = require('./endpoints/majors_minors/majors_minors_endpoints');
const clubs_endpoints_1 = require('./endpoints/clubs/clubs_endpoints');
const events_endpoints_1 = __importDefault(require('./endpoints/events/events_endpoints'));
const articles_endpoints_1 = __importDefault(require('./endpoints/articles/articles_endpoints'));
// eslint-disable-next-line
var serviceAccount = require('./designAtCornellServiceAccount.json');
firebase_admin_1.default.initializeApp({
  credential: firebase_admin_1.default.credential.cert(serviceAccount),
  databaseURL: 'https://designatcornell.firebaseio.com',
});
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(
  express_1.default.static(path_1.default.join(__dirname, '../design-at-cornell/build/'))
);
const db = firebase_admin_1.default.firestore();
exports.courses = db.collection('courses');
exports.majors = db.collection('majors');
exports.clubs = db.collection('clubs');
exports.events = db.collection('events');
exports.faculty = db.collection('faculty');
/**
 * COURSES COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */
app.get('/getCourses', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      courses_endpoints_1.getCourses(req, res);
      return [2 /* return */];
    });
  }));
/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */
/**
 * creates a new course object in firestore using client provided fields
 */
app.post('/createCourse', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      courses_endpoints_1.createCourses(req, res);
      return [2 /* return */];
    });
  }));
/**
 * querying the database for the course with the client Identifier and code
 */
app.delete('/deleteCourse', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      courses_endpoints_1.deleteCourses(req, res);
      return [2 /* return */];
    });
  }));
/**
 * updates the specified field of a course with specified content
 */
app.post('/updateCourse', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      courses_endpoints_1.updateCourses(req, res);
      return [2 /* return */];
    });
  }));
/**
 * MAJOR COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired major via query parameters from the database and
 * storing them in a local array of type Major.
 */
app.get('/getMajors', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      majors_minors_endpoints_1.getMajors(req, res);
      return [2 /* return */];
    });
  }));
/**
 * creates a new major object in firestore using client provIded fields
 */
app.post('/createMajor', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      majors_minors_endpoints_1.createMajors(req, res);
      return [2 /* return */];
    });
  }));
/**
 * querying the database for the major with the major title
 */
app.delete('/deleteMajor', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      majors_minors_endpoints_1.deleteMajors(req, res);
      return [2 /* return */];
    });
  }));
/**
 * updates the specified field of a major with specified content
 */
app.post('/updateMajor', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      majors_minors_endpoints_1.updateMajors(req, res);
      return [2 /* return */];
    });
  }));
/**
 * CLUBS COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired club(s) via query parameters from the database and
 * storing them in a local array of type Course.
 */
app.get('/getClubs', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      clubs_endpoints_1.getClubs(req, res);
      return [2 /* return */];
    });
  }));
/**
 * creates a new club object in firestore using client provIded fields
 */
app.post('/createClub', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      clubs_endpoints_1.createClubs(req, res);
      return [2 /* return */];
    });
  }));
/**
 * querying the database for the club with the club title
 */
app.delete('/deleteClub', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      clubs_endpoints_1.deleteClubs(req, res);
      return [2 /* return */];
    });
  }));
/**
 * updates the specified field of a club with specified content
 */
app.post('/updateClub', (req, res) => __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, (_a) => {
      clubs_endpoints_1.updateClubs(req, res);
      return [2 /* return */];
    });
  }));
/**
 * EVENTS COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired event(s) via query parameters from the database and
 * storing them in a local array of type Event.
 */
app.get('/getEvents', events_endpoints_1.default);
/**
 * ARTICLES FETCHING OPERATIONS
 */
app.get('/getArticles', articles_endpoints_1.default);
app.get('/*', (req, res) => {
  res.sendFile(path_1.default.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});
app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${  port}`);
});