import { useSelector } from 'react-redux';
import {
  selectBackground,
  selectBackgroundLoading,
} from 'redux/backgrounds/background-selectors';

export const useBg = () => {
  const backgrounds = useSelector(selectBackground);
  const isLoading = useSelector(selectBackgroundLoading);

  return {
    backgrounds,
    isLoading,
  };
};
