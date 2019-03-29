import axios from 'axios';

// const localhostAndroid = 'http://10.0.2.2';

const api = axios.create({
  // baseURL: localhostAndroid + ':3000',
  baseURL: 'http://localhost:4000/VisitasFiscais'
});

export default api;
