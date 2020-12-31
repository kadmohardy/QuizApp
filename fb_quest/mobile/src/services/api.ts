import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.183:4000/api',
  timeout: 10000,
});

export default api;
