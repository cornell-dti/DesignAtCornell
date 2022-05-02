"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.FieldValue = exports.auth = exports.db = void 0;
var admin = __importStar(require("firebase-admin"));
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var serviceAccountPath = './resources/firebase-adminsdk.json';
var hydrateServiceAccount = function (serviceAccountPath) {
    var _a;
    var serviceAccount = JSON.parse(fs_1.readFileSync(serviceAccountPath).toString());
    var privateKey = (_a = process.env.FIREBASE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n');
    return __assign(__assign({}, serviceAccount), { privateKey: privateKey });
};
admin.initializeApp({
    credential: admin.credential.cert(hydrateServiceAccount(serviceAccountPath)),
    databaseURL: process.env.DATABASE_URL
});
var db = admin.firestore();
exports.db = db;
var auth = admin.auth();
exports.auth = auth;
var FieldValue = admin.firestore.FieldValue;
exports.FieldValue = FieldValue;
