import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  return useContext(AuthContext)!;
};
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'));
  const login = () => {
    localStorage.setItem('isAuth', 'true');
    setIsAuth(true);
  };
  const logout = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
