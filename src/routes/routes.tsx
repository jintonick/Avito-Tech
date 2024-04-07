import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/auth/auth';
import MainPage from '../pages/mainpage/mainpage';
import ProtectedRoute from './protected-routes';
import { useAuth } from '../utils/authprovider';

const AppRoutes = () => {
  const auth = useAuth();

  const handleLogin = (username: string, password: string) => {
    if (username === 'test@mail.com' && password === 'pass') {
      auth.login();
    }
  };

  return (
    <Routes>
      <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
      <Route
        path="/mainpage"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      {/* Другие маршруты */}
    </Routes>
  );
};

export default AppRoutes;
