import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Utils/AxiosHelper';
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the POST register endpoint
      const response = await AxiosInstance.post('/customer/register', {
        username,
        password,
      });
      setErrorMessage('');

      // Redirect to login page after registration
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setErrorMessage('Registration failed: ' + error.response?.data?.message || 'Something went wrong.');

      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Register</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default RegisterPage;
