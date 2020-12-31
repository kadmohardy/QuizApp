import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://104.248.48.177:3333',
  baseURL: 'http://10.0.0.183:3333',
});

export default api;
