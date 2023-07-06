import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/content/content-selectors';
import { getBoards } from 'redux/content/content-operations';
import { getTasks } from 'redux/tasks/tasks-operations';
import Drawer from '@mui/material/Drawer';
import { Box, HomeWrapper } from './PagesStyle.styled';

import { useAuth } from 'hooks/authHooks';
import { light, dark, violet } from '../components/styles/Theme.styled';

import ScreensPage from 'components/ScreensPage/ScreensPage';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
const { Header } = require('components/Header/Header');
const { SidebarMain } = require('components/Sidebar/SidebarMain/SidebarMain');

const HomePage = () => {
  const [state, setState] = useState({ left: false });
  const [matches, setMatches] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const themes = {
    light,
    dark,
    violet,
  };
  const anchor = 'left';
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    dispatch(getBoards());
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    const query = '(min-width: 1280px)';
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches]);

  return (
    <ThemeProvider theme={themes[user.theme]}>
      <HomeWrapper>
        {matches ? (
          <SidebarMain />
        ) : (
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <SidebarMain />
          </Drawer>
        )}

        <Box>
          <Header toggleDrawer={toggleDrawer} />
          <ScreensPage />
        </Box>
      </HomeWrapper>
    </ThemeProvider>
  );
};

export default HomePage;
