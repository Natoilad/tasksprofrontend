import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectUsers,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUsers);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
