import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Utils/AxiosHelper';
import { AUTH_ENDPOINTS } from '../Utils/Constants';
const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login API
      const response = await axiosInstance.post(AUTH_ENDPOINTS.LOGIN, {
        username,
        password,
      });

      // Get the JWT token from the response headers
      const token = response.headers['authorization'].split(' ')[1];

      // Store the JWT token in localStorage
      localStorage.setItem('token', token);

      handleLogin(); // This will update the app's auth state

      // Redirect to home page after successful login
      navigate('/');
    } catch (error) {
      setErrorMessage('Login failed: Invalid credentials');
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
