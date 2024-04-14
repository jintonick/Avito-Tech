import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/authprovider';

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <>{children}</> : <Navigate to="/auth" />;
};
export default ProtectedRoute;
