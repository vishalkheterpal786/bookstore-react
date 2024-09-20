import { Navigate, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const AppRoutes = ({ handleLogin, isAuthenticated }) => {
  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <BookList /> : <Navigate to='/login' />} />
      <Route path='/cart' element={isAuthenticated ? <CartPage /> : <Navigate to='/login' />} />
      <Route path='/login' element={<LoginPage handleLogin={handleLogin} />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
export default AppRoutes;
