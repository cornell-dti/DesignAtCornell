
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
const __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
const __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o.default = v;
      });
const __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null)
      for (const k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
exports.__esModule = true;
exports.FieldValue = exports.auth = exports.db = void 0;
const admin = __importStar(require('firebase-admin'));
const fs_1 = require('fs');
const dotenv_1 = require('dotenv');

dotenv_1.config();
const serviceAccountPath = './resources/firebase-adminsdk.json';
const hydrateServiceAccount = function (serviceAccountPath) {
  let _a;
  const serviceAccount = JSON.parse(fs_1.readFileSync(serviceAccountPath).toString());
  const privateKey =
    (_a = process.env.FIREBASE_PRIVATE_KEY) === null || _a === void 0
      ? void 0
      : _a.replace(/\\n/g, '\n');
  return {...serviceAccount, privateKey};
};
admin.initializeApp({
  credential: admin.credential.cert(hydrateServiceAccount(serviceAccountPath)),
  databaseURL: process.env.DATABASE_URL,
});
const db = admin.firestore();
exports.db = db;
const auth = admin.auth();
exports.auth = auth;
const {FieldValue} = admin.firestore;
exports.FieldValue = FieldValue;
