import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
  timeout: 10000,
});

export default api;
