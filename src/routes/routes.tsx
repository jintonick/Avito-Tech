import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../pages/auth';
import MoviePage from '../pages/movie-page';
import ProtectedRoute from './protected-routes';
import CurrentMoviePage from '../pages/current-movie-page';
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
        path="/movie"
        element={
          <ProtectedRoute>
            <MoviePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <CurrentMoviePage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate replace to="/auth" />} />
      {/* Другие маршруты */}
    </Routes>
  );
};

export default AppRoutes;
