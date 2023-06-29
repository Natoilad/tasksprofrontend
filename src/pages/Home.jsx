import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/content/content-selectors';
import { getBoards } from 'redux/content/content-operations';

import { Box, HomeWrapper } from './PagesStyle.styled';

import ScreensPage from 'components/ScreensPage/ScreensPage';
const { Header } = require('components/Header/Header');
const { SidebarMain } = require('components/Sidebar/SidebarMain/SidebarMain');

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <HomeWrapper>
      {isLoading && error}
      <SidebarMain />
      <Box>
        <Header />
        <ScreensPage />
      </Box>
    </HomeWrapper>
  );
};

export default HomePage;
