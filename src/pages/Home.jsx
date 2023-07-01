import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/content/content-selectors';
import { getBoards } from 'redux/content/content-operations';
import { getTasks } from 'redux/tasks/tasks-operations';
import { Box, HomeWrapper } from './PagesStyle.styled';

import { useAuth } from 'hooks/authHooks';
import { light, dark, violet } from '../components/styles/Theme.styled';

import ScreensPage from 'components/ScreensPage/ScreensPage';
import { ThemeProvider } from 'styled-components';
// import { Outlet } from 'react-router-dom';
const { Header } = require('components/Header/Header');
const { SidebarMain } = require('components/Sidebar/SidebarMain/SidebarMain');

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { user } = useAuth();

  const themes = {
    light,
    dark,
    violet,
  };

  useEffect(() => {
    dispatch(getBoards());
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themes[user.theme]}>
      <HomeWrapper>
        {isLoading && error}
        <SidebarMain />
        <Box>
          <Header />
          <ScreensPage />
        </Box>
      </HomeWrapper>
    </ThemeProvider>
  );
};

export default HomePage;
