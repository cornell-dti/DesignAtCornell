import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// use process.env.REACT_APP_BASE_URL if only changing frontend

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default api;
