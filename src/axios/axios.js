import axios from 'axios';

const accesToken = localStorage.getItem('token') != null
  ? localStorage.getItem('token')
  : null;
// Setting axios headers

axios.defaults.headers = {
  'access-token': accesToken,
  'Content-Type': 'application/json',
};
axios.defaults.validateStatus = (status) => status >= 200;

export default axios;
