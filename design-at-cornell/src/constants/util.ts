import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const api = axios.create({
  // TODO: Revert me
  baseURL: 'http://design.cornell.edu/',
  // baseURL: process.env.REACT_APP_BASE_URL,
});

export default api;
