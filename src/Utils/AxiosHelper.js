import axios from 'axios';

// Create an Axios instance
const AxiosHelper = axios.create({
  baseURL: 'http://localhost:8080/api',
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
