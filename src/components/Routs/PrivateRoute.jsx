import { useAuth } from 'hooks/authHooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect);
  console.log(isRefreshing);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
