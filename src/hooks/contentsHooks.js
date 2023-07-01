import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/content/content-selectors';

export const useContent = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    isLoading,
    error,
  };
};
