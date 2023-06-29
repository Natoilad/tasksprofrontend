import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectUsers,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUsers);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    isLoading,
  };
};
