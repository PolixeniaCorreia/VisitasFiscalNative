import axios from 'axios';

const localhostAndroid = 'http://10.0.2.2';

const api = axios.create({
  // baseURL: localhostAndroid + ':3000',
  baseURL: 'http://10.0.2.2:3000',
});

export default api;
