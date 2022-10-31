import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import LayoutPage from 'pages/LayoutPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
