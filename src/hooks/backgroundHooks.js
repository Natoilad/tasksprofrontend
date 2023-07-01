import { useSelector } from 'react-redux';
import { selectBackground } from 'redux/backgrounds/background-selectors';

export const useBg = () => {
  const backgrounds = useSelector(selectBackground);

  return {
    backgrounds,
  };
};
