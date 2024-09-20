import axios from 'axios';
import { BASE_URL } from '../Utils/Constants';
// Create an Axios instance
const AxiosHelper = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include JWT token in headers
AxiosHelper.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosHelper;
