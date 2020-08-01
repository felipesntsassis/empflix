const API_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://felipeassisflix.herokuapp.com';

export default {
  API_URL,
};
