import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// PROD: process.env.REACT_APP_BASE_URL
// LOCAL: http://localhost:3000
// Change to only local if you are testing backend functionality.

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: 'http://localhost:3000',
});

export default api;

