import React, { useState } from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className='App'>
      <h1>Online Bookstore</h1>
      <Router>
        <AppRoutes handleLogin={handleLogin} isAuthenticated={isAuthenticated} />
      </Router>
    </div>
  );
};

export default App;
