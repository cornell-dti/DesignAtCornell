"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.faculty = exports.events = exports.clubs = exports.majors = exports.courses = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var courses_endpoints_1 = require("./endpoints/courses/courses_endpoints");
var majors_minors_endpoints_1 = require("./endpoints/majors_minors/majors_minors_endpoints");
var clubs_endpoints_1 = require("./endpoints/clubs/clubs_endpoints");
var events_endpoints_1 = __importDefault(require("./endpoints/events/events_endpoints"));
var articles_endpoints_1 = __importDefault(require("./endpoints/articles/articles_endpoints"));
var firebase_config_1 = require("./firebase-config");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../design-at-cornell/build/')));
exports.courses = firebase_config_1.db.collection('courses');
exports.majors = firebase_config_1.db.collection('majors');
exports.clubs = firebase_config_1.db.collection('clubs');
exports.events = firebase_config_1.db.collection('events');
exports.faculty = firebase_config_1.db.collection('faculty');
/**
 * COURSES COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */
app.get('/getCourses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        courses_endpoints_1.getCourses(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * retrieving the desired courses via query parameters from the database and
 * storing them in a local array of type Course.
 */
/**
 * creates a new course object in firestore using client provided fields
 */
app.post('/createCourse', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        courses_endpoints_1.createCourses(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * querying the database for the course with the client Identifier and code
 */
app["delete"]('/deleteCourse', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        courses_endpoints_1.deleteCourses(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * updates the specified field of a course with specified content
 */
app.post('/updateCourse', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        courses_endpoints_1.updateCourses(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * MAJOR COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired major via query parameters from the database and
 * storing them in a local array of type Major.
 */
app.get('/getMajors', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        majors_minors_endpoints_1.getMajors(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * creates a new major object in firestore using client provIded fields
 */
app.post('/createMajor', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        majors_minors_endpoints_1.createMajors(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * querying the database for the major with the major title
 */
app["delete"]('/deleteMajor', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        majors_minors_endpoints_1.deleteMajors(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * updates the specified field of a major with specified content
 */
app.post('/updateMajor', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        majors_minors_endpoints_1.updateMajors(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * CLUBS COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired club(s) via query parameters from the database and
 * storing them in a local array of type Course.
 */
app.get('/getClubs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clubs_endpoints_1.getClubs(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * creates a new club object in firestore using client provIded fields
 */
app.post('/createClub', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clubs_endpoints_1.createClubs(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * querying the database for the club with the club title
 */
app["delete"]('/deleteClub', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clubs_endpoints_1.deleteClubs(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * updates the specified field of a club with specified content
 */
app.post('/updateClub', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clubs_endpoints_1.updateClubs(req, res);
        return [2 /*return*/];
    });
}); });
/**
 * EVENTS COLLECTION CRUD OPERATIONS
 */
/**
 * retrieving the desired event(s) via query parameters from the database and
 * storing them in a local array of type Event.
 */
app.get('/getEvents', events_endpoints_1["default"]);
/**
 * ARTICLES FETCHING OPERATIONS
 */
app.get('/getArticles', articles_endpoints_1["default"]);
app.get('/*', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../design-at-cornell/build/', 'index.html'));
});
app.listen(port, function () {
    console.log("Design@Cornell server listening on port " + port);
});
