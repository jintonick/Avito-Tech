import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/authprovider';
import logo from '../components/imgs/kpBigLogo.svg';

export default function Header() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/auth');
  };
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[40px]">
        <div className="w-[120px]"></div>
        <img alt="img" src={logo} className="mt-[20px]" />
        <button
          onClick={handleLogout}
          className="mr-[60px] text-[24px] font-semibold"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
