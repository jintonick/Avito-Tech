import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/authprovider';

const MainPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/auth');
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default MainPage;
