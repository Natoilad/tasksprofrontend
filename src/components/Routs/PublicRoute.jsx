import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/authHooks';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, token } = useAuth();
  console.log(isLoggedIn);
  console.log(token);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
