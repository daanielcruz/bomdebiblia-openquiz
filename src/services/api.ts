import axios from 'axios';

const api = axios.create({
  baseURL: 'https://openquiz-public.firebaseio.com/',
  timeout: 10000,
});

export default api;
