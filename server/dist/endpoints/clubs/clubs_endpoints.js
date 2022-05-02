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
exports.__esModule = true;
exports.updateClubs = exports.deleteClubs = exports.createClubs = exports.getClubs = void 0;
var server_1 = require("../../server");
function getClubs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var clubTitle, localClubs, clubDocs, _i, _a, docRef, clubC, club;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    clubTitle = req.query.title;
                    localClubs = [];
                    if (!(clubTitle === undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, server_1.clubs.get()];
                case 1:
                    clubDocs = _b.sent();
                    for (_i = 0, _a = clubDocs.docs; _i < _a.length; _i++) {
                        docRef = _a[_i];
                        clubC = docRef.data();
                        club = {
                            content: clubC,
                            title: docRef.id
                        };
                        localClubs.push(club);
                    }
                    _b.label = 2;
                case 2:
                    res.send({ success: true, data: localClubs });
                    return [2 /*return*/];
            }
        });
    });
}
exports.getClubs = getClubs;
function createClubs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var club, newClub;
        return __generator(this, function (_a) {
            club = req.body;
            if (club.title === undefined ||
                club.content.description === undefined ||
                club.content.website === undefined ||
                club.content.designAreas === undefined ||
                club.content.size === undefined ||
                club.content.credits === undefined ||
                club.content.orgType === undefined ||
                club.content.contact === undefined) {
                res.send({ success: false, message: 'One or more fields is missing.' });
            }
            else {
                newClub = server_1.clubs.doc(club.title);
                newClub.set(club.content);
                res.send({ success: true, data: club });
            }
            return [2 /*return*/];
        });
    });
}
exports.createClubs = createClubs;
function deleteClubs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var title;
        return __generator(this, function (_a) {
            title = req.body.title;
            if (title === undefined) {
                res.send({ success: false, message: 'Club name field is missing.' });
            }
            else {
                server_1.clubs.doc(title)["delete"]();
                res.send({ success: true });
            }
            return [2 /*return*/];
        });
    });
}
exports.deleteClubs = deleteClubs;
function updateClubs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var field, title, content;
        return __generator(this, function (_a) {
            field = req.body.field;
            title = req.body.title;
            content = req.body.content;
            if (content === undefined || field === undefined || title === undefined) {
                res.send({ success: false, message: 'One or more fields is missing.' });
            }
            else {
                server_1.clubs.doc(title).update({ field: content });
                res.send({ success: true });
            }
            return [2 /*return*/];
        });
    });
}
exports.updateClubs = updateClubs;
