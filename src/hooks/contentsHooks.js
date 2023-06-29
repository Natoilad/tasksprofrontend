import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectBackground,
} from 'redux/content/content-selectors';

export const useContent = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const backgrounds = useSelector(selectBackground);

  return {
    isLoading,
    error,
    backgrounds,
  };
};
