import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.248.48.177:80/',
});

export default api;
