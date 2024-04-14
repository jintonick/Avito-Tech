import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../utils/authprovider";
import logo from "../components/imgs/kpBigLogo.svg";
import minilogo from "../components/imgs/kinopoisk-icon-main.svg";
import logouticon from "../components/imgs/log-out-white.svg";
import "./styles/movepage.css";

export default function Header() {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };
  return (
    <div className="header-contanier">
      {!isAuth && <div className="w-[50px]" />}
      <Link to={`/movie`} className="flex justify-center flex-grow">
        <img alt="Logo" src={logo} className="headerimg1" />
        <img alt="Logo" src={minilogo} className="headerimg2" />
      </Link>
      {isAuth ? (
        <button onClick={handleLogout} className="text-[24px] font-semibold">
          <img className="w-[35px]" src={logouticon} />
        </button>
      ) : (
        <div className="w-[40px]" />
      )}
    </div>
  );
}
