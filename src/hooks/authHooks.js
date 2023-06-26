import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectUsers,
  selectIsRefreshing,
  selectToken,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUsers);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    token,
  };
};
