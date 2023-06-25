import { useAuth } from 'hooks/authHooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect);
  console.log(isRefreshing);
  console.log(token);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
