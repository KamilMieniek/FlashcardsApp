import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:8000';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
